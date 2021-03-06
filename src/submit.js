import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "./axios";
import Browse from "./browse.js";
import MetaTags from "react-meta-tags";

export default function Submit() {
    const [emotion, setEmotion] = useState();
    const [error, setError] = useState();
    const [buttonText, setbuttonText] = useState("submit");
    const [thankyou, setthankyou] = useState(false);
    const [country, setCountry] = useState("");

    const handleChange = e => {
        setError(false);
        setEmotion({ ...emotion, [e.target.name]: e.target.value });
    };

    const submit = e => {
        e.preventDefault();

        if (emotion === undefined) {
            return setError(true);
        }

        if (
            emotion.emotion === undefined ||
            emotion.emotion.length === 0 ||
            emotion.emotion.length === 1
        ) {
            return setError(true);
        }

        if (emotion.country === undefined || emotion.country.length === 1) {
            return setError(true);
        }

        axios
            .post("/postemotion", emotion)
            .then(function({ data }) {
                setbuttonText("thank you!");
                setthankyou(true);

                return document.querySelector("form").reset();
            })
            .catch(function(error) {
                setError(true);
            });
    };

    return (
        <div className="submit">
            <MetaTags>
                <title>corona emotions club</title>
                <meta
                    name="description"
                    content="COVID-19 emotions & feelings"
                />
                <meta property="og:title" content="corona emotions club" />
            </MetaTags>

            <form className="submit">
                <label>
                    <textarea
                        className="emotion"
                        type="text"
                        name="emotion"
                        autoComplete="off"
                        placeholder="write here ----> all your fears, hopes, dreams about COVID-19!"
                        onChange={handleChange}
                        maxLength="290"
                        required
                    />
                </label>

                <label>
                    <input
                        className="country"
                        type="text"
                        name="country"
                        autoComplete="off"
                        placeholder="in which country are you right now?"
                        onChange={handleChange}
                        required
                    />
                </label>
                <button onClick={submit}> {buttonText} </button>
            </form>
            {error && (
                <span className="error">
                    Error: please make sure both fields are filled & try again!
                </span>
            )}
            {thankyou && (
                <span className="thankyou">
                    your submission has been added to the collection! <br />
                    <Link className="link-submit" to="/browse">
                        browse&nbsp;
                    </Link>
                    through the submissions
                </span>
            )}
        </div>
    );
}
