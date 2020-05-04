import React from "react";
import GoogleFontLoader from "react-google-font-loader";
import Ticker from "react-ticker";
import { BrowserRouter, Route, NavLink } from "react-router-dom";
import axios from "./axios";
import Submit from "./submit";
import Browse from "./browse";
import Info from "./info";
import MetaTags from "react-meta-tags";

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
                <MetaTags>
                    <title>corona emotions club</title>
                    <meta
                        name="description"
                        content="COVID-19 emotions & feelings"
                    />
                    <meta property="og:title" content="corona emotions club" />
                </MetaTags>
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
                        &nbsp;&nbsp;🦠 &nbsp;
                        <span className="instructions">
                            how do you feel about the COVID-19 crisis? let it
                            all out!
                        </span>
                    </nav>

                    <Route path="/submit" component={Submit}></Route>

                    <Route path="/browse" component={Browse}></Route>

                    <Route path="/info" component={Info}></Route>
                </BrowserRouter>
            </>
        );
    }
}
