import { render,screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom";
import { execPath } from "process";

test("should render 2 input boxes",() => {
    render(<Contact/>);

    const heading = screen.getAllByRole("textbox")

    
})