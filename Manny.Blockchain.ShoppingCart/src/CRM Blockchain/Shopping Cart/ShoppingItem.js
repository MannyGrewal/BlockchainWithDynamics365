import React, { Component } from 'react';
import { render } from 'react-dom';

class ShoppingItem extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        var props = this.props.productRow;

        return (
            <tr>
                <td>
                    <div className="row">
                        <div className="col-sm-2 hidden-xs"><img src={props.imgUrl} alt={props.name} className="img-responsive" /></div>
                        <div className="col-sm-10">
                            {props.name}
                        </div>
                    </div>
                </td>
                <td>$ {props.price}</td>
                <td className="text-center">
                    {props.qty}
                </td>
                <td className="text-right">$ {(props.price * props.qty).toFixed(2)}</td>
            </tr>
        );
    }
}

ShoppingItem.defaultProps = {
    divItemStyle: {
        padding: '0px 0px 5px 0px',
    },
    divMainStyle: {
        padding: '0px 0px 10px 0px',
    },
};

export default ShoppingItem;