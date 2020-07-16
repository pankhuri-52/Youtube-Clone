import React from 'react';
import {Paper, TextField} from '@material-ui/core';

class SearchBar extends React.Component{

    state = {
        searchTerm : ""
    }

    //declare a normal function, we have to bind the function in class
    //if we made it a arrow function, we dont need to bind

    handleChange = (event) => this.setState({searchTerm : event.target.value});

    handleSubmit = (event) => {
        const {searchTerm} = this.state;
        const {onFormSubmit} = this.props;

        onFormSubmit(searchTerm);

        event.preventDefault(); 
    }
    
    render() {
        return (
            <Paper elevation={6} style={{padding:'25px'}}>
                <form onSubmit={this.handleSubmit}>
                    <TextField fullWidth label="Search..." onChange={this.handleChange} />
                    {/* onChange method in react handles the input changes and changes the state accordingly */}
                </form>
            </Paper>
        )
    }
}
export default SearchBar;