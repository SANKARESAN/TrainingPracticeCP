import React, {Component} from 'react'

class ConditionalRenComp extends Component {

    constructor(){
        super();
        this.state = {
            isCond : true
        }
    }   
     render () {
/*
        // 1. use of if else
        if(!this.state.isCond){
            return <h2>Admin Login Successfully</h2>
        }
        else{
            return <h2>User Login Successfully</h2>
        }
*/

// 1. use of if else
        let msg = "";
        if(this.state.isCond){
            // <h2>Admin Login Successfully</h2>
            msg = "admin login success";
        }
        else{
            // <h2>User Login Successfully</h2>
            msg = "user login success"
        }
        // 2. use of element as variable
        // return <h2>{msg}</h2>
        // 3. use of ternary operator
        // return (this.state.isCond) ? <h2>Admin Login Successfully</h2> : <h2>User Login Successfully</h2>

        // 4. use of short-circuit
        return this.state.isCond && <h2>Admin login success</h2>
    }
}


export default ConditionalRenComp;