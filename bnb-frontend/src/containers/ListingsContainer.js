import React, { Component } from 'react'

export default class ListingsContainer extends Component {

    state = {
        listings: []
    }

    componentDidMount() {
        fetch('http://localhost:3001')
            .then(res => res.json())
            .then(listings => this.setState({ listings }))
    }
    render() {
        if (this.state.listings.length === 0) {
            return <h1>Loading...</h1>

        }
    
    }
}