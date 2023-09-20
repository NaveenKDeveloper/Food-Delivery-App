import {sum} from "../component/sum"

test("function to add two numbers",()=>{
    const result = sum(15,51)

    expect(result).toBe(66)

})