export function setCartTotalPriceUpdater(newPrice,action){
    if(action === "add"){
        return{
            type:"APP_CART_TOTAL_PRICE_ADD",
            payload:newPrice
        }
    }
    else if(action === "sub"){
        return{
            type:"APP_CART_TOTAL_PRICE_SUB",
            payload:newPrice
        }
    }
}