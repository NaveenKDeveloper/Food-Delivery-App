import React from "react"

class UserClass extends React.Component {
    
    constructor(props){
        super(props)

        this.state = {
            count : 0
        }
        console.log("Child constructor")
    }

    componentDidMount(){
        console.log("Child Mount")
    }

    render(){
        console.log("Child render")

        const {name,location} = this.props;
        const {count} = this.state
        return (
            <div>
                <h2>Name : Naveen K {name}</h2>
                <h3>Location : {location}</h3>
                <h4>Address</h4>
                <h2>Count : {count} </h2>
                <button onClick={()=>{ this.setState({count:this.state.count+1})}}>Click to Increment</button>
            </div>
        )
    }
}

export default UserClass;