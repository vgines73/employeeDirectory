import React from 'react'
import Table from '../Components/Table/Table'

const Directory = (employees) => {
    console.log(employees);
    return (
        <div><br/>
           <h1 className="text-center">BREH's Employee Directory</h1><br/>
            <Table />
        </div>
    )
}

export default Directory
