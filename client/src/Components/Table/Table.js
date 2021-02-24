import React from 'react'

const Table = (props) => {
    
    console.log(props.results);
    return (
        <div>
            <h1>table comp</h1>
            {props.results.map((employee, index) => (
  
                <table className="table table-dark table-striped" key={index}>
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>{employee.name.first}</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>{employee.name.last}</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>{employee.email}</td>
                        </tr>
                        <tr>
                            <th scope="row">4</th>
                            <td>{employee.phone}</td>
                        </tr>
                    </tbody>
                </table>
            ))}
        </div>
    )
}

export default Table
