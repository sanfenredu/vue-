import * as type from './type'
import http from 'utils/http'
const actions = {
    async getShopList({ commit }) {
        const res = await http({
            url: 'http://localhost:3000/shop'
        })
        const action = {
            type: type.GET_SHOP_LIST,
            payload: res.data
        }
        commit(action)
    },
    async getShopAddress({ commit },address) {
        const res = await http({
            url: '/v1/pois',
            params:{
                type: 'search',
                city_id: 2,
                keyword: address
            }
        })
        const action = {
            type: type.GET_SHOP_ADDRESS,
            payload: res.data
        }
        commit(action)
    },
    async getShopCategroy({ commit }) {
        const res = await http({
            url: '/shopping/v2/restaurant/category'
        })
        const action = {
            type: type.GET_SHOP_CATEGROY,
            payload: res.data
        }
        commit(action)
    },
    async deleteShopListItem ( { commit },id ) {
        //axios请求数据
        const res = await http({
          url: 'http://localhost:3000/shop',
          method: 'DELETE',
          data: {
            id
          }
        })
        console.log( 'res',res )
        const action = {
          type: type.DELETE_SHOP_LIST,
          payload: res.data.result
        }
        commit( action )
      },
        getShopEdit ( { commit },id ) {
        //axios请求数据
        const res =  http({
          url: 'http://localhost:3000/shop/edit',
          params:{
              id
          }
        })
        // console.log( 'res',res )
        const action = {
          type: type.GET_SHOP_EDIT,
          payload: res
        }
        commit( action )
      },
}
export default actions