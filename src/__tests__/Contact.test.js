import { render, screen } from "@testing-library/react"
import Contact from "../component/Contact"
import "@testing-library/jest-dom"

test("Should load contact us component",()=>{

    render(<Contact />)
    const heading = screen.getByRole("heading")

    expect(heading).toBeInTheDocument()
})

test("Should load button in contact us component",()=>{
    render(<Contact/>)

    const button = screen.getByText("Submit")
    expect(button).toBeInTheDocument()
})


test("Should load placeholder for input in contact us component",()=>{
    render(<Contact/>)

    const inputName = screen.getByPlaceholderText("name")
    expect(inputName).toBeInTheDocument()
})

test("Should load 2 textbox  in contact us component",()=>{
    render(<Contact/>)

    const inputBox = screen.getAllByRole("textbox")

    expect(inputBox.length).toBe(2)
})