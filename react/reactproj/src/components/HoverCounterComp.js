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
*/ 
/*
    incrementCounter = ()=>{
        this.setState((prevState)=>({count:prevState.count+1}));
    }
*/ 
    render(){
        const {count} = this.state;

        return (
            <div>
                <h2>This is hover Counter Component</h2>
                {/* <p>count:{this.state.count}</p> 
                <button onMouseOver={()=>this.changeStateincrement()}>count++</button>
                */}
                <p>Counter value is: <strong>{this.props.count}</strong></p>
                <h2 onMouseOver={()=>this.props.incrementCounter()}>hover on me to counter value</h2>
            </div>
        );
    }
}


// export default HoverCounterComp;
   export default MyHocComp(HoverCounterComp);
