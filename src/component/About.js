import UserClass from '../component/UserClass'
import User from "../component/User"
import { Component } from 'react'

class About extends Component{

  render(){
    return (
      <div>
        {/*  <User name={"(Functional Based)"}/> */}
      <UserClass name={"(Class Based)"} location={"Bengaluru"}/>

      </div>
     
    )
  }
}

export default About