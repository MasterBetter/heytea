import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//为了方便测试，此处用vuex做全局数据
const store = new Vuex.Store({
	state: {
		orderType: 'takein',
		addresses: [{
			"id": 1,
			"user_id": 1,
			"name": "梁先生",
			"phone": "18666610100",
			"gender": 0,
			"address": "有间大厦",
			"complete_address": "广东省深圳市宝安区福海大道118号",
			"description": "ABC1234",
			"latitude": "",
			"longitude": "",
			"is_default": 1
		}],
		address: {}
	},
	mutations: {
		SET_ORDER_TYPE(state, orderType) {
			state.orderType = orderType
		},
		SET_ADDRESS(state, address) {
			state.address = address
		}
	}
})

export default store
