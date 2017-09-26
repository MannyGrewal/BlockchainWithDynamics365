import React, { Component } from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';

class ShoppingTotal extends React.Component {
    constructor(props) {
        super(props);
        this.state = { selectedProducts: this.props.selectedProducts }
    }
    componentWillReceiveProps(nextProps) {
        this.setState({ selectedProducts: nextProps.selectedProducts })
    }
    handlePay(e) {

    }
    render() {

        var selectedProducts = this.props.selectedProducts;

        var sum = 0;
        selectedProducts.forEach(item => {
            sum = sum + item.subTotal
        })

        var payDiv = (selectedProducts.length > 0) ?
            <div>
                <button className="btn btn-success btn-lg" onClick={this.handlePay.bind(this)}>Pay</button>
            </div>  :  '' ;
        return (
            <tr>
                <td colSpan="2">
                    <h3>Total</h3>
                </td>
                <td colSpan="2" className="text-right">
                    <div className="pull-right">
                        <h3>${sum.toFixed(2)}</h3>
                        {payDiv}
                    </div>
                    
                </td>
            </tr>
        )
    }
}

function mapStateToProps(state) {
    return {
        selectedProducts: state.selectedProducts
    }
}

export default connect(mapStateToProps)(ShoppingTotal);