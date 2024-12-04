import React, {Component} from 'react'

class VirtualDOM extends Component {
    constructor(props) {
        super(props)

        this.state = {
            breakFast : [
                {id:201, name:"idly", price:'30rs'},
                {id:202, name:"dosa", price:'40rs'},
                {id:203, name:"poori", price:'50rs'},
                {id:204, name:"vada", price:'10rs'},
            ],

            courses : [
                'Java','Python','Dotnet','React','Angular','Javascript'
            ]
        }
    }

    render() {
        const {breakFast,courses} = this.state;
        return (
            <div>
                <h2>This is virtual DOM Component</h2>
                <ul>
                    {
                        breakFast.length > 0 && breakFast.map((val,index)=>{
                            return <li key={val.id} > {val.name}-{val.price}</li>
                        })
                    }
                </ul>

                <hr/>

                    <label>Select course:</label>
                    <select>
                        {
                            courses.length > 0 && courses.map((val,index)=>{
                                return <option value={val} key={index}>{val}</option>
                            })
                        }
                    </select>
            </div>
        )

    }
}

export default VirtualDOM;