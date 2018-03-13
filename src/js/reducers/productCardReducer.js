const productCardReducer = (state={
    cardBtnText:" ",
    cardBtnClass:" "
},action) =>{
    switch(action.type){
        case "CARD_BTN_TOGGLE":{
            state={
                ...state,
                cardBtnText:action.payload.text,
                cardBtnClass:action.payload.class
            }
        };
        break;
    }
    return state;
}

export default productCardReducer;