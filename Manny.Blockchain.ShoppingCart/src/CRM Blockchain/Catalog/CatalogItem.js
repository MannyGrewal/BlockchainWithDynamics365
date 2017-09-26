import React, { Component } from 'react';
import { render } from 'react-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { productAddedToCart, showSnackMessage } from '../Actions/AllActions'
import { default as Web3 } from 'web3';
import { default as contract } from 'truffle-contract'
import purchase_json from '../../../build/contracts/Purchase.json'

class CatalogItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            remaining: !!this.props.productRow.remaining ? parseInt(this.props.productRow.remaining, 10) : 0,
        };
    }
    handleItemBuy(e) {
        if (this.state.remaining > 0) {

            console.log('About to dispatch event for id' + this.props.productRow.id)
            const boughtItem = (({ id, name, imgUrl, price }) => ({ id, name, imgUrl, price }))(this.props.productRow);

            if (typeof web3 !== 'undefined') {
                console.warn("Using web3 detected from external source like Metamask")
                // Use Mist/MetaMask's provider
                window.web3 = new Web3(web3.currentProvider);
            } else {
                console.warn("No web3 detected. Falling back to http://localhost:8545. You should remove this fallback when you deploy live, as it's inherently insecure. Consider switching to Metamask for development. More info here: http://truffleframework.com/tutorials/truffle-and-metamask");
                // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
                window.web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
            }
           
            var Purchase = contract(purchase_json);
            Purchase.setProvider(web3.currentProvider);

            Purchase.deployed().then(function (contractInstance) {
                console.log('Purchase contract is deployed >> ' + contractInstance)

                // Replace xxxx with the Account from your TestRPC. When you run TestRPC you get 10 accounts, use one of them - format is like 0x3932838...
                return contractInstance.Buy(boughtItem.id, parseInt(1), parseInt(boughtItem.price), { from: '<your testrpc account>'});
                //return contractInstance.TotalBillOfACustomer();
            }).then(function (result) {
                console.log('Contract Success >> ' + result.toString(10));
                });

           
            this.props.productAddedToCart(boughtItem);
            this.props.showSnackMessage(boughtItem.name + ' has been added');
        }

        var balance = this.state.remaining - 1;
        this.setState({ remaining: (balance <= 0) ? 0 : balance })
    }
    render() {
        var props = this.props.productRow; 
        var remainingDisplay = (this.state.remaining > 0) ?
            this.state.remaining :
            <span style={{ color: 'red' }}>
                Finished !!
            </span>

        return (
            <div className="col-sm-6 col-md-4 col-lg-3">
                <div className="panel panel-primary">
                    <div className="panel-heading">{props.name}</div>
                    <div className="panel-body">
                        <div>
                            <img alt="Could not download image of {props.name}" className="img-responsive" src={props.imgUrl} />
                        </div>
                        <div style={this.props.divStyle}>
                            <div className="col-md-8">
                                <div><span style={this.props.priceStyle}>${props.price}</span></div>
                                <div>Stock : {remainingDisplay}</div>
                            </div>
                            <div  className="col-md-4">
                                <button className="btn btn-primary btn-lg" onClick={this.handleItemBuy.bind(this)}>Add</button>
                            </div>
                        </div>
                    </div>
                </div>                
            </div>
        );
    }
}

CatalogItem.defaultProps = {
    divStyle : {
        padding: '15px 5px 5px 0px',
    },
    priceStyle : {
        color: 'green',
        font: 'bold 24px Arial'
    },
};

function mapStateToProps(state) {
    return {
        crmProducts: state.crmProducts,
        selectedProducts: state.selectedProducts,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        productAddedToCart: productAddedToCart,
        showSnackMessage: showSnackMessage,
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(CatalogItem);