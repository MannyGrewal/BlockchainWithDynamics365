export default function reducer(state = [], action) {
    switch (action.type) {
        case 'CRM_PRODUCTS_FETCHED':  
            return action.payload
        case 'PRODUCT_BOUGHT': {
            console.log('Reducer called for PRODUCT_BOUGHT')
            const stateCurrentItem = state[action.payload.index]
            return [
                ...state.slice(0, action.payload.index),
                Object.assign({}, stateCurrentItem, { remaining: stateCurrentItem.remaining - 1 }),
                ...state.slice(action.payload.index + 1)
            ]

        }
        default:
            return state;
    }
}
