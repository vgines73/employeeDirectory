import React from 'react'
import './SearchForm.css'
const SearchForm = (props) => {
    return (
        <form className="search">
            <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input 
                type="text"
                value={props.search}
                onChange={props.handleInputChange}
                name="name"
                className="form-control"
                placeholder="Enter First or Last Name"
                />
                <datalist id="name">
                    {props.name.map(name => (
                        <option value={name.first} key={name.first}></option>,
                        <option value={name.last} key={name.last}></option>
                    ))}
                </datalist>
                <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">Search</button>
            </div>
        </form>
    )
}

export default SearchForm
