import { Component } from "react";


class Subscribe extends Component{

    state={
        issubscribe:false,
        text1:"Subscribe",
        text2:"Subscribed"
    }

cilckhandler=()=>{
    this.setState({
        issubscribe: !this.state.issubscribe
    })
}






    render(){
        return(
            <button onClick={this.cilckhandler}>{this.state.issubscribe ? this.state.text2 : this.state.text1}</button>
        )
    }
}
export default Subscribe