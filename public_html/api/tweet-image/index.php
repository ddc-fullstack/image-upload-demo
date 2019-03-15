<?php

require_once dirname(__DIR__, 3) . "/vendor/autoload.php";
require_once dirname(__DIR__, 3) . "/php/classes/autoload.php";
require_once("/etc/apache2/capstone-mysql/Secrets.php");
require_once dirname(__DIR__, 3) . "/php/lib/xsrf.php";
require_once dirname(__DIR__, 3) . "/php/lib/uuid.php";
require_once dirname(__DIR__, 3) . "/php/lib/jwt.php";

use Edu\Cnm\DataDesign\{
	Tweet, Image, Profile
};

/**
 * Cloudinary API for Images
 *
 * @author Marty Bonacci
 * @version 1.0
 */

// start session
if(session_status() !== PHP_SESSION_ACTIVE) {
	session_start();
}

// prepare an empty reply
$reply = new StdClass();
$reply->status = 200;
$reply->data = null;

try {

	// Grab the MySQL connection
	$secrets = new \Secrets("/etc/apache2/capstone-mysql/ddctwitter.ini");
	$pdo = $secrets->getPdoObject();
	$cloudinary = json_decode($pdo->getSecret("cloudinary"));

	//determine which HTTP method is being used
	$method = $_SERVER["HTTP_X_HTTP_METHOD"] ?? $_SERVER["REQUEST_METHOD"];

	$tweetId = filter_input(INPUT_GET, "tweetId", FILTER_SANITIZE_STRING, FILTER_FLAG_NO_ENCODE_QUOTES);
	$profileId = filter_input(INPUT_GET, "profileId", FILTER_SANITIZE_STRING, FILTER_FLAG_NO_ENCODE_QUOTES);
	$id = filter_input(INPUT_GET, "id", FILTER_SANITIZE_STRING, FILTER_FLAG_NO_ENCODE_QUOTES);


	\Cloudinary::config(["cloud_name" => $cloudinary->cloudName, "api_key" => $cloudinary->apiKey, "api_secret" => $cloudinary->apiSecret]);


	// process GET requests
	if($method === "GET") {
		// set XSRF token
		setXsrfCookie();

		//get a specific image by id and update reply
		if(empty($id) === false) {
			$image = Image::getImageByImageId($pdo, $id);
		} elseif(empty($tweetId) === false) {
		$reply->data = Image::getImageByImageTweetId($pdo, $tweetId)->toArray();
		} elseif(empty($profileId) === false) {
			$reply->data = Image::getImageByProfileId($pdo, $profileId)->toArray();
		}

	}  elseif($method === "POST") {

		//enforce that the end user has a XSRF token.
		verifyXsrf();

		// assigning variable to the user profile, add image extension
		$tempUserFileName = $_FILES["image"]["tmp_name"];

		// upload image to cloudinary and get public id
		$cloudinaryResult = \Cloudinary\Uploader::upload($tempUserFileName, array("width" => 500, "crop" => "scale"));

		// after sending the image to Cloudinary, create a new image
		$image = new Image(generateUuidV4(), $tweetId, $cloudinaryResult["signature"], $cloudinaryResult["secure_url"]);
		$image->update($pdo);
		// update reply
		$reply->message = "Image uploaded Ok";
	}

} catch(Exception $exception) {
	$reply->status = $exception->getCode();
	$reply->message = $exception->getMessage();
}

header("Content-Type: application/json");
// encode and return reply to front end caller
echo json_encode($reply);
