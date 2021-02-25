import React, { sortConfig, setSortConfig  } from 'react';

const Table = (props) => {
  console.log(props.results);
  const { results } = props;
  const [sortedField, setSortedField] = React.useState(null)
  
  React.useMemo(() => {
    let sortedEmployees = [...results];
    if (sortedField !== null) {
      sortedEmployees.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'descending' ? -1 : 1;
        } else if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        } else
          return 0
      });
    }
    return sortedEmployees;
  }, [results, sortConfig]);

  const requestSort = key => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };
  
  return (
    <div>
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th scope="col">
              <button type="button" onClick={() => requestSort("first")}>First</button>
              </th>
            <th scope="col">
               <button type="button" onClick={() => requestSort("last")}>Last</button>
              </th>
            <th scope="col">
                <button type="button" onClick={() => requestSort("email")}>Email</button>
              </th>
            <th scope="col">
                <button type="button" onClick={() => requestSort("phone")}>Phone</button>
              </th>
            <th scope="col">
              <button type="button" onClick={() => requestSort("cell")}>Cell</button>
              </th>
          </tr>
        </thead>
        <tbody>
          {props.results.map((employee, index) => (
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
