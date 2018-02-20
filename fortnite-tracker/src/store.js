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

  lifetime: {
    fields: [
      { name: 'Matches', code: 'MatchesPlayed' },
      { name: 'Wins', code: 'Wins' },
      { name: 'Win %', code: 'Win%' },
      { name: 'Top 3', code: 'Top3s' },
      { name: 'Top 5', code: 'Top5s' },
      { name: 'Top 6', code: 'Top6s' },
      { name: 'Top 12', code: 'Top12s' },
      { name: 'Top 25', code: 'Top25s' },
      { name: 'Kills', code: 'Kills' },
      { name: 'KD', code: 'K/d' },
      { name: 'Kills/Min', code: 'KillsPerMin' },
      { name: 'Score', code: 'Score' },
      { name: 'Avg. Survival', code: 'AvgSurvivalTime' }
    ],
    sortField: 'MatchesPlayed',
    sortDesc: true,
    data: []
  },

  modeData: {
    // Squad
    p9: {
      fields: [
        { name: 'Matches', code: 'matches' },
        { name: 'Wins', code: 'top1' },
        { name: 'Win %', code: 'winRatio' },
        { name: 'Top 3', code: 'top3' },
        { name: 'Top 6', code: 'top6' },
        { name: 'Kills', code: 'kills' },
        { name: 'KD', code: 'kd' },
        { name: 'Kills/Min', code: 'kpm' },
        { name: 'Kills/Game', code: 'kpg' },
        { name: 'Score/Min', code: 'scorePerMin' },
        { name: 'Score/Game', code: 'scorePerMatch' },
        { name: 'Score', code: 'score' },
        { name: 'Mins. Played', code: 'minutesPlayed' },
        { name: 'Avg. Time Played', code: 'avgTimePlayed' },
        { name: 'TRN Rating', code: 'trnRating' }
      ],
      sortField: 'matches',
      sortDesc: true,
      data: []
    },
    // Duo
    p10: {
      fields: [
        { name: 'Matches', code: 'matches' },
        { name: 'Wins', code: 'top1' },
        { name: 'Win %', code: 'winRatio' },
        { name: 'Top 5', code: 'top5' },
        { name: 'Top 12', code: 'top12' },
        { name: 'Kills', code: 'kills' },
        { name: 'KD', code: 'kd' },
        { name: 'Kills/Min', code: 'kpm' },
        { name: 'Kills/Game', code: 'kpg' },
        { name: 'Score/Min', code: 'scorePerMin' },
        { name: 'Score/Game', code: 'scorePerMatch' },
        { name: 'Score', code: 'score' },
        { name: 'Mins. Played', code: 'minutesPlayed' },
        { name: 'Avg. Time Played', code: 'avgTimePlayed' },
        { name: 'TRN Rating', code: 'trnRating' }
      ],
      sortField: 'matches',
      sortDesc: true,
      data: []
    },
    // Solo
    p2: {
      fields: [
        { name: 'Matches', code: 'matches' },
        { name: 'Wins', code: 'top1' },
        { name: 'Win %', code: 'winRatio' },
        { name: 'Top 10', code: 'top10' },
        { name: 'Top 25', code: 'top25' },
        { name: 'Kills', code: 'kills' },
        { name: 'KD', code: 'kd' },
        { name: 'Kills/Min', code: 'kpm' },
        { name: 'Kills/Game', code: 'kpg' },
        { name: 'Score/Min', code: 'scorePerMin' },
        { name: 'Score/Game', code: 'scorePerMatch' },
        { name: 'Score', code: 'score' },
        { name: 'Mins. Played', code: 'minutesPlayed' },
        { name: 'Avg. Time Played', code: 'avgTimePlayed' },
        { name: 'TRN Rating', code: 'trnRating' }
      ],
      sortField: 'matches',
      sortDesc: true,
      data: []
    }
  },

  loading: false,
  error: false
}

const mutations = {
  updateData(state, { data }) {
    // Lifetime map
    data.forEach((d, i) => {
      d.lifeTimeStatsMap = d.lifeTimeStats.reduce((acc, stat) => {
        acc[stat.key.replace(/\s/g, '')] = stat.value
        return acc
      }, {})
    })

    state.data = data

    // Lifetime
    state.lifetime.data = data.map((p) => ({
      stats: p.lifeTimeStatsMap,
      user: p.epicUserHandle
    }))

    // Squad
    state.modeData.p9.data = data.map((p) => ({
      stats: p.stats.p9,
      user: p.epicUserHandle
    }))

    // Duo
    state.modeData.p10.data = data.map((p) => ({
      stats: p.stats.p10,
      user: p.epicUserHandle
    }))

    // Solo
    state.modeData.p2.data = data.map((p) => ({
      stats: p.stats.p2,
      user: p.epicUserHandle
    }))
  },
  loading(state, bool) {
    state.loading = bool
  },
  error(state, bool) {
    state.error = bool
  },
  setFieldSort(state, { mode, field, isDesc }) {
    state.modeData[mode].sortField = field
    state.modeData[mode].sortDesc = isDesc

    state.modeData[mode].data = state.modeData[mode].data.sort((a, b) => {
      const aRank = a.stats[field]
        ? a.stats[field].value
        : Number.MAX_SAFE_INTEGER

      const bRank = b.stats[field]
        ? b.stats[field].value
        : Number.MAX_SAFE_INTEGER

      return isDesc ? bRank - aRank : aRank - bRank
    })
  },
  setLifetimeFieldSort(state, { field, isDesc }) {
    state.lifetime.sortField = field
    state.lifetime.sortDesc = isDesc

    state.lifetime.data = state.lifetime.data.sort((a, b) => {
      const aRank = a.stats[field] ? parseFloat(a.stats[field]) : -1
      const bRank = b.stats[field] ? parseFloat(b.stats[field]) : -1
      return isDesc ? bRank - aRank : aRank - bRank
    })
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
        commit('updateData', { data })
        commit('loading', false)

        commit('setFieldSort', {
          mode: 'p9',
          field: state.modeData.p9.sortField,
          isDesc: state.modeData.p9.sortDesc
        })

        commit('setFieldSort', {
          mode: 'p2',
          field: state.modeData.p2.sortField,
          isDesc: state.modeData.p2.sortDesc
        })

        console.log(state.modeData.p10.sortField)

        commit('setFieldSort', {
          mode: 'p10',
          field: state.modeData.p10.sortField,
          isDesc: state.modeData.p10.sortDesc
        })

        commit('setLifetimeFieldSort', {
          field: state.lifetime.sortField,
          isDesc: state.lifetime.sortDesc
        })
      })
      .catch((err) => {
        commit('error', true)
        console.error(err)
      })
  }
}

const getters = {}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
