import Card,{withPromotedLabel} from "../component/Card"
import { render,screen } from "@testing-library/react"
import MOCK_DATA from "../mocks/Card.mock.json"
import "@testing-library/jest-dom"

it("Should Render Card Component with props",()=>{
    render(<Card resData={MOCK_DATA}/>)

    const name = screen.getByText("Meghana Foods")
    expect(name).toBeInTheDocument()
})

it("Should Render Promoted Label",()=>{
    const CardPromotedLabel = withPromotedLabel(Card)
   
    render( <CardPromotedLabel resData={MOCK_DATA}/>)

    const name = screen.getByText("Promoted")
    expect(name).toBeInTheDocument()
})