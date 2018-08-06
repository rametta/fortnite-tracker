import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  modes: [
    { name: 'Squad', code: 'p9' },
    { name: 'Duo', code: 'p10' },
    { name: 'Solo', code: 'p2' },
    { name: 'Current Season Squad', code: 'curr_p9' },
    { name: 'Current Season Duo', code: 'curr_p10' },
    { name: 'Current Season Solo', code: 'curr_p2' }
  ],

  lifetime: {
    fields: [
      { text: 'User', value: 'user' },
      { text: 'Matches', value: 'MatchesPlayed' },
      { text: 'Wins', value: 'Wins' },
      { text: 'Win %', value: 'Win%' },
      { text: 'Top 3', value: 'Top3s' },
      { text: 'Top 5', value: 'Top5s' },
      { text: 'Top 6', value: 'Top6s' },
      { text: 'Top 12', value: 'Top12s' },
      { text: 'Top 25', value: 'Top25s' },
      { text: 'Kills', value: 'Kills' },
      { text: 'KD', value: 'K/d' },
      { text: 'Score', value: 'Score' },
      { text: 'Updated', value: 'lastUpdate' }
    ],
    data: []
  },

  modeData: {
    // Squad
    p9: {
      fields: [
        { text: 'User', value: 'user' },
        { text: 'Matches', value: 'matches' },
        { text: 'Wins', value: 'top1' },
        { text: 'Win %', value: 'winRatio' },
        { text: 'Top 3', value: 'top3' },
        { text: 'Top 6', value: 'top6' },
        { text: 'Kills', value: 'kills' },
        { text: 'KD', value: 'kd' },
        { text: 'Kills/Game', value: 'kpg' },
        { text: 'Score/Game', value: 'scorePerMatch' },
        { text: 'Score', value: 'score' },
        { text: 'TRN Rating', value: 'trnRating' }
      ],
      data: []
    },
    // Duo
    p10: {
      fields: [
        { text: 'User', value: 'user' },
        { text: 'Matches', value: 'matches' },
        { text: 'Wins', value: 'top1' },
        { text: 'Win %', value: 'winRatio' },
        { text: 'Top 5', value: 'top5' },
        { text: 'Top 12', value: 'top12' },
        { text: 'Kills', value: 'kills' },
        { text: 'KD', value: 'kd' },
        { text: 'Kills/Game', value: 'kpg' },
        { text: 'Score/Game', value: 'scorePerMatch' },
        { text: 'Score', value: 'score' },
        { text: 'TRN Rating', value: 'trnRating' }
      ],
      data: []
    },
    // Solo
    p2: {
      fields: [
        { text: 'User', value: 'user' },
        { text: 'Matches', value: 'matches' },
        { text: 'Wins', value: 'top1' },
        { text: 'Win %', value: 'winRatio' },
        { text: 'Top 10', value: 'top10' },
        { text: 'Top 25', value: 'top25' },
        { text: 'Kills', value: 'kills' },
        { text: 'KD', value: 'kd' },
        { text: 'Kills/Game', value: 'kpg' },
        { text: 'Score/Game', value: 'scorePerMatch' },
        { text: 'Score', value: 'score' },
        { text: 'TRN Rating', value: 'trnRating' }
      ],
      data: []
    },
    // Current Season Squad
    curr_p9: {
      fields: [
        { text: 'User', value: 'user' },
        { text: 'Matches', value: 'matches' },
        { text: 'Wins', value: 'top1' },
        { text: 'Win %', value: 'winRatio' },
        { text: 'Top 3', value: 'top3' },
        { text: 'Top 6', value: 'top6' },
        { text: 'Kills', value: 'kills' },
        { text: 'KD', value: 'kd' },
        { text: 'Kills/Game', value: 'kpg' },
        { text: 'Score/Game', value: 'scorePerMatch' },
        { text: 'Score', value: 'score' },
        { text: 'TRN Rating', value: 'trnRating' }
      ],
      data: []
    },
    // Current Season Duo
    curr_p10: {
      fields: [
        { text: 'User', value: 'user' },
        { text: 'Matches', value: 'matches' },
        { text: 'Wins', value: 'top1' },
        { text: 'Win %', value: 'winRatio' },
        { text: 'Top 5', value: 'top5' },
        { text: 'Top 12', value: 'top12' },
        { text: 'Kills', value: 'kills' },
        { text: 'KD', value: 'kd' },
        { text: 'Kills/Game', value: 'kpg' },
        { text: 'Score/Game', value: 'scorePerMatch' },
        { text: 'Score', value: 'score' },
        { text: 'TRN Rating', value: 'trnRating' }
      ],
      data: []
    },
    // Current Season Solo
    curr_p2: {
      fields: [
        { text: 'User', value: 'user' },
        { text: 'Matches', value: 'matches' },
        { text: 'Wins', value: 'top1' },
        { text: 'Win %', value: 'winRatio' },
        { text: 'Top 10', value: 'top10' },
        { text: 'Top 25', value: 'top25' },
        { text: 'Kills', value: 'kills' },
        { text: 'KD', value: 'kd' },
        { text: 'Kills/Game', value: 'kpg' },
        { text: 'Score/Game', value: 'scorePerMatch' },
        { text: 'Score', value: 'score' },
        { text: 'TRN Rating', value: 'trnRating' }
      ],
      data: []
    }
  },

  loading: false,
  error: false
}

const mutations = {
  updateData(state, { data }) {
    // Create a lifetime stats map for each player
    // and assign to state
    state.lifetime.data = data.map(d => {
      d.lifeTimeStatsMap = d.lifeTimeStats.reduce((acc, stat) => {
        acc[stat.key.replace(/\s/g, '')] = stat.value
        return acc
      }, {})

      const fetch = new Date(d.fetchTime)

      d.lifeTimeStatsMap.user = d.epicUserHandle
      d.lifeTimeStatsMap.lastUpdate = fetch.toLocaleString()

      return d.lifeTimeStatsMap
    })

    // Stats per mode data
    state.modes.forEach(mode => {
      state.modeData[mode.code].data = data
        .filter(p => p.stats[mode.code] !== undefined)
        .map(p => {
          p.stats[mode.code].user = { displayValue: p.epicUserHandle }
          return p.stats[mode.code]
        })
    })
  },
  setLoading(state, bool) {
    state.loading = bool
  },
  setError(state, bool) {
    state.error = bool
  }
}

export default new Vuex.Store({
  state,
  mutations
})
