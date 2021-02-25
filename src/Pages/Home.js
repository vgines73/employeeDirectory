import React, { Component } from 'react'
import SearchForm from '../Components/SearchForm/SearchForm';
import SearchResults from '../Components/SearchResults/SearchResults';
import API from '../utils/API'


export default class Home extends Component {
    // set up initial state
    state ={
        search: "",
        results: [],
        error: ""
    };

    componentDidMount() {
        //fetching api of all employees
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
    // updates input state
    handleInputChange = event => {
        this.setState({ search: event.target.value});
    };
    handleFormSubmit = event => {
        // prevents form from refreshing
        event.preventDefault();
        // shows updated results of finding the first name of the employee
        this.setState({
            ...this.state,
            results: this.state.results.filter(
                (employee) => employee.name.first === this.state.search
            )
        })
    }
    render() {
        return (
            // return everything on the screen SearchForm is the search bar; SearchResults is the table of employees
            <div><br/>
                <h1 className="text-center">Breh's Employee Directory</h1><br />
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
