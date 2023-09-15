import UserClass from '../component/UserClass'
import { Component } from 'react'

class About extends Component{

  render(){
    return (
      <div>
      <UserClass name={"(Class Based)"} location={"Bengaluru"}/>
      </div>
     
    )
  }
}

export default About