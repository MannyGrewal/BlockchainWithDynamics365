import CrmConnect from '../connect';
import mockCrmProducts from '../../../src/_Mocks/Mock';
import { showSnack, dismissSnack } from 'react-redux-snackbar';

export function initCrmProducts() {
    return dispatch => {
        // DEV MODE
        //const crmProducts = mockCrmProducts;
        //dispatch(initCrmProductsAsync(crmProducts));
        // PRODUCTION MODE
        CrmConnect.then(collection => {            
            //loop through the results and write out the fullname
            const crmProducts = collection.map((row,index) => {
                return {
                    name: row['productid'].name,
                    id: row['_productid_value'],
                    index,
                    imgUrl: row['productid'].sms_imageurl,
                    remaining: row['productid'].sms_inventory,
                    price: row['amount']
                }
            });

            dispatch(initCrmProductsAsync(crmProducts));
        });
    }
}
export function initCrmProductsAsync(payload) {
    return {
        type: 'CRM_PRODUCTS_FETCHED',
        payload,
    }
}

export function productBought(id) {
    return dispatch => {       
        dispatch(productBoughtAsync(id));
    }
}
export function productBoughtAsync(payload) {
    return {
        type: 'PRODUCT_BOUGHT',
        payload,
    }
} 

export function productAddedToCart(cartItem) {
    return dispatch => {        
        dispatch(productAddedToCartAsync(cartItem));
    }
}
export function productAddedToCartAsync(payload) {
    return {
        type: 'PRODUCT_ADDED_TO_CART',
        payload,
    }
} 

export function showSnackMessage(msg) {
    return dispatch => {
        dispatch(showSnack('A123553B', {
            label: msg,
            timeout: 2000,
            button: { label: 'CHEERS' }
        }));
    }
}