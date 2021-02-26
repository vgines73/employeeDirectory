import React, { useState } from 'react';
//this sorts the table where employees first name, last name, and email is sorted ascending/descending
const Table = (props) => {
  // console.log(props.results);
  // created a copy of the prop to alter the original array
  const { results } = props
  const [sortField, setSortField] = useState(null);
  const [sortDirection, setSortDirection] = useState();
  let sortEmployees = [...results]
  if (sortField !== null) {
    sortEmployees.sort((a, b) => {
      let beginning = `a.${sortField} < b.${sortField}`;
      // console.log(beginning);
      let end = `a.${sortField} > b.${sortField}`;

      if (eval(beginning)) {
        return sortDirection === 'ascending' ? -1 : 1;
      }
      if (eval(end)) {
        return sortDirection === 'ascending' ? 1 : - 1;
      }
      return 0;
    });
  }
  return (
    // return table with values and where user can sort by clicking the button for first name, last name, email, phone, and cell
    <div>
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th scope="col">
              {/* button that sorts ascending/descending for first name*/}
              <button className="btn btn-primary"type="button" onClick={() => {
                setSortField("name.first");
                sortDirection === 'ascending' ? setSortDirection('descending') : setSortDirection('ascending');
              }}>
                First
              </button>
              </th>
            <th scope="col">
              {/* button that sorts ascending/descending for last name*/}
              <button className="btn btn-primary" type="button" onClick={() => {
                setSortField("name.last");
                sortDirection === 'ascending' ? setSortDirection('descending') : setSortDirection('ascending');
              }}>
                Last
              </button>
            </th>
            <th scope="col">
              {/* button that sorts ascending/descending for email*/}
              <button className="btn btn-primary" type="button" onClick={() => {
                setSortField("email");
                sortDirection === 'ascending' ? setSortDirection('descending') : setSortDirection('ascending');
              }}>
                Email
              </button>
            </th>
            <th scope="col">
                Phone
            </th>
            <th scope="col">
                Cell
            </th>
          </tr>
        </thead>
        <tbody>
          {/* loops through and lists all values for the employee*/}
          {
            sortEmployees.map((employee, index) => (
            <tr key={index}>
              <td>{employee.name.first}</td>
              <td>{employee.name.last}</td>
              <td>{employee.email}</td>
              <td>{employee.phone}</td>
              <td>{employee.cell}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

};

export default Table;
