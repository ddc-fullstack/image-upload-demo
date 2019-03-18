import {Injectable} from "@angular/core";
import {Observable} from "rxjs/internal/Observable";
import {HttpClient} from "@angular/common/http";
import {Image} from "../shared/interfaces/image";

@Injectable ()
export class TweetImageService {

	constructor(protected http: HttpClient) {
	}

	//define the API endpoint
	private tweetUrl = "api/tweet-image/";

	// call to the tweet API and delete the tweet in question
	getImages(tweetId: string): Observable<Image[]> {
		return (this.http.get<Image[]>(this.tweetUrl + "?imageTweetId="  + tweetId));
	}
}