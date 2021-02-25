import React, { useState } from 'react';

const Table = (props) => {
  console.log(props.results);
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
    <div>
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th scope="col">
              <button type="button" onClick={() => {
                setSortField("name.first");
                sortDirection === 'ascending' ? setSortDirection('descending') : setSortDirection('ascending');
              }}>
                First
              </button>
              </th>
            <th scope="col">
              <button type="button" onClick={() => {
                setSortField("name.last");
                sortDirection === 'ascending' ? setSortDirection('descending') : setSortDirection('ascending');
              }}>
                Last
              </button>
            </th>
            <th scope="col">
              <button type="button" onClick={() => {
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
