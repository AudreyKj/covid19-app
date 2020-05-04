import React, { useState, useEffect } from "react";
import Moment from "react-moment";
import axios from "./axios";
import MetaTags from "react-meta-tags";

export default function Browse() {
    const [randomEmotion, setRandomEmotion] = useState();
    const [color, setColor] = useState();
    useEffect(() => {
        (async () => {
            const { data } = await axios.get("/getEmotion");
            const result = [];

            result.push(data);

            setRandomEmotion(result);

            const colorPalette = [
                "rgba(219,145,169, 0.7)",
                "rgba(160,212,216, 0.9)",
                "rgba(102,205,170, 0.7)",
                "rgba(153,102,255, 0.7)",
                "rgba(51,153,255, 0.7)",
                "rgba(97,174,251, 0.7)",
                "rgba(70,132,153, 0.7)",
                "rgba(255,165,0, 0.7)",
                "rgba(218,165,32, 0.7)",
                "rgba(255, 0, 0, 0.5)",
                "rgba(0, 177, 89, 0.7)"
            ];

            const randomColor = colorPalette[Math.floor(Math.random() * 11)];

            const style = {
                newStyle: {
                    backgroundColor: randomColor,
                    boxShadow: `0px 0px 15px 10px ${randomColor}`
                }
            };

            setColor(style.newStyle);
        })();

        document.addEventListener("keydown", function(e) {
            if (e.keyCode === 39) {
                getNextEmotion();
            }
        });
    }, []);

    const getNextEmotion = e => {
        axios.get("/getEmotion").then(function(data) {
            const result = [];

            result.push(data.data);

            setRandomEmotion(result);

            const colorPalette = [
                "rgba(219,145,169, 0.7)",
                "rgba(160,212,216, 0.9)",
                "rgba(102,205,170, 0.7)",
                "rgba(153,102,255, 0.7)",
                "rgba(51,153,255, 0.7)",
                "rgba(97,174,251, 0.7)",
                "rgba(70,132,153, 0.7)",
                "rgba(255,165,0, 0.7)",
                "rgba(218,165,32, 0.7)",
                "rgba(255, 0, 0, 0.5)",
                "rgba(0, 177, 89, 0.7)"
            ];

            const randomColor = colorPalette[Math.floor(Math.random() * 11)];

            const style = {
                newStyle: {
                    backgroundColor: randomColor,
                    boxShadow: `0px 0px 15px 10px ${randomColor}`
                }
            };

            setColor(style.newStyle);
        });
    };

    return (
        <div className="randomEmotion">
            <MetaTags>
                <title>corona emotions club</title>
                <meta
                    name="description"
                    content="COVID-19 emotions & feelings"
                />
                <meta property="og:title" content="corona emotions club" />
            </MetaTags>
            {randomEmotion &&
                randomEmotion.map(emotion => (
                    <div
                        className="emotion-block"
                        style={color}
                        key={emotion.id}
                    >
                        {emotion.emotion} <br />
                        <span className="country">
                            {emotion.country} <br />
                        </span>
                        <span className="date">
                            <Moment format="MMMM Do YYYY">
                                {emotion.created_at}
                            </Moment>
                        </span>
                        <div className="next" onClick={getNextEmotion}>
                            <span className="next-arrow"> → </span>
                        </div>
                    </div>
                ))}
        </div>
    );
}
