import {Component, Input} from '@angular/core';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
		selector: 'create-tweet-modal',
		templateUrl: "./create-tweet-modal.component.html",
	}
)

export class CreateTweetModalComponent {
	constructor(private activeModalService: NgbActiveModal){}

	closeModalButton(){
		this.activeModalService.dismiss("Cross click")
	}
}