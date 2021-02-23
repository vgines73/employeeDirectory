import React from 'react'
import Table from '../Table/Table'

const SearchResults = (props) => {
    console.log(props.results);

    return (
        <Table>
            {/* {props.results.map((name) => (
                <h2 key={name.first}>{name.first}</h2>
            ))} */}
            {props.children}
        </Table>
    )
}

export default SearchResults
