import React  from 'react'

const MyMemoComp = (props) =>   {
    console.log('memo-comp render');
    return (
        <div>
            <h2>This is my memo component</h2>
            <p>Name:{props.empName}</p>
        </div>
    )
}

export default React.memo(MyMemoComp);