import React from "react";

export const CartHeader = (props) => {

    return (
        <div className="cart-name-head">
            <h1>
                {props.username}
            </h1>
        </div>
    );
};

