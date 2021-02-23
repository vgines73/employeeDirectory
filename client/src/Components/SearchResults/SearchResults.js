import React from 'react'
import Table from '../Table/Table'

const SearchResults = (props) => {
    console.log(props.results);
    return (
        <div>
            
            {props.results.map((result, id) => (
                
                <Table key={id} value={result} />
               
            ))}
        </div>
     
    )
}

export default SearchResults
