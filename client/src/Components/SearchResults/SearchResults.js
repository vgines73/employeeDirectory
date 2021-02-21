import React from 'react'
import Table from '../Table/Table'

const SearchResults = (props) => {
    return (
        <ul>
            {props.results.map(result => (
                <Table>
                    {result}
                </Table>
            ))}
        </ul>
    )
}

export default SearchResults
