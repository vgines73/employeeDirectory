import React from 'react'
import Table from '../Components/Table/Table'

const Directory = (props) => {
    return (
        <div><br/>
           <h1 className="text-center">BREH's Employee Directory</h1><br/>
           <Table>
               {props.children}
           </Table>
        </div>
    )
}

export default Directory
