import React, { Component } from 'react';
import { render } from 'react-dom';
import CatalogTable from './CatalogTable'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


class Catalog extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        
    }
    render() {        
        return (<div className="col-xs-12 col-sm-6 col-md-8">
                <CatalogTable />
            </div>);
    }
}

function mapStateToProps(state) {
    return {
        crmProducts: state.crmProducts
    }
}
export default connect(mapStateToProps)(Catalog);





