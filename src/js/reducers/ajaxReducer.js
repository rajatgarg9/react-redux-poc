const ajaxReducer =( state ={
    productItemListObj: {
        "product_list": [
        ]
    }, 
    globVarObj:{
        global_keys: {

        }
    }
},action) => {
    
  switch(action.type){
      case "PRODUCT_LIST":{
          state={
              ...state,
              productItemListObj:action.payload
          }
      }
      break;
      case "GLOBAL_KEYS":{
        state={
            ...state,
            globVarObj:action.payload
        }
    }
  }
  return state;
}

export default ajaxReducer;