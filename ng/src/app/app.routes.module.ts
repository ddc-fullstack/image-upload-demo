

import {RouterModule, Routes} from "@angular/router";
import {SplashComponent} from "./splash/splash.component";
import{AppComponent} from "./app.component"
import {TweetService} from "./shared/services/tweet.service";
import {SignUpService} from "./shared/services/sign-up.service";
import {SessionService} from "./shared/services/session.service";
import {DeepDiveInterceptor} from "./shared/interceptors/deep-dive.interceptor";
import {HTTP_INTERCEPTORS} from "@angular/common/http";



export const allAppComponents = [AppComponent, SplashComponent];

export const routes: Routes = [
	{path: "", component: SplashComponent}
];

export const appRoutingProviders: any[] = [
	SessionService,  SignUpService, TweetService,
	{provide: HTTP_INTERCEPTORS, useClass: DeepDiveInterceptor, multi: true}
];

export const routing = RouterModule.forRoot(routes);