import React from "react";
import GoogleFontLoader from "react-google-font-loader";
import Ticker from "react-ticker";
import { BrowserRouter, Route, NavLink } from "react-router-dom";
import axios from "./axios";
import Submit from "./submit";
import Browse from "./browse";
import Info from "./info";
import Admin from "./admin";
import { Helmet } from "react-helmet";

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const cursor = document.querySelector("div.cursor");

        document.addEventListener("mousemove", function(e) {
            cursor.style.top = e.clientY - 10 + "px";
            cursor.style.left = e.clientX - 10 + "px";
        });
    }

    render() {
        return (
            <>
                <Helmet>
                    <title>Corona Emotions Club</title>
                    <meta name="description" content="COVID-19" />
                    <meta
                        name="keywords"
                        content="COVID-19, corona virus, pandemie"
                    />
                    <meta
                        name="application-name"
                        content="corona emotions club"
                    />
                    <meta name="theme-color" content="green" />
                    <meta property="og:image:width" content="1080" />
                    <meta property="og:image:height" content="1080" />
                    <meta
                        property="og:url"
                        content="https://corona-emotions.club/browse"
                    />
                    <meta
                        property="og:description"
                        content="Corona Emotions Club"
                    />
                    <meta property="og:image" content="preview.jpg" />
                    <meta property="og:image:url" content="preview.jpg" />
                </Helmet>

                <BrowserRouter>
                    <GoogleFontLoader
                        fonts={[
                            {
                                font: "Codystar",
                                weights: [400, "400i"]
                            }
                        ]}
                    />

                    <div className="gradient"></div>
                    <div className="cursor"></div>

                    <Ticker speed={4}>
                        {({ index }) => (
                            <h1
                                style={{
                                    fontFamily: "Codystar",
                                    textShadow:
                                        "0 0 0.1em #fff, 0 0 0.15em #fff, 0 0 0.2em #fff, 0 0 0.25em #fff, 0 0 0.3em #fff, 0 0 0.3em #fff, 0 0 0.3em #fff",
                                    zIndex: "1000"
                                }}
                            >
                                CORONA EMOTIONS CLUB &nbsp;&nbsp; CORONA
                                EMOTIONS CLUB &nbsp;&nbsp; CORONA EMOTIONS CLUB
                                &nbsp;&nbsp; CORONA EMOTIONS CLUB
                                &nbsp;&nbsp;CORONA EMOTIONS CLUB &nbsp;&nbsp;
                                CORONA EMOTIONS CLUB &nbsp;&nbsp;CORONA EMOTIONS
                                CLUB &nbsp;&nbsp;&nbsp;&nbsp; CORONA EMOTIONS
                                CLUB &nbsp;&nbsp;CORONA EMOTIONS CLUB
                                &nbsp;&nbsp;
                            </h1>
                        )}
                    </Ticker>

                    <nav>
                        <NavLink
                            className="link-menu"
                            activeClassName="active"
                            to="/submit"
                        >
                            submit
                        </NavLink>
                        &nbsp;&nbsp;
                        <NavLink
                            className="link-menu"
                            activeClassName="active"
                            to="/browse"
                        >
                            browse
                        </NavLink>
                        &nbsp;&nbsp;
                        <NavLink
                            className="link-menu"
                            activeClassName="active"
                            to="/info"
                        >
                            info
                        </NavLink>
                        &nbsp;&nbsp;
                        <NavLink
                            className="link-menu"
                            activeClassName="active"
                            to="/admin"
                        >
                            data
                        </NavLink>
                        &nbsp; 🦠 &nbsp;
                        <span className="instructions">
                            how do you feel about the COVID-19 crisis? let it
                            all out!
                        </span>
                    </nav>

                    <Route path="/submit" component={Submit}></Route>

                    <Route path="/browse" component={Browse}></Route>

                    <Route path="/info" component={Info}></Route>

                    <Route path="/admin" component={Admin}></Route>
                </BrowserRouter>
            </>
        );
    }
}
