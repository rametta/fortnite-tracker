<template>
  <div>

    <v-layout>
      <v-flex class="mx-3">
        <div class="player-code">{{$route.params.id}}</div>
      </v-flex>
    </v-layout>

    <div v-for="date in groupMatchesDates" :key="date">
      <v-layout>
        <v-flex class="ma-3">

          <h3>{{date}}</h3>

          <v-card>
            <v-card-title>

              <v-layout row wrap justify-space-between>
                <v-flex xl2 lg2 md2 sm4 xs6 class="pa-1 text-xs-center">
                  <div class="big grey--text text--lighten-1">Matches</div>
                  <div class="big-num">{{groupedMatchesSummaries[date].m}}</div>
                </v-flex>
                <v-flex xl2 lg2 md2 sm4 xs6 class="pa-1 text-xs-center">
                  <h4 class="big grey--text text--lighten-1">Kills</h4>
                  <div class="big-num">{{groupedMatchesSummaries[date].k}}</div>
                </v-flex>
                <v-flex xl2 lg2 md2 sm4 xs6 class="pa-1 text-xs-center">
                  <h4 class="big grey--text text--lighten-1">KPM</h4>
                  <div class="big-num">{{groupedMatchesSummaries[date].kpm}}</div>
                </v-flex>
                <v-flex xl2 lg2 md2 sm4 xs6 class="pa-1 text-xs-center">
                  <h4 class="big grey--text text--lighten-1">Wins</h4>
                  <div class="big-num">{{groupedMatchesSummaries[date].t1}}</div>
                </v-flex>
                <v-flex xl2 lg2 md2 sm4 xs6 class="pa-1 text-xs-center">
                  <h4 class="big grey--text text--lighten-1">Top 3</h4>
                  <div class="big-num">{{groupedMatchesSummaries[date].t3}}</div>
                </v-flex>
                <v-flex xl2 lg2 md2 sm4 xs6 class="pa-1 text-xs-center">
                  <h4 class="big grey--text text--lighten-1">Top 6</h4>
                  <div class="big-num">{{groupedMatchesSummaries[date].t6}}</div>
                </v-flex>
              </v-layout>

            </v-card-title>
          </v-card>

        </v-flex>
      </v-layout>

      <v-layout row wrap>
        <v-flex xl3 lg4 md6 xs12 v-for="m in groupedMatches[date]" :key="m.id" class="pa-3">
          <v-card :color="m.t1 === 1 ? 'green': ''">
            <v-card-title>

              <v-flex column>
                <v-flex d-flex row v-once class="big">
                  <div>{{getMode(m.p)}}
                    <!-- <div class="text-xs-center">
                      <v-chip small color="blue">Top 3</v-chip>
                    </div> -->
                  </div>
                  <div class="text-xs-right">
                    <v-icon v-if="m.c > 0" color="green accent-3">keyboard_arrow_up</v-icon>
                    <v-icon v-if="m.c < 0" color="red">keyboard_arrow_down</v-icon>
                    {{cleanChange(m.c)}}
                  </div>
                </v-flex>
                <v-flex d-flex row>
                  <div :class="{'red--text': !m.k}">{{m.k}} {{m.k === 1 ? 'kill' : 'kills'}}</div>
                  <div class="text-xs-right">+{{m.s}} Score</div>
                </v-flex>
                <small :class="m.t1 === 1 ? 'white--text' : 'grey--text'" v-once>{{getDate(m.d)}}</small>
              </v-flex>

            </v-card-title>
          </v-card>
        </v-flex>
      </v-layout>
    </div>

    <v-flex class="mt-3 mx-3">
      <v-card>
        <v-card-text>

          <line-chart :chart-data="chartData" :options="options" />

        </v-card-text>
      </v-card>
    </v-flex>

  </div>
</template>

<script>
import { mapState } from 'vuex'
import firebase from 'firebase'
import LineChart from './LineChart'

const db = firebase.database()

export default {
  name: 'player',
  components: { LineChart },
  data: () => ({
    chartData: {},
    options: { responsive: true, maintainAspectRatio: false },
    groupMatchesDates: [],
    groupedMatches: {},
    groupedMatchesSummaries: {}
  }),
  created() {
    db
      .ref(`/matches/${this.$route.params.id}`)
      .orderByChild('d')
      .limitToLast(30)
      .once('value', snap => {
        const matchesMap = snap.val()
        const keys = Object.keys(matchesMap)
        const matches = keys.map(key => matchesMap[key]).reverse()

        // Group matches by date
        matches.forEach(match => {
          const d = new Date(match.d).toLocaleDateString()
          const shortD = d.substring(0, 10)

          if (this.groupedMatches[shortD] === undefined) {
            this.groupMatchesDates.push(shortD)
            this.groupedMatches[shortD] = []
          }
          this.groupedMatches[shortD].push(match)
        })

        // Grouped matches summaries
        this.groupMatchesDates.forEach(date => {
          const groupSummary = { m: 0, k: 0, kpm: 0, t1: 0, t3: 0, t6: 0 }
          this.groupedMatches[date].forEach(match => {
            groupSummary.m++
            groupSummary.k += match.k ? match.k : 0
            groupSummary.t1 += match.t1 ? match.t1 : 0
            groupSummary.t3 += match.t3 ? match.t3 : 0
            groupSummary.t6 += match.t6 ? match.t6 : 0
          })
          groupSummary.kpm = this.getKPM(groupSummary.k, groupSummary.m)
          this.groupedMatchesSummaries[date] = groupSummary
        })

        // Chart
        const labels = matches
          .map(match => new Date(match.d).toLocaleDateString())
          .reverse()

        const dsKills = {
          label: 'Kills',
          backgroundColor: '#2196F3',
          data: matches.map(match => match.k).reverse()
        }

        const datasets = [dsKills]

        this.$set(this, 'chartData', { labels, datasets })
      })
  },
  computed: {
    ...mapState({
      modes: state => state.modes,
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
      if (!kills) return 0
      return (kills / (matches || 1)).toFixed(2)
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
