import * as type from './type'
const mutations = {
    [type.GET_SHOP_LIST](state, action) {
        state.shop_list_data = action.payload
    },
    [type.GET_SHOP_ADDRESS](state,action){
        state.shop_address_data=action.payload
    },
    [type.GET_SHOP_CATEGROY](state,action){
        state.shop_categroy_data=action.payload
    },
    [type.DELETE_SHOP_LIST](state,action){
        state.shop_list_data=action.payload
    },
    [type.GET_SHOP_EDIT](state,action){
        state.shop_edit_data=action.payload
    }
}
export default mutations