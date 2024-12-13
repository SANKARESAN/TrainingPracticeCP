import React, {Component} from "react";

class EmpDetailsComp extends Component{

    constructor(props){
        super(props);

        this.state = {
            emp:[
                {empId:501,empName:"Arjun",empPost:"Angular Developer",empSal:230000,empContact:99999999999,empAddress:"Delhi"},
                {empId:502,empName:"Sam",empPost:"Web Developer",empSal:430000,empContact:8888888888,empAddress:"pune"},
                {empId:503,empName:"leo",empPost:"React Developer",empSal:210000,empContact:7777777777,empAddress:"bangalore"},
                {empId:504,empName:"rio",empPost:"python Developer",empSal:240000,empContact:666666666,empAddress:"hyderbad"},
                {empId:505,empName:"ram",empPost:"Full Stack Developer",empSal:330000,empContact:5555555555,empAddress:"mumbai"},
                {empId:506,empName:"kumar",empPost:"Java Developer",empSal:400000,empContact:4444444444,empAddress:"Chennai"},
                {empId:507,empName:"shyam",empPost:"AWS Developer",empSal:500000,empContact:333333333,empAddress:"trichy"},
                {empId:508,empName:"siva",empPost:"UI Developer",empSal:420000,empContact:2222222222,empAddress:"chennai"},
                {empId:509,empName:"prince",empPost:"Dotnet",empSal:360000,empContact:11111111111,empAddress:"thanjavur"},
                {empId:510,empName:"edwin",empPost:"Php Developer",empSal:180000,empContact:1001011010,empAddress:"Chennai"},
            
            ]


        }
    }

    render(){
         const {emp}=this.state;
        return (
            <div>
                <h2> This is Employee Class Component</h2>
                <table className="table table-bordered table-striped table-hover table-info">
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Post</th>
                        <th>Salary</th>
                        <th>Contact</th>
                        <th>Address</th>
                    </tr>

                    {
                        emp.length > 0 && emp.map((val,index)=>{
                            return <tr>
                                <td key={val.empId}>{val.empId}</td>
                                <td key={val.empId}>{val.empName}</td>
                                <td key={val.empId}>{val.empPost}</td>
                                <td key={val.empId}>{val.empSal}</td>
                                <td key={val.empId}>{val.empContact}</td>
                                <td key={val.empId}>{val.empAddress}</td>
                            </tr>
                        })
                    }
                </table>
                
            </div>
        )
    }
}

export default EmpDetailsComp;




