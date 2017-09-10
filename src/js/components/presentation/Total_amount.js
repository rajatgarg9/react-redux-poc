import React from "react";
import PropTypes from 'prop-types';



export const TotalAmount =(props) => {    
    return (
        <div id="total-amount-displayer-container">
            <div>
                <h1>Your Cart</h1>
            </div>
            <div className="amount-displayer">
                <p>Total: {props.globVarObj.global_keys.dolar_symbol} {props.cartPrice}</p>
            </div>
        </div>
    );
};


TotalAmount.propTypes={
    cartPrice:PropTypes.number,
    globVarObj:PropTypes.object
}

