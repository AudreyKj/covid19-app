import React from "react";
import GoogleFontLoader from "react-google-font-loader";
import { BrowserRouter, Route, NavLink } from "react-router-dom";
import axios from "./axios";
import Submit from "./submit";
import Browse from "./browse";
import Info from "./info";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        //this.state = { isloaded: true };
    }

    componentDidMount() {
        //loading
        // setTimeout(() => {
        //     this.setState((state, props) => ({ isLoaded: false }));
        // }, 5000);

        //ticker
        const title = "&nbsp;&nbsp;CORONA EMOTIONS CLUB&nbsp;&nbsp;";
        const ticker = new Array(300).fill(title);

        const emotionTicker = document.querySelector("div.ticker h1");
        emotionTicker.innerHTML = ticker.join("");

        //cursor
        const cursor = document.querySelector("div.cursor");

        document.addEventListener("mousemove", function(e) {
            cursor.style.top = e.clientY - 10 + "px";
            cursor.style.left = e.clientX - 10 + "px";
        });
    }

    render() {
        return (
            <>
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
                <div className="ticker">
                    <h1
                        style={{
                            fontFamily: "Codystar",
                            textShadow:
                                "0 0 4em #fff, 0 0 0.2em #fff, 0 0 0.2em #fff, 0 0 0.3em #fff,0 0 0.4em #fff, 0 0 0.4em #fff, 0 0 0.4em #fff"
                        }}
                    >
                        CORONA EMOTIONS CLUB &nbsp;&nbsp; CORONA EMOTIONS CLUB
                        &nbsp;&nbsp;
                    </h1>
                </div>
                <BrowserRouter>
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
