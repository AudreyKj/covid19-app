import React from "react";
import MetaTags from "react-meta-tags";

export default function Info() {
    return (
        <div className="info">
            <MetaTags>
                <title>corona emotions club</title>
                <meta
                    name="description"
                    content="COVID-19 emotions & feelings"
                />
                <meta property="og:title" content="corona emotions club" />
            </MetaTags>
            <p className="info_text">
                This website is a collective gathering of emotions related to
                the COVID-19 outbreak. <br /> <br /> You can submit all the
                fears, dreams, hopes you have regarding the situation and browse
                through the collection to see others’ submissions. <br /> <br />
                This website’s intention is to collect personal, emotional, yet
                global, perspectives on the situation. When all this is over, I
                hope that it could serve as a digital archive reminding us of
                this very strange time.
                <br /> <br />
                website made by Audrey Kadjar
            </p>
        </div>
    );
}
