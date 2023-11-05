import {render, screen } from "@testing-library/react"
import Body from "../component/Body"
import "@testing-library/jest-dom"
import MOCK_DATA from "../mocks/API_Data.mock.json"
import { act } from "react-dom/test-utils"
import { BrowserRouter } from "react-router-dom"

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json: ()=>{
            return Promise.resolve(MOCK_DATA)
        }
    })
})

it("Should Render Body Component",async ()=>{
    await act(async () => render( <BrowserRouter>
        <Body />
    </BrowserRouter> ))

    const search = screen.getByRole("button",{name:"Search"})
    expect(search).toBeInTheDocument()
})