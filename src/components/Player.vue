<template>
    <div>

      <v-layout>
        <v-flex class="mx-3">
          <div class="player-code">{{$route.params.id}}</div>
        </v-flex>
      </v-layout>

      <v-layout v-if="recent[$route.params.id]">
        <v-flex class="ma-3">

          <v-card>
            <v-card-title>

              <v-layout row wrap justify-space-between>
                <v-flex xl2 lg2 md2 sm4 xs6 class="pa-1 text-xs-center">
                  <div class="big grey--text text--lighten-1">Matches</div>
                  <div class="big-num">{{recent[$route.params.id].totals.matches}}</div>
                </v-flex>
                <v-flex xl2 lg2 md2 sm4 xs6 class="pa-1 text-xs-center">
                  <h4 class="big grey--text text--lighten-1">Kills</h4>
                  <div class="big-num">{{recent[$route.params.id].totals.kills}}</div>
                </v-flex>
                <v-flex xl2 lg2 md2 sm4 xs6 class="pa-1 text-xs-center">
                  <h4 class="big grey--text text--lighten-1">KPM</h4>
                  <div class="big-num">{{getKPM(recent[$route.params.id].totals.kills, recent[$route.params.id].totals.matches)}}</div>
                </v-flex>
                <v-flex xl2 lg2 md2 sm4 xs6 class="pa-1 text-xs-center">
                  <h4 class="big grey--text text--lighten-1">Wins</h4>
                  <div class="big-num">{{recent[$route.params.id].totals.top1}}</div>
                </v-flex>
                <v-flex xl2 lg2 md2 sm4 xs6 class="pa-1 text-xs-center">
                  <h4 class="big grey--text text--lighten-1">Top 3</h4>
                  <div class="big-num">{{recent[$route.params.id].totals.top3}}</div>
                </v-flex>
                <v-flex xl2 lg2 md2 sm4 xs6 class="pa-1 text-xs-center">
                  <h4 class="big grey--text text--lighten-1">Top 6</h4>
                  <div class="big-num">{{recent[$route.params.id].totals.top6}}</div>
                </v-flex>
              </v-layout>

            </v-card-title>
          </v-card>

        </v-flex>
      </v-layout>

      <v-layout row wrap v-if="recent[$route.params.id]">
        <v-flex xl3 lg4 md6 xs12 v-for="match in recent[$route.params.id].matches" :key="match.id" class="pa-3">
          <v-card :color="match.top1 === 1 ? 'green': ''">
            <v-card-title>

              <v-flex column>
                <v-flex d-flex row v-once class="big">
                  <div>{{getMode(match.playlist)}}</div>
                  <div class="text-xs-right">
                    <v-icon v-if="match.trnRatingChange > 0" color="green accent-3">keyboard_arrow_up</v-icon>
                    <v-icon v-if="match.trnRatingChange < 0" color="red">keyboard_arrow_down</v-icon>
                    {{cleanChange(match.trnRatingChange)}}
                  </div>
                </v-flex>
                <v-flex d-flex row>
                  <div :class="{'red--text': !match.kills}">{{match.kills}} {{match.kills === 1 ? 'kill' : 'kills'}}</div>
                  <div class="text-xs-right">+{{match.score}} Score</div>
                </v-flex>
                <small :class="match.top1 === 1 ? 'white--text' : 'grey--text'" v-once>{{getDate(match.dateCollected)}}</small>
              </v-flex>

            </v-card-title>
          </v-card>
        </v-flex>
      </v-layout>

      <v-layout class="table__overflow">
        <v-flex class="mt-3 mx-3">
          <v-card>
            <v-card-title>

              <v-flex>
                <player-chart :chart-data="chartData" :options="options" />
              </v-flex>

            </v-card-title>
          </v-card>
        </v-flex>
      </v-layout>

    </div>
</template>

<script>
import { mapState } from 'vuex'
import firebase from 'firebase'
import PlayerChart from './PlayerChart'

const db = firebase.database()

export default {
  name: 'player',
  components: { PlayerChart },
  data: () => ({
    chartData: {},
    options: { responsive: true, maintainAspectRatio: false }
  }),
  created() {
    db.ref(`/matches/${this.$route.params.id}`).on('value', snap => {
      const val = snap.val()
      const keys = Object.keys(val)
      const labels = keys.map(key => new Date(val[key].d).toLocaleDateString())

      const dsKills = {
        label: 'Kills',
        backgroundColor: '#2196F3',
        data: keys.map(key => val[key].k)
      }

      const datasets = [dsKills]

      this.$set(this, 'chartData', { labels, datasets })
    })
  },
  computed: {
    ...mapState({
      modes: state => state.modes,
      modeData: state => state.modeData,
      lifetime: state => state.lifetime,
      recent: state => state.recent,
      loading: state => state.loading,
      error: state => state.error
    })
  },
  methods: {
    getMode(code) {
      if (!code) return '-'
      return this.modes.find(m => m.code === code).name
    },
    getDate(dateStr) {
      return new Date(dateStr).toLocaleString()
    },
    cleanChange(change) {
      return change.toFixed(1)
    },
    getKPM(kills, matches) {
      return (kills / matches).toFixed(2)
    }
  }
}
</script>

<style scoped>
.player-code {
  font-size: 2em;
}
.big {
  font-size: 1.3em;
}
.big-num {
  font-size: 2.5em;
}
</style>
