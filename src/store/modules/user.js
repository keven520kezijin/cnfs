// import { login, logout, getInfo } from '@/api/user'
import { getToken, removeToken } from '@/utils/auth'
// import { resetRouter } from '@/router'

const getDefaultState = () => {
  return {
    token: getToken(),
    name: '',
    avatar: '',
    device: 'desktop'
  }
}

const state = getDefaultState()

const mutations = {
  RESET_STATE: (state) => {
    Object.assign(state, getDefaultState())
  },
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  SET_DEVICE: (state, device) => {
    state.device = device
  }
}

const actions = {
  // user login
  

  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      removeToken() // must remove  token  first
      commit('RESET_STATE')
      resolve()
    })
  },
  
  setDevice({ commit }, device) {
    commit('SET_DEVICE', device)
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

