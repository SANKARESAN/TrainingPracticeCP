// import { Component } from "react";
import React, {Component}from "react";


/*1
class ClassComp extends Component{
    render(){
        return <h2>this is class  Component</h2>
    }
}
*/


class ClassComp extends Component{
    render(){
        return (
            <div>
                <h2>This is Func component</h2>
                <p>My Name is  <strong>{this.props.fname}</strong>, I am : <strong>{this.props.post}</strong></p>
            </div>
        )
    }
}

export default ClassComp;