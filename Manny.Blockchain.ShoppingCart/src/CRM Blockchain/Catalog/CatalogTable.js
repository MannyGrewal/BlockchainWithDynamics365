import React, { Component } from 'react';
import { render } from 'react-dom';
import CatalogItem from './CatalogItem';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class CatalogTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = { crmProducts: this.props.crmProducts }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ crmProducts: nextProps.crmProducts})
    }
  
    render() { 
        if (this.state.crmProducts) {
            var rows = [];
            this.props.crmProducts.forEach(product => {
                rows.push(<CatalogItem key={product.id} productRow={product} />);
            });
            return (<div className="row">{rows}</div>);
        }
        else
        return (<div>Loading...</div>);
    }
}


function mapStateToProps(state) {    
    return {        
        crmProducts: state.crmProducts
    }
}
export default connect(mapStateToProps)(CatalogTable);





