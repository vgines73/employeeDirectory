import React from 'react'
import './SearchForm.css'
// for search bar to search for the first name of employee
const SearchForm = (props) => {
    // console.log(props.results);
    // returns first name of employee
    return (
        <form className="search">
            <div className="form-group">
                <label htmlFor="name" >Name:</label>
                <input 
                type="text"
                value={props.search}
                onChange={props.handleInputChange}
                list="results"
                name="name"
                className="form-control"
                placeholder="Enter First Name"
                />
                <datalist id="results">
                    {props.results.map((employee, index) => (
                        <option value={employee.name.first} key={index}></option>
                    ))}
                </datalist>
                {/* handles the reset to bring back the employee directory list */}
                <button type="submit" onClick={props.handleReset} className="btn btn-primary">Reset</button>  
                {/* handles the search for the first name of the employee for the search form bar */}
                <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">Search</button>
            </div>
        </form>
    )
}

export default SearchForm
