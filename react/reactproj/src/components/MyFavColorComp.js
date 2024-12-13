import React, {Component}from "react";

class MyFavColorComp extends Component{
    
    constructor(props) {
        super(props)
    
        this.state = {
             color: "red"
        }
    }
    
    // 1.getDerivedStateFromProps:-

    // static getDerivedStateFromProps(props){
    //     return {
    //         color:props.newColor
    //     }
    // }


    // 2. componentDidMount :-

    // componentDidMount(){
    //     setTimeout(()=>{
    //         this.setState({color:"Pink"});
    //     },2000)
    // }

    shouldComponentUpdate(){
        return true;
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
        document.getElementById("beforeupdate").innerHTML = `Before Update my favourite color is:${prevState.color}`;
    }
    changeColor =()=>{
        this.setState({color:"Blue"});
    }
    componentDidUpdate(){
        document.getElementById("afterupdate").innerHTML = `After Update my favourite color is:${this.state.color}`;
    }


    render(){
        return (
            <div>
                <h2>This is My Fav color component</h2>
                <p>Color is: <strong>{this.state.color}</strong></p>
                <div id="beforeupdate"></div>
                <div id="afterupdate"></div>
                <button type="button" onClick={()=>this.changeColor()} className="btn btn-outline-secondary">change color</button>
            </div>
        )
    }
}

export default MyFavColorComp;