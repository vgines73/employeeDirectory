import React from 'react'
import Table from '../Table/Table'

const SearchResults = (props) => {
    return (
        <ul>
            {props.results.map((name, first) => (
                <Table key={first}>
                    {name.first}
                </Table>
            ))}
        </ul>
    )
}

export default SearchResults
