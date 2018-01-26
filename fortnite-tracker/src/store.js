import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const state = {
  api: '/v1/profile/xbox/',
  apiHeader: { 'TRN-Api-Key': '3fdd40fe-6913-4b08-8806-d61c600680a9' },
  users: ['rametta', 'ehlouis', 'cryonical', 'veemerk'],
  modes: [
    { name: 'Squad', code: 'p9' },
    { name: 'Duo', code: 'p10' },
    { name: 'Solo', code: 'p2' }
  ],
  data: [],
  loading: false,
  error: false
}

const mutations = {
  updateData(state, { data }) {
    state.data = data
  },
  loading(state, bool) {
    state.loading = bool
  },
  error(state, bool) {
    state.error = bool
  }
}

const actions = {
  refreshData({ state, commit }) {
    commit('error', false)
    commit('loading', true)

    const promises = state.users.map((user) =>
      axios.get(`${state.api}${user}`, {
        headers: state.apiHeader
      })
    )

    Promise.all(promises)
      .then((res) => res.map((r) => r.data))
      .then((data) => {
        data.forEach((d, i) => {
          d.lifeTimeStatsMap = d.lifeTimeStats.reduce((acc, stat) => {
            acc[stat.key] = stat.value
            return acc
          }, {})
        })

        data = data.sort(
          (a, b) =>
            parseFloat(b.lifeTimeStatsMap['K/d']) -
            parseFloat(a.lifeTimeStatsMap['K/d'])
        )

        commit('updateData', { data })
        commit('loading', false)
      })
      .catch(() => commit('error', true))
  }
}

const getters = {}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
