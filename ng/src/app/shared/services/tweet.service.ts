import {Injectable} from "@angular/core";

import {Status} from "../interfaces/status";
import {Tweet} from "../interfaces/tweet";
import {Observable} from "rxjs/internal/Observable";
import {HttpClient} from "@angular/common/http";

@Injectable ()
export class TweetService {

	constructor(protected http : HttpClient ) {}

	//define the API endpoint
	private tweetUrl = "api/tweet/";


	// call to the tweet API and create the tweet in question
	createTweet(tweet : Tweet) : Observable<Status> {
		return(this.http.post<Status>(this.tweetUrl, tweet));
	}

	//call to the API and get an array of all the tweets in the database
	getAllTweets() : Observable<Tweet[]> {
		return(this.http.get<Tweet[]>(this.tweetUrl));
	}
}