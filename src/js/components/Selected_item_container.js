import React from "react";
import PropTypes from "prop-types";

import ProductItemCard from "./Product_item_card";

export const SelectedItemContainer = (props) => {



    let _productItemCardButtonText = props.globVarObj.global_keys.remove_item,
        _productItemCardButtonClass = "remove-cart-btn",
        _selectedItemContainerComponent = "";

    if (props.selectedItemCartList.length !== 0) {
        _selectedItemContainerComponent = <div className="selected-item-container">
            {
                props.selectedItemCartList.map(
                    (itemData) => {
                        return <ProductItemCard key={itemData.id}
                            productItemCardButtonText={_productItemCardButtonText}
                            productItemCardButtonClass={_productItemCardButtonClass}
                            cartTotalPriceUpdater={props.cartTotalPriceUpdater}
                            itemData={itemData}
                            selectedItemCartList={props.selectedItemCartList}
                            selectedItemCartListHandler={props.selectedItemCartListHandler}
                        />
                    }
                )
            }
        </div>
    }

    return (
        <div id="selected-item-container-comp">
            {_selectedItemContainerComponent}
        </div>
    );
};

SelectedItemContainer.propTypes = {
    cartTotalPriceUpdater: PropTypes.func,
    selectedItemCartList: PropTypes.array,
    selectedItemCartListHandler: PropTypes.func,
    globVarObj:PropTypes.object
}
