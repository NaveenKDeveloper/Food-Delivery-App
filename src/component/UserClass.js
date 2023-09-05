import React from "react"

class UserClass extends React.Component {
    
    constructor(props){
        super(props)

        this.state = {
            userInfo : {
                name : "Naveen K",
                location : "Bengaluru"
            }
        }
    }

    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/NAVEENKDEVELOPER");
        const json = await data.json();
        this.setState({userInfo : json})
    }

    componentDidUpdate(){
        console.log("DidUpdate")
    }

    componentWillUnmount(){
        console.log("Unmount")
    }

    render(){
        const {name,location} = this.state.userInfo;
        return (
            <div>
                <h2>Name : {name}</h2>
                <h3>Location : {location}</h3>
            </div>
        )
    }
}

export default UserClass;