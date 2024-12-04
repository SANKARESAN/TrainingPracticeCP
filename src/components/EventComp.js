import React, {Component, Fragment}from "react";

class EventComp extends Component {
    greeting=()=>
    {
        window.alert("Hello friends");
    };

    welcome = (...std) => {
        window.alert(`welcome you ${std}`);
    };

    render() {
        return (
            <Fragment>
                <h2>This is Event component</h2>
                <button type="button" onClick={()=>this.greeting()}>call greeting</button>
                <button type="button" onClick={()=>this.welcome("Tarun","varun")}>call welcome</button>
                <h2 onMouseOver={()=>this.welcome("sara","todd","krish")}>Hover on me to call welcome</h2>
            </Fragment>
        )
    }
}

export default EventComp;