import React, { Component } from 'react'
import SearchForm from '../Components/SearchForm/SearchForm';
import SearchResults from '../Components/SearchResults/SearchResults';
import API from '../utils/API'

export default class Search extends Component {
    state ={
        search: "",
        results: [],
        error: ""
    };

    
    componentDidMount() {
        API.getNameList()
        // .then(res => console.log(res.data.results[0].name))
            .then(res => {
                // console.log(res.data.results)
                this.setState({ 
                    results: res.data.results,
                })
            })
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
            <div><br/>
                <h1 className="text-center">Search Employee</h1><br/>
                <SearchForm 
                    handleFormSubmit={this.handleFormSubmit}
                    handleInputChange={this.handleInputChange}
                    results={this.state.results}
                />
                {this.state.results.length === 0 ?
                <p>loading...</p>: 
                <SearchResults results={this.state.results} />
            }

            </div>
        )
    }
}
