import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {allAppComponents, appRoutingProviders, routing} from "./app.routes.module"
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";


@NgModule({
	imports: [BrowserModule, FormsModule, routing, HttpClientModule],
	declarations: [...allAppComponents, AppComponent],
	bootstrap: [AppComponent],
	providers: [appRoutingProviders]
})
export class AppModule {
}