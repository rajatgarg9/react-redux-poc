import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";

import ProductItemCard from "./Product_item_card";

export const ProductListContainer = (props) => {



    return (
        <div id="product-list-container">
            <div>
                <h3>PRODUCT LIST</h3>
            </div>
            <div className="product-items-list">

                {
                    props.productItemListObj.product_list.map(
                        (item) => {

                            let productItemCardButtonText = (_.findIndex(props.selectedItemCartList, function (o) { return o.id === item.id }) === -1) ? props.globVarObj.global_keys.add_item : props.globVarObj.global_keys.remove_item,
                                productItemCardButtonClass = (_.findIndex(props.selectedItemCartList, function (o) { return o.id === item.id }) === -1) ? "add-cart-btn" : "remove-cart-btn";

                            return <ProductItemCard key={item.id}
                                productItemCardButtonText={productItemCardButtonText}
                                productItemCardButtonClass={productItemCardButtonClass}
                                cartTotalPriceUpdater={props.cartTotalPriceUpdater}
                                selectedItemCartList={props.selectedItemCartList}
                                itemData={item}
                                selectedItemCartListHandler={props.selectedItemCartListHandler}
                            />
                        }
                    )
                }

            </div>
        </div>
    );
};

ProductListContainer.propTypes = {
    cartTotalPriceUpdater: PropTypes.func,
    selectedItemCartList: PropTypes.array,
    selectedItemCartListHandler: PropTypes.func,
    globVarObj:PropTypes.object,
    productItemListObj:PropTypes.object
}