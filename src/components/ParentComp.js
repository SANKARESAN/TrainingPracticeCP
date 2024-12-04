import React, { Component } from "react";
import ChildComp from "./ChildComp";
import MyPureComp from "./MyPureComp"

class ParentComp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            empName : "sankaresh",
            empSal : 20000
        }
    }
// manipulate
    changeStateData =()=>{
        this.setState((prevState)=>({empName:"Sankaresh",empSal:prevState.empSal+5000}))
    }

    render() {
        const {empName, empSal} = this.state;     //  destructuring of state
        const {gender, contact} = this.props;     //  destructuring of props

        return (
            <div>
                <h2>This is Parent Component</h2>
                {/* <p>Emp_Name :{this.state.empName} and Emp_Sal:{this.state.empSal}</p> */}
                <p>Name: <strong>{empName}</strong>, Salary:<strong>{empSal}</strong></p>

                {/* <p>Gender :{this.props.gender} and Emp_Sal:{this.props.contact}</p> */}
                <p>Gender: <strong>{gender}</strong>, Contact:<strong>{contact}</strong></p>

                <button type="button" onClick={()=>this.changeStateData()}  class="btn btn-outline-secondary">change state</button>
                <hr>
                <ChildComp name={empName} sal={empSal} manageState={this.changeStateData}/>
                </hr>
                <hr>
                <MyPureComp empName = {empName}/>
                </hr>
                <MyMemoComp empName = {empName}/>
            </div>
        )
    }
}



export default ParentComp;