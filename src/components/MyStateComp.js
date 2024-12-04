import React, {Component} from 'react'

class MyStateComp extends Component {

    constructor(){
        super();
        this.state={
            empName : "Virat",
            empSal : 200000
        }
    }

changeStateData = ()=> {
    // this.setState({empName:"Virat k", empSal:this.state.empSal+5000});
    this.setState((prevState)=>({empName:"Virat K", empSal:prevState.empSal+5000}));
}

    render() {
        return (
            <div>
                <h2>This is MyStateComp</h2>
                <p>Employee Name:<strong>{this.state.empName}</strong> and Salary:<strong>{this.state.empSal}</strong></p>

                <button type='button' className='btn btn-outline-primary' onClick={()=>this.changeStateData()}>Change state Data</button>
            </div>
        )
    }
}

export default MyStateComp;