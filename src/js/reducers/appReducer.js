const appReducer = (state={
    cartTotalPrice:0
},action)=>{
    switch(action.type){
        case "APP_CART_TOTAL_PRICE_ADD":
        state={
            ...state,
            cartTotalPrice:state.cartTotalPrice+action.payload
        };
        break;
        case "APP_CART_TOTAL_PRICE_SUB":
        state={
            ...state,
            cartTotalPrice:state.cartTotalPrice-action.payload
        };
        break;
    }
    return state;
}

export default appReducer;