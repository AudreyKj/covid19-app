import React from "react";
import Submit from "../submit.js";
import { render, waitForElement, fireEvent } from "@testing-library/react";

jest.mock("axios");

test("the text of the submit button does not change if both fields are empty", () => {
    const { container } = render(<Submit />);
    const button = container.querySelector("button");
    expect(button.innerHTML).toContain("submit");
    const textarea = container.querySelector("textarea");
    const input = container.querySelector("input");
    textarea.value = "";
    input.value = "";
    fireEvent.change(textarea);
    fireEvent.change(input);
    fireEvent.click(button);
    expect(button.innerHTML).toContain("submit");
});

test("an error is trigered if both fields are empty", () => {
    const { container } = render(<Submit />);
    const submitDiv = container.querySelector("div.submit");
    const button = container.querySelector("button");
    expect(button.innerHTML).toContain("submit");
    const textarea = container.querySelector("textarea");
    const input = container.querySelector("input");
    const error = container.querySelector("span.error");
    textarea.value = "";
    input.value = "";
    fireEvent.change(textarea);
    fireEvent.change(input);
    fireEvent.click(button);
    expect(submitDiv.children.length).toBe(2);
});
