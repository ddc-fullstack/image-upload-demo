import React from 'react';
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter} from "react-router-dom";
import {Route, Switch} from "react-router";
import {FourOhFour} from "./pages/FourOhFour";
import {Home} from "./pages/home/Home";
import {library} from '@fortawesome/fontawesome-svg-core'
import {Profile} from "./pages/Profile";
import {applyMiddleware, createStore} from "redux";
import {combinedReducers} from "./shared/reducers/reducers";
import thunk from "redux-thunk";
import Provider from "react-redux/lib/components/Provider";
import {httpConfig} from "./shared/utils/http-config";
import {MainNav} from "./shared/components/MainNav";
import {faDove, faEnvelope, faKey, faPhone, faStroopwafel} from "@fortawesome/free-solid-svg-icons";

const store = createStore(combinedReducers, applyMiddleware(thunk));

library.add(faStroopwafel, faEnvelope, faKey, faDove, faPhone);



const Routing = (store) => {

	httpConfig.get("/apis/earl-grey/");

	return (
		<>
			<Provider store={store}>
				<BrowserRouter>
					<MainNav />
					<Switch>
						<Route exact path="/profile" component={Profile} />
						<Route exact path="/" component={Home} />
						<Route component={FourOhFour} />
					</Switch>
				</BrowserRouter>
			</Provider>
		</>
	)
};

ReactDOM.render(Routing(store), document.querySelector("#root"));

