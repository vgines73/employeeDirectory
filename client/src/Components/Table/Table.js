import React from 'react'
import { useState } from 'react'

const Table = () => {
    
    const [employees, setEmployees] = useState([]);
    console.log();
    return (
        <div>
            {employees.map((employee) => (
                <div className="preview" key={employee.id}>
                    <h2>{employee.name}</h2>
                    <p>{employee.gender}</p>
                </div>
            ))}
        </div>
        // <table className="table table-dark table-striped">
        //     <thead>
        //         <tr>
        //             <th scope="col">#</th>
        //             <th scope="col">First</th>
        //             <th scope="col">Last</th>
        //             <th scope="col">Email</th>
        //             <th scope="col">Phone</th>
        //         </tr>
        //     </thead>
        //     <tbody>
        //         <tr>
        //             <th scope="row">1</th>
        //                 <td>{props.first}</td>
        //             {/* {console.log(props.results)} */}
        //             {/* {props.results.map(name => (
        //                 <td key={name.first}>
        //                     {name.first}
        //                 </td>
        //             ))} */}

        //         </tr>
        //         <tr>
        //             <th scope="row">2</th>
        //                 {/* <td>{props.last}</td> */}
        //         </tr>
        //         <tr>
        //             <th scope="row">3</th>
        //             {/* <td>{props.email}</td> */}
        //         </tr>
        //         <tr>
        //             <th scope="row">4</th>
        //             {/* <td>{props.phone}</td> */}
        //         </tr>
        //     </tbody>
        // </table>
    )
}

export default Table
