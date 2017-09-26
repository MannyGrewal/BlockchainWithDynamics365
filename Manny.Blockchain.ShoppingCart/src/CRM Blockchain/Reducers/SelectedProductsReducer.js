export default function reducer(state = [], action) {
    switch (action.type) {
        case 'PRODUCT_ADDED_TO_CART': {
            console.log('Selected called for PRODUCT_ADDED_TO_CART')

            //First check if item exists at all
            var existingItem = state.find(item => {
                return item.id === action.payload.id
            })

            //If it does then we only need to update the qty
            if (existingItem != null) {
                console.log('Found item')

                //We return all items in the array
                const updatedItems = state.map(item => {
                    if (item.id === action.payload.id) {
                        return { ...item, ...{ qty: existingItem.qty + 1, subTotal: existingItem.subTotal + action.payload.price  } }
                    }
                    return item
                })
                return updatedItems
            }
            else{
                console.log('Adding new item')
                return [...state, { ...action.payload, qty: 1, subTotal: action.payload.price }]
            }

           

        }
        default:
            return state;
    }
};


var mock=
    [
        { id: '1', name: 'Ice Cream', price: 2.5, qty: 4, url: 'https://jvrx5q-sn3302.files.1drv.com/y4mRIuzMvO4r4Lts_KwooL9oDDGNMZW_FOuOPf8paB0fcc9o34ONTIiK-VZgrLJ2aHNj0sJoJLhVm22YPmlyI-4DNSAE_jyhdH3g2zfm5SmzoovZezPfInlCrUsUQk8mFrb9RuOHWv3uttibF8jqhciTe2V2ArDOzq6h5lsck4DrMe7qgrUpTsSkJSUwXjD6XC_rSF7vFVEsW4uCSYnuO1LgA/icecream.jpg' },
        { id: '2', name: 'Tandoori Meal', price: 8.99, qty: 2, url: 'https://84ui6a-sn3302.files.1drv.com/y4mglRianS-cXcJtppnU7AxHcrM6JMLxp1Y5lyeKYu7i3zAl11QPv3_6fPh8JloXwfZD0RkyP9Ez46WWbz2PD2sWbaAeSMKken2UlIhQWEk4AUqAjQjugwGIAgqSK7DIASzhtWRYiR116W-q7yjMoYOkPKYr_LwBpICeE3GiObndiqbWjsI4bdJiwtkswiRwH2drkOeZiPN3glsoN7a9HpCIQ/tandoori.jpg' },
        { id: '3', name: 'Diet Coke', price: 4.55, qty: 2, url: 'https://jvrx5q-sn3302.files.1drv.com/y4myZpdflViK0C8yTUpuGz6_f0vZAl2jQmRb_8iST3y9AfX-EXZIvU9F15jzMSB61ss_Wk5ldnspNwMOSfjrstNnyb7l4AwCwOSK8_Ht_Zh6YvbcYmZI5p_94h1WSA_Dshhb2frDXe4-_1Hgv7DUz6hoGVTtBDsSJ3RoFb6pQWt_hafXKzy0MH0BWVSnUeT7j7xexfJ4GJ0Xjy1FpQ_OXFEzg/dietcoke.jpg' },
        { id: '4', name: 'Samosa', price: 2.5, qty: 6, url: 'https://84vy0q-sn3302.files.1drv.com/y4mA8xXB48rFYImLZNEXOjZ-yJoLyCM8RPmK_pNnSMmli68AsdgmC3kHvcuLeeXZKOql1LVEUH37LhAadVV2EoQQJFoAI2lD7wO1LckbpG_lmRQ171K4k0Ia-GReeKTkxs0o6tlw2d7swQbmzjs5-Q6E4X7CXmrrvh58rjN5QCyGmiPfYvsxbsyoiqay9d2AAwZdAD806VAgmD9MOZYkzK_dA/samosa.jpg' },
    ]