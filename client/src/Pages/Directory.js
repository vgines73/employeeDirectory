import React from 'react'
import Table from '../Components/Table/Table'

const Directory = (props) => {
    console.log(props.results);
    const employees = props.results
    return (
        <div><br/>
            <h1 className="text-center">Breh's Employee Directory</h1><br/>
            <Table results={employees}/>
        </div>

     
    )
}

export default Directory
