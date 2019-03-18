import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FileUploader} from "ng2-file-upload";
import { CookieService } from 'ngx-cookie';

@Component({
		selector: 'create-tweet-modal',
		templateUrl: "./create-tweet-modal.component.html",
	}
)

export class CreateTweetModalComponent implements OnInit{


	uploader: FileUploader = null;
	constructor(private activeModalService: NgbActiveModal,private cookieService: CookieService){}


	ngOnInit(): void {
		this.uploader = new FileUploader(
			{
				itemAlias: 'image',
				url: './api/image/',

				additionalParameter: {}
			}
		);
	}

	closeModalButton(){
		this.activeModalService.dismiss("Cross click")
	}





	submitTweetWithImage() {

	}
}