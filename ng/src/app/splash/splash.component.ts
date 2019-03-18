import {Component, OnInit} from "@angular/core";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {CreateTweetModalComponent} from "./create-tweet-modal/create-tweet-modal.component";
import {CookieService} from "ngx-cookie";
import {FileUploader} from "ng2-file-upload";
import {Tweet} from "../shared/interfaces/tweet";
import {TweetService} from "../shared/services/tweet.service";
import {Image} from "../shared/interfaces/image";
import {TweetImageService} from "./tweet-image.service";

@Component({
	templateUrl: "./splash.component.html",
	styleUrls: ["./splash.component.css"]
})

export class SplashComponent implements OnInit {

	tweetId = {tweetId: "2d3a5ccd-c7f2-4271-bc36-2796b355fbf8"};
	tweet: Tweet = {tweetId: null, tweetProfileId: null, tweetContent: null, tweetDate: null};
	images: Image[] = [];
	imageNotSelected: boolean = true;

	public uploader: FileUploader = new FileUploader(
		{
			itemAlias: 'image',
			url: './api/tweet-image/',
			headers: [
				//you will alos want to include a JWT-TOKEN
				{name: 'X-XSRF-TOKEN', value: this.cookieService.get('XSRF-TOKEN')}
			],
			additionalParameter: this.tweetId
		}
	);

	constructor(private modalService: NgbModal, private cookieService: CookieService, private tweetService: TweetService, private tweetImageService: TweetImageService) {
	}

	ngOnInit(): void {
		this.getTweetById();
		this.getTweetImagesByTweetId();
		console.log(this.uploader);
	}

	uploadImage(): void {

		console.log(this.uploader.uploadAll());
		//this.uploader.clearQueue();
		//this.getTweetImagesByTweetId();


	}

	getTweetById() {
		this.tweetService.getTweetById(this.tweetId.tweetId).subscribe(reply => this.tweet = reply)

	}

	getTweetImagesByTweetId() {
		this.tweetImageService.getImages(this.tweetId.tweetId).subscribe(reply => this.images = reply);
	}
}