import React from 'react'
import Table from '../Table/Table'
// shows results on the table
const SearchResults = (props) => {
    // console.log(props.results);
    // returns table with data
    return (
        <Table results={props.results}/>
     
    )
}

export default SearchResults
