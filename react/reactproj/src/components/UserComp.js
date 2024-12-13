import React from 'react'

const UserComp = (props)=>{

    if(props.user === "Arun"){
        throw Error("Not A User");
    }
    return (
        <div>
            {/*  
            <h2>this is user component</h2>
            <p>My name is <strong>{porps.user}</strong></p>
            */}
            <h2>user is: {props.user}</h2>
        </div>
    )
}

export default UserComp;