import React from "react";
import {BrowserRouter as Router, Switch, Route, useLocation,} from "react-router-dom";
import App from "./App";
import MswwPage from "./msww";

export default function ModalGalleryExample() {
    return (
        <Router>
            <ModalSwitch />
        </Router>
    );
}

function ModalSwitch() {
    let location = useLocation();
    let background = location.state && location.state.background;
    return (
        <div>
            <Switch location={background || location}>
                <Route exact path="/" children={<App/>} />
                <Route path="/ProjetMsw/:id" children={<MswwPage />} />
                {/* <Route path="/gallery" children={<Gallery />} />
                <Route path="/img/:id" children={<ImageView />} />*/}
            </Switch>
            {/*{background && <Route path="/img/:id" children={<Modal />} />}*/}
        </div>
    );
}
