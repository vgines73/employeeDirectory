import React from 'react'

const Table = (props) => {
  
    return (
        <table className="table table-dark table-striped">
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
                        <td key={props.first}>{props.first}</td>
                    {/* {console.log(props.results)} */}
                    {/* {props.results.map(name => (
                        <td key={name.first}>
                            {name.first}
                        </td>
                    ))} */}

                </tr>
                <tr>
                    <th scope="row">2</th>
                        <td>{props.last}</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>{props.email}</td>
                </tr>
                <tr>
                    <th scope="row">4</th>
                    <td>{props.phone}</td>
                </tr>
            </tbody>
        </table>
    )
}

export default Table
