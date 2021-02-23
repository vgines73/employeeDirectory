import React, { Component } from 'react'
import SearchForm from '../Components/SearchForm/SearchForm';
import SearchResults from '../Components/SearchResults/SearchResults';
import API from '../utils/API'

export default class Search extends Component {
    state = {
        search: "",
        allData: [],
        employees: [],
        results: [],
        error: ""
    };

    filterList = (event) => {
        let employee = this.state.results;
        let employees = employee.filter((employee) => {
            return employee.toLowerCase().search(event.target.value.toLowerCase()) !== -1;
        });
        this.setState({employees: employees})
    }
    componentDidMount() {
        API.getNameList()
        // .then(res => console.log(res.data.results[0].name))
            .then(res => {
                // console.log(res.data.results)
                this.setState({ 
                    // results: res.data.results,
                    allData: this.props.content,
                    employees: this.props.content
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
                    // handleInputChange={this.handleInputChange}
                    filterList={this.filterList}
                    results={this.state.results}
                />
                {this.state.results.length === 0 ?
                <p>loading...</p>: 
                this.state.employees(function(employee) {
                    <SearchResults results={this.state.results} key={employee.id}>
                        {employee}
                    </SearchResults>
               })
            }
            </div>
        )
    }
}
