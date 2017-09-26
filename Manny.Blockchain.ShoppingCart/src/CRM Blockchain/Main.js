import React, { Component } from 'react';
import { render } from 'react-dom';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import CrmConnect from './connect';
import Catalog from './Catalog/Catalog'
import ShoppingCart from './Shopping Cart/ShoppingCart'
import { initCrmProducts } from './Actions/AllActions'
import { Snackbar } from 'react-redux-snackbar';


class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    handleProductSelected(selectedProducts) {
      
    }

    componentDidMount() {
        this.props.initCrmProducts();
    }
    render() {
        return (<div>
            <Snackbar />
            <Catalog onProductSelected={this.handleProductSelected.bind(this)} />
            <ShoppingCart />
        </div>);
    }
}

function mapStateToProps(state) {
    return {
        crmProducts: state.crmProducts,
        selectedProducts:state.selectedProducts,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        initCrmProducts: initCrmProducts
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);





