import React from 'react';
import ReactTable from 'react-table';

const Table = (props) => {
  console.log(props.results);
  return (
    <div>
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
          </tr>
        </thead>
        <tbody>
          {props.results.map((employee, index) => (
            <tr key={index}>
              <td>{employee.name.first}</td>
              <td>{employee.name.last}</td>
              <td>{employee.email}</td>
              <td>{employee.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
