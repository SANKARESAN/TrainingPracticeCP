/*task-1
const SankareshFunc =()=>{
    return <h2>"This is sankaresh component"</h2>
};


export default SankareshFunc;
*/ 

const SankareshFunc =(props)=>{
    return (
        <div>
            <p>"My FullName is {props.fname} {props.lname} <br></br> 
                My salary is {props.salary} <br></br> 
                My gender is {props.gender} <br></br> 
                This is my address {props.address}"</p>
        </div>
    );
};

export default SankareshFunc;