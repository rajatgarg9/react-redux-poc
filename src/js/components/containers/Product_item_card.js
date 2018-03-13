import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";


import _ from "lodash";

class ProductItemCard extends React.Component {

    constructor(props) {
        super();
    }

    /**
        * Fire when click on "Add to Cart" and "Remove Cart" button and update total price of cart and Update number of selected item in cart 
        * @param {string} addCartClass -- used for check point on cart button
        * @param {string} removeCartClass -- used for check point on cart button
        * @param {Object} itemData -- used for check point on cart button
        * @return {undefined} 
     */
    cartButtonActionHandler(addCartClass, removeCartClass, itemData) {
        if (this.props.productItemCardButtonClass === addCartClass && _.findIndex(this.props.selectedItemCartList, function (o) { return o.id === itemData.id }) === -1) {
            this.props.selectedItemCartListHandler("add", { ...itemData });
            this.props.cartTotalPriceUpdater(Number(itemData.product_price), "add");
        }
        else if (this.props.productItemCardButtonClass === removeCartClass && _.findIndex(this.props.selectedItemCartList, function (o) { return o.id === itemData.id }) !== -1) {
            this.props.selectedItemCartListHandler("sub", { ...itemData });
            this.props.cartTotalPriceUpdater(Number(itemData.product_price), "sub");
        }
    }

    
    /**
        * Componet life cycle function and will change product button text and color based on the props
        * @param {object} nextProps  -- contain all the new props
        * @return {undefined} 
     */
    
    render() {
        return (
        <div id="product-card-comp">    
            <div className="product-item-card">
                <div className="product-itm-img-con">
                    <img src={this.props.itemData.product_img} alt="150 * 150" />
                </div>
                <div className="product-itm-detail">
                    <div>
                        <p>{this.props.itemData.product_name}</p>
                        <p>$ {this.props.itemData.product_price}</p>
                    </div>
                    <div className="add-cart-btn-cont">
                        <button className={this.props.productItemCardButtonClass} onClick={
                            () => {
                                this.cartButtonActionHandler("add-cart-btn", "remove-cart-btn", this.props.itemData);
                            }
                        } >{this.props.productItemCardButtonText}</button>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default ProductItemCard;

ProductItemCard.propTypes = {
    productItemCardButtonText: PropTypes.string,
    productItemCardButtonClass: PropTypes.string,
    cartTotalPriceUpdater: PropTypes.func,
    itemData: PropTypes.object,
    selectedItemCartList: PropTypes.array,
    selectedItemCartListHandler: PropTypes.func
}