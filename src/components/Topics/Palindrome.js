import React, { Component } from 'react';

export default class Palindrome extends Component {
    constructor() {
        super();

        this.state = {
            userinput: '',
            Palindrome: ''
        }
    }
    isPalindrome(userinput) {
        let forwards = userinput;
        let backwards = userinput;
        backwards = backwards.split('');
        backwards = backwards.reverse('');
        backwards = backwards.join('');

        if ( forwards === backwards ) {
            this.setState({palindrome: 'true'});
        } else {
            this.setState({palindrome: 'false'});
        }
    }
    
    render() {
        return (
        <div className="puzzleBox palindromePB">
            <h4> Palindrome </h4>
            <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
            <button className="confirmationButton"> Check </button>
            <span className="resultsBox"> Palindrome: { this.state.palindrome } </span>
        </div>
        )
    }
}