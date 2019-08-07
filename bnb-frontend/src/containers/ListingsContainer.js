import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchListings } from '../redux/actions/ListingsActions'

class ListingsContainer extends Component {

    state = {
        listings: []
    }

    componentDidMount() {
        this.props.fetchListings()
    }
    render() {
        if (this.props.listings.length === 0) {
            return <h1>Loading...</h1>
        }
        return (
            <div>
                <ul>
                    {this.props.listings.map(listing => 
                    <div key={listing.id}
                    >
                        <h4>Name: {listing.name}</h4>
                        <p>Address: {listing.address}</p>
                        <p>Price: ${listing.price}</p>
                    </div>)}
                </ul>
            </div>
        )
    
    }
}

const mapStateToProps = state => {
    return {
        listings: state.listings
    }
}

export default connect(mapStateToProps, { fetchListings })(ListingsContainer)