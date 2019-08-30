import Vue from 'vue'
import Vuex from 'vuex'
import shopModule from './shop'
Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        shopModule,
       
    }
})

export default store