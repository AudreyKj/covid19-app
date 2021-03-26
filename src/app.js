import React from "react";
import GoogleFontLoader from "react-google-font-loader";
import Ticker from "react-ticker";
import { BrowserRouter, Route, NavLink } from "react-router-dom";
import Submit from "./submit";
import Browse from "./browse";
import Info from "./info";
import Admin from "./admin";
import { Helmet } from "react-helmet";

export default function App() {
    return (
        <>
            <Helmet>
                <title>corona emotions club</title>
                <meta
                    name="description"
                    content="app where users express their feelings about the COVID-19 outbreak"
                />
                <meta
                    name="keywords"
                    content="COVID-19, corona virus, pandemic, emotions"
                />
                <meta name="application-name" content="corona emotions club" />
                <meta name="theme-color" content="green" />
                <meta property="og:image:width" content="1080" />
                <meta property="og:image:height" content="1080" />
                <meta
                    property="og:url"
                    content="https://corona-emotions.club/browse"
                />
                <meta
                    property="og:description"
                    content="app where users express their feelings about the COVID-19 outbreak"
                />
                <meta property="og:image" content="preview.jpg" />
                <meta property="og:image:url" content="preview.jpg" />
            </Helmet>

            <GoogleFontLoader
                fonts={[
                    {
                        font: "Codystar",
                        weights: [400, "400i"]
                    }
                ]}
            />

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
                        CORONA EMOTIONS CLUB &nbsp;&nbsp; CORONA EMOTIONS CLUB
                        &nbsp;&nbsp; CORONA EMOTIONS CLUB &nbsp;&nbsp; CORONA
                        EMOTIONS CLUB &nbsp;&nbsp;CORONA EMOTIONS CLUB
                        &nbsp;&nbsp; CORONA EMOTIONS CLUB &nbsp;&nbsp;CORONA
                        EMOTIONS CLUB &nbsp;&nbsp;&nbsp;&nbsp; CORONA EMOTIONS
                        CLUB &nbsp;&nbsp;CORONA EMOTIONS CLUB &nbsp;&nbsp;
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
                &nbsp; 🦠 &nbsp;
                <span className="instructions">
                    how do you feel about the COVID-19 crisis? let it all out!
                </span>
            </nav>

            <Route path="/submit" component={Submit}></Route>

            <Route path="/browse" component={Browse}></Route>

            <Route path="/info" component={Info}></Route>

            <Route path="/admin" component={Admin}></Route>
        </>
    );
}
