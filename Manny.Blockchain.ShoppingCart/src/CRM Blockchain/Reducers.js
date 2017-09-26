import { combineReducers } from 'redux'
import selectedProducts from './Reducers/SelectedProductsReducer'
import crmProducts from './Reducers/CrmProductsReducer'
import { snackbarReducer } from 'react-redux-snackbar';

const allReducers = combineReducers({
    crmProducts,
    selectedProducts,
    snackbar: snackbarReducer,
});

export default allReducers;