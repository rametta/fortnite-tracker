<template>
  <div>

    <div v-if="loading">

      <div class="alert alert-danger mt-3" role="alert" v-if="error">
        <strong>Error!</strong> There was an error trying to get your stats. Please wait 20 seconds and try again. If you don't wait 20 seconds - I will find you...
      </div>

      <Loader v-if="!error"/>
    </div>

    <div class="fade-in mt-3" v-if="!loading">

      <div class="container-fluid">
        <div class="d-flex justify-content-between">
          <h3>Lifetime</h3>
          <button class="btn btn-primary" @click="refresh()">Refresh</button>
        </div>

        <div v-fixedFirstCol class="table-responsive mt-3">
          <table class="table table-sm">
            <thead>
                <tr>
                  <th class="fixed-col">User</th>
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
                <td class="fixed-col">{{d.epicUserHandle}}</td>
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
        </div>

        <div class="mt-3" v-for="mode in modes" :key="mode.code">
          <h3>{{mode.name}}</h3>
          <div v-fixedFirstCol class="table-responsive mt-3">
            <table class="table table-sm">
              <thead>
                <tr>
                  <th class="fixed-col">User</th>
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
                  <td class="fixed-col">{{d.epicUserHandle}}</td>
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
        </div>
      </div>

      <div class="text-center p-3 mt-3 footer">
        Made with 💖 by <a href="http://rametta.org" target="_blank">Jason</a>
      </div>

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
  },
  directives: {
    fixedFirstCol: {
      inserted(el) {
        const elems = el.getElementsByClassName('fixed-col')

        el.addEventListener('scroll', (e) => {
          for (let i = 0; i < elems.length; i++) {
            elems[i].style.transform = `translateX(${e.target.scrollLeft}px)`
          }
        })
      }
    }
  }
}
</script>

<style scoped>
table {
  white-space: nowrap;
}

.fixed-col {
  background: white;
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

.footer {
  background: #e8e8e8;
}
</style>
