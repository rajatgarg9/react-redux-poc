export function ajaxDataUpdater(data,action){
    if(action === "product_list"){
        return{
            type:"PRODUCT_LIST",
            payload:data
        }
    }
    else if(action === "global_keys"){
        return{
            type:"GLOBAL_KEYS",
            payload:data
        }
    }
}