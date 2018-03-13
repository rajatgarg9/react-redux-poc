import React from 'react';
import _ from "lodash";
import axios from "axios";
import { connect } from "react-redux";


//custom components
import { CartHeader } from '../presentation/Header';
import { TotalAmount } from '../presentation/Total_amount';
import { ProductListContainer } from '../presentation/Product_list_container';
import { SelectedItemContainer } from '../presentation/Selected_item_container';

import { setCartTotalPriceUpdater } from "../../actions/appActions";
import { ajaxDataUpdater } from "../../actions/ajaxActions";


class App extends React.Component {
    constructor(props) {
        super();
    }

    selectedItemCartList = []


    /**
        * Component life cycle function for fetching data from server and then set state accordingly
        * @param {undefined}
        * @return {undefined} 
    */
    componentDidMount() {

        axios.get('http://localhost:3001/data?file=product')
            .then((response) => {
                // console.log("product_list");
                this.props.setAjaxData(response.data, "product_list");
            })
            .catch(function (error) {
                //console.log(`messsage for product list file: ${error}`);
            });
        axios.get('http://localhost:3001/data?file=global_var')
            .then((response) => {
                //console.log("global_keys");
                this.props.setAjaxData(response.data, "global_keys");
            })
            .catch(function (error) {
                // console.log(`messsage for Global file: ${error}`);
            });
    }


    /**
    * Calculate total amount of selected products in the cart
    * @param {number} newitemPrice -- price of product which will we removed or added to cart
    * @param {string} action  -- cart total price will be add or sub on the the basis of this value
    * @return {undefined} 
    */
    cartTotalPriceUpdater(newitemPrice, action) {
        if (action === "add") {
            this.props.setCartTotalPrice(newitemPrice, "add");
        } else if (action === "sub") {

            if (this.props.app.cartTotalPrice >= newitemPrice) {
                this.props.setCartTotalPrice(newitemPrice, "sub");
            }
        }
    }

    /**
        * Manage number of items in the cart with help of array
        * @param {string} action --product  will be add or delete from cart base on this value
        * @param {Object} cartItemDataObj -- product data which will be removed or add in cart based on action
        * @return {undefined} 
    */
    selectedItemCartListHandler(action, cartItemDataObj) {
        if (action === "add") {
            this.selectedItemCartList = [...this.selectedItemCartList, cartItemDataObj]

        } else if (action === "sub") {
            this.selectedItemCartList = _.differenceWith(this.selectedItemCartList, [cartItemDataObj], _.isEqual)

        }
    }



    render() {
        return (
            <div>
                <header id="cart-header-name">
                    <CartHeader username={this.props.ajaxHandler.globVarObj.global_keys.shopping_cart} />
                </header>
                <section id="cart-main-body">
                    <TotalAmount
                        cartPrice={this.props.app.cartTotalPrice}
                        globVarObj={this.props.ajaxHandler.globVarObj}
                    />
                    <SelectedItemContainer
                        cartTotalPriceUpdater={this.cartTotalPriceUpdater.bind(this)}
                        selectedItemCartList={this.selectedItemCartList}
                        selectedItemCartListHandler={this.selectedItemCartListHandler.bind(this)}
                        globVarObj={this.props.ajaxHandler.globVarObj}
                    />
                    <ProductListContainer
                        cartTotalPriceUpdater={this.cartTotalPriceUpdater.bind(this)}
                        selectedItemCartList={this.selectedItemCartList}
                        selectedItemCartListHandler={this.selectedItemCartListHandler.bind(this)}
                        productItemListObj={this.props.ajaxHandler.productItemListObj}
                        globVarObj={this.props.ajaxHandler.globVarObj}
                    />
                </section>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        app: state.app,
        ajaxHandler: state.ajax
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setCartTotalPrice: (price, action) => {
            dispatch(setCartTotalPriceUpdater(price, action));
        },
        setAjaxData: (data, action) => {
            dispatch(ajaxDataUpdater(data, action));
        }
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(App);