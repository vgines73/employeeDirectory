import React, { Component } from 'react'
import SearchForm from '../Components/SearchForm/SearchForm';
import SearchResults from '../Components/SearchResults/SearchResults';
import API from '../utils/API'

export default class Search extends Component {
    state ={
        search: "",
        name: [],
        // first: "",
        // last: "",
        results: [],
        error: ""
    };

    componentDidMount() {
        API.getNameList()
        .then(res => console.log(res.data.results))
          // .then(res => this.setState({ name: res.data.}))
        .catch(err => console.log(err))
    };
    handleInputChange = event => {
        this.setState({ search: event.target.value});
    };
    handleFormSubmit = event => {
        event.preventDefault();
        API.getNameOfEmployee(this.state.search)
            .then(res => {
                if (res.data.status === "error") {
                    throw new Error(res.data.results)
                }
                this.setState({ results: res.data.results, error: ""})
            })
            .catch(err => this.setState({ error: err.results}))
    }
    render() {
        return (
            <div>
                <h1 className="text-center">Search By Name</h1>
                <SearchForm 
                    handleFormSubmit={this.handleFormSubmit}
                    handleInputChange={this.handleInputChange}
                    name={this.state.name}
                />
                <SearchResults results={this.state.results} />
            </div>
        )
    }
}
