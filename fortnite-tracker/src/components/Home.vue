<template>
  <div>

    <div v-if="loading">

      <div v-if="error" class="alert">
        <strong>Error!</strong> There was an error trying to get your stats. Please wait 5 seconds and try again. If you don't wait 5 seconds - I will find you...
      </div>

      <Loader />
      <div class="text-center mt-3">You are never too old to set another goal or to dream a new dream <em>- C.S Lewis</em></div>
    </div>

    <div class="p-3 fade-in" v-if="!loading">
      <div class="d-flex justify-between">
        <h3>Lifetime</h3>
        <button class="button-primary" @click="refresh()">Refresh</button>
      </div>
      <table class="u-full-width">
        <thead>
            <tr>
              <th>User</th>
              <th>Wins</th>
              <th>Win %</th>
              <th>Top 3</th>
              <th>Top 5</th>
              <th>Top 6</th>
              <th>Top 12</th>
              <th>Top 25</th>
              <th>Kills</th>
              <th>KD</th>
              <th>Kills/Min</th>
              <th>Score</th>
              <th>Matches Played</th>
              <th>Avg. Time Played</th>
            </tr>
        </thead>
        <tbody>
          <tr v-for="d in data" :key="d.accountId">
            <td>{{d.epicUserHandle}}</td>
            <td>{{d.lifeTimeStatsMap['Wins']}}</td>
            <td>{{d.lifeTimeStatsMap['Win%']}}</td>
            <td>{{d.lifeTimeStatsMap['Top 3s']}}</td>
            <td>{{d.lifeTimeStatsMap['Top 5s']}}</td>
            <td>{{d.lifeTimeStatsMap['Top 6s']}}</td>
            <td>{{d.lifeTimeStatsMap['Top 12s']}}</td>
            <td>{{d.lifeTimeStatsMap['Top 25s']}}</td>
            <td>{{d.lifeTimeStatsMap['Kills']}}</td>
            <td>{{d.lifeTimeStatsMap['K/d']}}</td>
            <td>{{d.lifeTimeStatsMap['Kills Per Min']}}</td>
            <td>{{d.lifeTimeStatsMap['Score']}}</td>
            <td>{{d.lifeTimeStatsMap['Matches Played']}}</td>
            <td>{{d.lifeTimeStatsMap['Avg Survival Time']}}</td>
          </tr>
        </tbody>
      </table>

      <div v-for="mode in modes" :key="mode.code">
        <h3>{{mode.name}}</h3>
        <table class="u-full-width">
          <thead>
            <tr>
              <th>User</th>
              <th>Wins</th>
              <th>Win %</th>
              <th>Top 3</th>
              <th>Top 5</th>
              <th>Top 6</th>
              <th>Top 10</th>
              <th>Top 12</th>
              <th>Top 25</th>
              <th>Kills</th>
              <th>KD</th>
              <th>Kills/Min</th>
              <th>Kills/Game</th>
              <th>Score/Min</th>
              <th>Score/Game</th>
              <th>Avg. Time Played</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="d in data" :key="d.accountId" v-if="d.stats[mode.code]">
              <td>{{d.epicUserHandle}}</td>
              <td>{{d.stats[mode.code].top1 ? d.stats[mode.code].top1.displayValue : '-'}}</td>
              <td>{{d.stats[mode.code].winRatio ? d.stats[mode.code].winRatio.displayValue : '-'}}</td>
              <td>{{d.stats[mode.code].top3 ? d.stats[mode.code].top3.displayValue : '-'}}</td>
              <td>{{d.stats[mode.code].top5 ? d.stats[mode.code].top5.displayValue : '-'}}</td>
              <td>{{d.stats[mode.code].top6 ? d.stats[mode.code].top6.displayValue : '-'}}</td>
              <td>{{d.stats[mode.code].top10 ? d.stats[mode.code].top10.displayValue : '-'}}</td>
              <td>{{d.stats[mode.code].top12 ? d.stats[mode.code].top12.displayValue : '-'}}</td>
              <td>{{d.stats[mode.code].top25 ? d.stats[mode.code].top25.displayValue : '-'}}</td>
              <td>{{d.stats[mode.code].kills ? d.stats[mode.code].kills.displayValue : '-'}}</td>
              <td>{{d.stats[mode.code].kd ? d.stats[mode.code].kd.displayValue : '-'}}</td>
              <td>{{d.stats[mode.code].kpm ? d.stats[mode.code].kpm.displayValue : '-'}}</td>
              <td>{{d.stats[mode.code].kpg ? d.stats[mode.code].kpg.displayValue : '-'}}</td>
              <td>{{d.stats[mode.code].scorePerMin ? d.stats[mode.code].scorePerMin.displayValue : '-'}}</td>
              <td>{{d.stats[mode.code].scorePerMatch ? d.stats[mode.code].scorePerMatch.displayValue : '-'}}</td>
              <td>{{d.stats[mode.code].avgTimePlayed ? d.stats[mode.code].avgTimePlayed.displayValue : '-'}}</td>
            </tr>
          </tbody>
        </table>
      </div>

      Made by Jason
    </div>

  </div>
</template>

<script>
import axios from 'axios'
import Loader from './Loader'

export default {
  name: 'Home',
  components: { Loader },
  data() {
    return {
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
  },
  created() {
    this.refresh()
  },
  methods: {
    refresh() {
      this.error = false
      this.loading = true

      const promises = this.users.map((user) => this.getData(user))

      setTimeout(() => {
        Promise.all(promises)
          .then((res) => res.map((r) => r.data))
          .then((data) => this.processData(data))
          .catch(() => (this.error = true))
      }, 100)
    },
    getData(user) {
      return axios.get(`${this.api}${user}`, {
        headers: this.apiHeader
      })
    },
    processData(data) {
      data.forEach((d, i) => {
        if (i === 0) {
          this.titles = d.lifeTimeStats.map((s) => s.key)
        }

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

      this.data = data
      this.loading = false
    }
  }
}
</script>

<style scoped>
table {
  white-space: nowrap;
}
.d-flex {
  display: flex;
}
.justify-between {
  justify-content: space-between;
}
.p-3 {
  padding: 3rem;
}
.mt-3 {
  margin-top: 3rem;
}
.text-center {
  text-align: center;
}
.alert {
  padding: 20px;
  background-color: #f44336;
  color: white;
}

.fade-in {
  animation: fadein 2s;
}

@keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
