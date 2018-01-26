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
        <h3>Lifetime</h3>
        <div v-fixedFirstCol class="table-responsive mt-3">
          <table class="table table-sm table-bordered">
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
                <td class="fixed-col">
                  <router-link :to="{ name: 'player', params: { id: d.epicUserHandle }}">{{d.epicUserHandle}}</router-link>
                </td>
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
            <table class="table table-sm table-bordered">
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

    </div>

  </div>
</template>

<script>
import Loader from './Loader'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Home',
  components: { Loader },
  data() {
    return {}
  },
  created() {
    this.refreshData()
  },
  methods: {
    ...mapActions(['refreshData'])
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
  },
  computed: {
    ...mapState({
      modes: (state) => state.modes,
      data: (state) => state.data,
      titles: (state) => state.titles,
      loading: (state) => state.loading,
      error: (state) => state.error
    })
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
</style>
