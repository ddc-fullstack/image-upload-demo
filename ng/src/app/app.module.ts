import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {allAppComponents, appRoutingProviders, entryComponents, routing} from "./app.routes.module"
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {CookieModule} from "ngx-cookie";
import { FileUploadModule } from 'ng2-file-upload';

@NgModule({
	imports: [BrowserModule, FormsModule, routing, HttpClientModule, NgbModule, CookieModule.forRoot(), FileUploadModule],
	declarations: [...allAppComponents, AppComponent],
	entryComponents: entryComponents,
	bootstrap: [AppComponent],
	providers: [appRoutingProviders]
})
export class AppModule {
}