// function FuncComp(){
    // return <h2>This is Function Component</h2>
// }


/* 
const FuncComp =()=>{
    return <h2>This is Function Component1</h2>
};

export default FuncComp;
*/


/*
const FuncComp =()=>{
    return (
        <div>
            <h2>This is func component</h2>
            <p>This is paragraph</p>
        </div>
    );
}; 

*/
const FuncComp =(props)=>{
    return (
        <div>
            <h2>This is Func component</h2>
            <p>My Name is  <strong>{props.fname}</strong>, I am : <strong>{props.post}</strong></p>
        </div>
    );
}; 

export default FuncComp;
