import React from 'react'
import ReactTable from 'react-table'
const Table = (props) => {

    console.log(props.results);
    return (
        <div>   
            <table className="table table-dark table-striped" key={index}>
                <thead>
                    <tr>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                    </tr>
                </thead>

                {props.results.map((employee, index) => (

                    <tbody>
                        <tr>
                            <td>{employee.name.first}</td>
                            <td>{employee.name.last}</td>
                            <td>{employee.email}</td>
                            <td>{employee.phone}</td>
                        </tr>
                    </tbody>

            ))
            </table>
            }
        </div>
    )
}

export default Table
