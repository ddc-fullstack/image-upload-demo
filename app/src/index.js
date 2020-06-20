import React from 'react';
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter} from "react-router-dom";
import {Route, Switch} from "react-router";
import {FourOhFour} from "./pages/FourOhFour";
import {Home} from "./pages/home/home/Home";
import {library} from '@fortawesome/fontawesome-svg-core'
import {faDove, faEnvelope, faKey, faPhone, faStroopwafel} from "@fortawesome/free-solid-svg-icons";

library.add(faStroopwafel, faEnvelope, faKey, faDove, faPhone);


const Routing = () => {
	return (
		<>
				<BrowserRouter>
					<Switch>
						<Route exact path="/" component={Home}/>
						<Route component={FourOhFour}/>
					</Switch>
				</BrowserRouter>
		</>
	)
};

ReactDOM.render(Routing(), document.querySelector("#root"));

