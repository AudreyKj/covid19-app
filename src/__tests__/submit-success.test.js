import React from "react";
import Submit from "../submit.js";
import { render, waitForElement, fireEvent } from "@testing-library/react";
import axios from "../axios.js";

jest.mock("../axios");

test("if both fields are filled, click on submit button triggers post request + button text change", async () => {
    axios.post.mockResolvedValue({
        data: {
            emotion: "abcdef",
            country: "germany",
            buttonText: "thank you!"
        }
    });

    const { container } = render(<Submit />);

    expect(container.querySelector("button").innerHTML).toContain("submit");

    const emotion = "abcdefg";
    const country = "germany";
    const textarea = container.querySelector("textarea");
    const input = container.querySelector("input");
    fireEvent.change(input, { target: { value: emotion } });
    fireEvent.change(textarea, { target: { value: country } });
    expect(container.querySelector("button").innerHTML).toContain("submit");

    fireEvent.click(container.querySelector("button"));

    try {
        const elem = await waitForElement(() =>
            container.querySelector("button")
        );

        expect(elem.innerHTML).toContain("thank you!");
    } catch (err) {
        console.log("error", err);
    }
});

test("if both fields are filled, click on submit triggers thank you message", async () => {
    axios.post.mockResolvedValue({
        data: {
            emotion: "abcdef",
            country: "germany",
            buttonText: "thank you!"
        }
    });

    const { container, getByText } = render(<Submit />);

    expect(container.querySelector("button").innerHTML).toContain("submit");

    const emotion = "abcdefg";
    const country = "germany";
    const textarea = container.querySelector("textarea");
    const input = container.querySelector("input");
    fireEvent.change(input, { target: { value: emotion } });
    fireEvent.change(textarea, { target: { value: country } });
    expect(container.querySelector("button").innerHTML).toContain("submit");

    fireEvent.click(container.querySelector("button"));

    try {
        const elem = await waitForElement(() =>
            container.querySelector("span.thankyou")
        );

        expect(elem.innerHTML).toContain(
            "your submission has been added to the collection"
        );
    } catch (err) {
        console.log("error", err);
    }
});
