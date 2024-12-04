import React, {Component} from 'react';
import MyHocComp from './MyHocComp';


class ClickCountComp extends Component{

/*
    constructor(props){
        super(props);
        this.state={
            count: 0
                }
    }

    incrementCounter = ()=>{
        this.setState((prevState)=>({count:prevState.count+1}));
    }
*/
/*
    render() {
        const {count} = this.state;

        return (
            <div>
                <p>count:{this.state.count}</p>
                <button onClick={()=>this.changeStateincrement()}>count++</button>
            </div>
        );
    }
    */

    render() {
        return (
        <div>
            <h2>This click counter component</h2>
            {/*  <button onClick={()=>this.changeStateincrement()}>count++</button>*/}
            <p>Counter value is: <strong>{this.props.count}</strong></p>
            <button type='button' onClick={()=>this.props.incrementCounter} className='btn btn-info'>count++</button>
        </div>
    );
}
}


export default ClickCounterComp;
