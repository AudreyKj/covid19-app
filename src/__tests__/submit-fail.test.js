import React from "react";
import Submit from "../submit.js";
import { render, waitForElement, fireEvent } from "@testing-library/react";

test("the text of the submit button does not change if both fields are empty", () => {
    const { container } = render(<Submit />);
    const button = container.querySelector("button");
    const textarea = container.querySelector("textarea");
    const input = container.querySelector("input");

    expect(button.innerHTML).toContain("submit");
    textarea.value = "";
    input.value = "";
    fireEvent.change(textarea);
    fireEvent.change(input);
    fireEvent.click(button);
    expect(button.innerHTML).toContain("submit");
});

test("an error is trigered if both fields are empty", () => {
    const { container } = render(<Submit />);
    const button = container.querySelector("button");
    const textarea = container.querySelector("textarea");
    const input = container.querySelector("input");
    const submitDiv = container.querySelector("div.submit");

    expect(button.innerHTML).toContain("submit");
    textarea.value = "";
    input.value = "";
    fireEvent.change(textarea);
    fireEvent.change(input);
    fireEvent.click(button);
    expect(submitDiv.innerHTML).toContain("Error");
});
