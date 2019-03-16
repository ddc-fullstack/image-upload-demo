import {Component, OnInit} from "@angular/core";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {CreateTweetModalComponent} from "./create-tweet-modal/create-tweet-modal.component";

@Component({
	templateUrl: "./splash.component.html"
})

export class SplashComponent {

	constructor(private modalService:  NgbModal){}

	openModal() {
		this.modalService.open(CreateTweetModalComponent)
	}
}