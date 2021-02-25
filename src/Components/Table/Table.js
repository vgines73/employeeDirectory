import React, { useState } from 'react';

const Table = (props) => {
  console.log(props.results);
  const { results } = props;
  const [sortConfig, setSortConfig] = useState(null)
  const [sortButton, setSortButton] = useState()

  React.useMemo(() => {
    let sortedEmployees = [...results];

    if (sortConfig !== null) {
      sortedEmployees.sort(() => {
        let v = `a.${sortConfig} < b.${sortConfig}`;
        let g = `a.${sortConfig} > b.${sortConfig}`;
        if (eval(v)) {
          return sortButton.direction === 'descending' ? -1 : 1;
        } else if (eval(g)) {
          return sortButton.direction === 'ascending' ? 1 : -1;
        } else
          return 0
      });
    }
    return sortedEmployees;
  }, [results, sortConfig]);

  const requestSort = key => {
    let direction = 'ascending';
    console.log(key, sortButton);
    console.log(sortButton);
    if (sortButton.key === key && sortButton.direction === 'ascending') {
      direction = 'descending';
    }
    if (key != undefined) {
      setSortConfig({ key, direction })
    }
  };
  
  return (
    <div>
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th scope="col">
              <button type="button" onClick={() => {
                setSortButton("name.first");
                // console.log(sortButton);
                requestSort("name.first");
              }
              }>First</button>
              </th>
            <th scope="col">
               <button type="button" onClick={() => requestSort("name.last")}>Last</button>
              </th>
            <th scope="col">
              <button type="button" onClick={() => {
                
                setSortConfig("email");
                console.log(sortConfig);
                requestSort("email")
              }
              }>Email</button>
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
