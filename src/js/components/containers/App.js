import React from 'react';
import _ from "lodash";
import axios from "axios";
import {connect} from "react-redux";


//custom components
import { CartHeader } from '../presentation/Header';
import { TotalAmount } from '../presentation/Total_amount';
import { ProductListContainer } from '../presentation/Product_list_container';
import { SelectedItemContainer } from '../presentation/Selected_item_container';

import {setName} from "../../actions/userActions";


class App extends React.Component {
    constructor(props) {
        super();
        this.state = {
            cartTotalPrice: 0,
            productItemListObj: {
                "product_list": [
                ]
            },
            globVarObj: {
                global_keys: {

                }
            }
        }
        props.setName("Redux");
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
                this.setState({
                    productItemListObj: response.data
                });
            })
            .catch(function (error) {
                console.log(`messsage for product list file: ${error}`);
            });
        axios.get('http://localhost:3001/data?file=global_var')
            .then((response) => {
                this.setState({
                    globVarObj: response.data
                });
            })
            .catch(function (error) {
                console.log(`messsage for Global file: ${error}`);
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

            this.setState({
                cartTotalPrice: this.state.cartTotalPrice + newitemPrice
            });
        } else if (action === "sub") {

            if (this.state.cartTotalPrice >= newitemPrice) {

                this.setState({
                    cartTotalPrice: this.state.cartTotalPrice - newitemPrice
                });
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
                    <CartHeader username={this.props.user.name} />
                </header>
                <section id="cart-main-body">
                <TotalAmount
                    cartPrice={this.state.cartTotalPrice}
                    globVarObj={this.state.globVarObj}
                />
                <SelectedItemContainer
                    cartTotalPriceUpdater={this.cartTotalPriceUpdater.bind(this)}
                    selectedItemCartList={this.selectedItemCartList}
                    selectedItemCartListHandler={this.selectedItemCartListHandler.bind(this)}
                    globVarObj={this.state.globVarObj}
                />
                <ProductListContainer
                    cartTotalPriceUpdater={this.cartTotalPriceUpdater.bind(this)}
                    selectedItemCartList={this.selectedItemCartList}
                    selectedItemCartListHandler={this.selectedItemCartListHandler.bind(this)}
                    productItemListObj={this.state.productItemListObj}
                    globVarObj={this.state.globVarObj}
                />
                </section>
            </div>
        );
    }
}

const mapStateToProps =(state) =>{
    return{
        user:state.user,
        math:state.math
    };
};

const mapDispatchToProps =(dispatch) =>{
    return{
        setName: (name) =>{
            dispatch(setName(name));
        }
    };
};


export default connect(mapStateToProps,mapDispatchToProps)(App);