import {fireEvent, render,screen} from "@testing-library/react"
import "@testing-library/jest-dom"
import Header from '../component/Header'
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import appStore from "../utils/redux/appStore"

it("Should load Header Component",()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    )

    const loginButton = screen.getByRole("button",{name:/Login/})
    expect(loginButton).toBeInTheDocument()
})

it("Should render Header Component with Cart Items",()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    )

    const cartItems = screen.getByText(/Cart/)
    expect(cartItems).toBeInTheDocument()
})

it("Should Change Login Button to Logout on Click",()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    )

    const loginButton = screen.getByRole("button",{name:/Login/})
    fireEvent.click(loginButton)

    const logoutButton = screen.getByRole("button",{name:/Logout/})
    expect(logoutButton).toBeInTheDocument()
})