const initialstate = []

export default (state = initialstate, action) => {
    switch(action.type) {
        case 'FETCH_LISTINGS_SUCCESS':
            return action.payload
            
        default:
            return state
    }
}