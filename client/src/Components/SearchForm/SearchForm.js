import React from 'react'
import './SearchForm.css'
const SearchForm = (props) => {
    console.log(props.results);
    return (
        <form className="search">
            <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input 
                type="text"
                value={props.search}
                onChange={props.handleInputChange}
                list="results"
                name="name"
                className="form-control"
                placeholder="Enter First or Last Name"
                />
                <datalist id="results">
                    {props.results.map((name, first) => (
                        <option value={name.first} key={first}></option>
                        // <option value={name.last} key={last}></option>
                    ))}
                </datalist>
                <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">Search</button>
            </div>
        </form>
    )
}

export default SearchForm
