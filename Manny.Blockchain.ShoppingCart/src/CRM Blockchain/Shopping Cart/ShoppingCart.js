import React, { Component } from 'react';
import { render } from 'react-dom';
import ShoppingItem from './ShoppingItem';
import ShoppingTotal from './ShoppingTotal';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class ShoppingCart extends React.Component {
    constructor(props) {
        super(props);
        this.state = { selectedProducts: this.props.selectedProducts }
    }
    componentWillReceiveProps(nextProps) {
        this.setState({ selectedProducts: nextProps.selectedProducts })
    }

    render() {
        if (this.state.selectedProducts) {
            var rows = [];
            this.props.selectedProducts.forEach(product => {
                rows.push(<ShoppingItem key={product.id} productRow={product} />);
            });
            return (
                <div className="col-xs-12 col-sm-6 col-md-4">                                 
                    <div className="panel panel-success">
                        <div className="panel-heading">
                            <h3>Shopping Cart</h3>
                        </div>
                        <div className="panel-body container-fluid">
                            <table id="tableCart" className="table table-hover table-condensed">
                                <thead>
                                    <tr>
                                        <th style={{ width: '60%' }}>Product</th>
                                        <th style={{ width: '10%' }}>Price</th>
                                        <th style={{ width: '10%' }}>Qty.</th>
                                        <th style={{ width: '20%' }} className="text-center">Subtotal</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {rows}
                                    <ShoppingTotal />
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            );
        }
        else
            return (<div>Loading...</div>);
    }
}

function mapStateToProps(state) {
    return {
        selectedProducts: state.selectedProducts
    }
}

ShoppingCart.defaultProps = {
    toast:"A product has just been bought",
    MOCK_CART : [
        { id: '1', name: 'Ice Cream', price:2.5,qty:4,url:'https://jvrx5q-sn3302.files.1drv.com/y4mRIuzMvO4r4Lts_KwooL9oDDGNMZW_FOuOPf8paB0fcc9o34ONTIiK-VZgrLJ2aHNj0sJoJLhVm22YPmlyI-4DNSAE_jyhdH3g2zfm5SmzoovZezPfInlCrUsUQk8mFrb9RuOHWv3uttibF8jqhciTe2V2ArDOzq6h5lsck4DrMe7qgrUpTsSkJSUwXjD6XC_rSF7vFVEsW4uCSYnuO1LgA/icecream.jpg' },
        { id: '2', name: 'Tandoori Meal', price: 8.99, qty: 2, url: 'https://84ui6a-sn3302.files.1drv.com/y4mglRianS-cXcJtppnU7AxHcrM6JMLxp1Y5lyeKYu7i3zAl11QPv3_6fPh8JloXwfZD0RkyP9Ez46WWbz2PD2sWbaAeSMKken2UlIhQWEk4AUqAjQjugwGIAgqSK7DIASzhtWRYiR116W-q7yjMoYOkPKYr_LwBpICeE3GiObndiqbWjsI4bdJiwtkswiRwH2drkOeZiPN3glsoN7a9HpCIQ/tandoori.jpg' },
        { id: '3', name: 'Diet Coke', price: 4.55, qty: 2, url: 'https://jvrx5q-sn3302.files.1drv.com/y4myZpdflViK0C8yTUpuGz6_f0vZAl2jQmRb_8iST3y9AfX-EXZIvU9F15jzMSB61ss_Wk5ldnspNwMOSfjrstNnyb7l4AwCwOSK8_Ht_Zh6YvbcYmZI5p_94h1WSA_Dshhb2frDXe4-_1Hgv7DUz6hoGVTtBDsSJ3RoFb6pQWt_hafXKzy0MH0BWVSnUeT7j7xexfJ4GJ0Xjy1FpQ_OXFEzg/dietcoke.jpg' },
        { id: '4', name: 'Samosa', price: 2.5, qty: 6, url: 'https://84vy0q-sn3302.files.1drv.com/y4mA8xXB48rFYImLZNEXOjZ-yJoLyCM8RPmK_pNnSMmli68AsdgmC3kHvcuLeeXZKOql1LVEUH37LhAadVV2EoQQJFoAI2lD7wO1LckbpG_lmRQ171K4k0Ia-GReeKTkxs0o6tlw2d7swQbmzjs5-Q6E4X7CXmrrvh58rjN5QCyGmiPfYvsxbsyoiqay9d2AAwZdAD806VAgmD9MOZYkzK_dA/samosa.jpg' },
    ],
};

export default connect(mapStateToProps)(ShoppingCart);





