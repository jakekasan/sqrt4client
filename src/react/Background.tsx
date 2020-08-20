import React, { FunctionComponent } from "react";
import { useLocation } from "react-router-dom";

import BackgroundImage from "./../img/background/background2.jpg";
import Homer from "./../img/homer.png";

const YoutubeBackground: FunctionComponent<{}> = () => {
    return (
        <img className="background" src={ Homer as string } />
    )
}

const StaticBackground: FunctionComponent<{}> = () => {
    return (
        <img className="background" src={ BackgroundImage as string }/>
    )
}

export const Background: FunctionComponent<{}> = () => {
    const location = useLocation();

    if (location.pathname === "/") {
        return <YoutubeBackground />
    } else {
        return <StaticBackground />
    }
}