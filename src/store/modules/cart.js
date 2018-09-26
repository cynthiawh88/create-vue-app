import request from '@/common/utils/request'
import api from '@/common/constant/api'

const state = {}

const getters = {}

const mutations = {}

const actions = {
  async checkout () {
    return request({
      url: api.CHECK
    })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
