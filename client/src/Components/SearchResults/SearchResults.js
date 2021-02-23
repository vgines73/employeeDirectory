import React from 'react'
import Table from '../Table/Table'

const SearchResults = (props) => {
    console.log(props.results);
    const employees = props.results
    return (
        <Table>
            {employees.map((employee) => (
                <div key={employee.id}>
                    {console.log(employee.id)}
                    {employee.name.first}

                </div>
            ))}
        </Table>
    )
}

export default SearchResults
