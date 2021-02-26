import React, { Component } from 'react'
import SearchForm from '../Components/SearchForm/SearchForm';
import SearchResults from '../Components/SearchResults/SearchResults';
import API from '../utils/API'

const styles = {
    spanStyle: {
        color: "red",
        fontFamily: ['RocknRoll One', "sans-serif"]
    }

}
export default class Home extends Component {
    // set up initial state
    state ={
        search: "",
        results: [],
        filteredResults: [],
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
                    filteredResults: res.data.results,
                })
            })
            .catch(err => console.log(err))
    };
    // updates input state
    handleInputChange = event => {
        this.setState({ search: event.target.value});
    };
    // resets the employee directory
    handleReset = event => {
        // prevents form from refreshing
        event.preventDefault();
        //created variable to alter the results
        const results = this.state.results

        // console.log("working");
        this.setState({ filteredResults: results })
    }
    // submits the form
    handleFormSubmit = event => {
        // prevents form from refreshing
        event.preventDefault();
        // shows updated results of finding the first name of the employee
        this.setState({
            ...this.state,
            filteredResults: this.state.results.filter(
                (employee) => employee.name.first === this.state.search
            )
        })
    }
    render() {
        return (
            // return everything on the screen SearchForm is the search bar; SearchResults is the table of employees
            <div><br/>
                <h1 className="text-center"><span style={styles.spanStyle}>BREH's</span> Employee Directory</h1><br />
                {/* search bar */}
                <SearchForm 
                    handleFormSubmit={this.handleFormSubmit}
                    handleInputChange={this.handleInputChange}
                    handleReset={this.handleReset}
                    results={this.state.filteredResults}
                />
                {this.state.results.length === 0 ?
                    <p>loading...</p> : 
                // shows the table
                <SearchResults results={this.state.filteredResults} />
            }
            </div>
        )
    }
}
