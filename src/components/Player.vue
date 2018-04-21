<template>
  <div>

    <v-layout>
      <v-flex>
        <div class="player-code">{{$route.params.id}}</div>
      </v-flex>
    </v-layout>

    <v-tabs v-model="active" slider-color="yellow" grow>
      <v-tab ripple>Daily</v-tab>
      <v-tab ripple>Weekly</v-tab>
      <v-tab ripple>Bests</v-tab>
      <v-tab ripple>Chart</v-tab>

      <!-- Daily -->
      <v-tab-item>
        <div v-for="date in groupMatchesDates" :key="date">
          <v-layout>
            <v-flex class="mt-3">

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
                      <div>{{getMode(m.p)}} </div>
                      <div class="text-xs-right">
                        <v-icon v-if="m.c > 0" color="green accent-3">keyboard_arrow_up</v-icon>
                        <v-icon v-if="m.c < 0" color="red">keyboard_arrow_down</v-icon>
                        {{cleanChange(m.c)}}
                      </div>
                    </v-flex>
                    <v-flex d-flex row>
                      <div>
                        <span :class="{'red--text': !m.k}">{{m.k}} {{m.k === 1 ? 'kill' : 'kills'}}</span>
                        <span v-if="!m.t1">
                          <small class="yellow--text ml-3" v-if="m.t3">Top 3</small>
                          <small class="yellow--text ml-3" v-if="m.t5">Top 5</small>
                          <small class="yellow--text ml-3" v-if="m.t6 && !m.t3">Top 6</small>
                          <small class="yellow--text ml-3" v-if="m.t10 ">Top 10</small>
                        </span>
                      </div>
                      <div class="text-xs-right">+{{m.s}} Score</div>
                    </v-flex>
                    <small :class="m.t1 === 1 ? 'white--text' : 'grey--text'" v-once>{{getDate(m.d)}}</small>
                  </v-flex>

                </v-card-title>
              </v-card>
            </v-flex>
          </v-layout>
        </div>
      </v-tab-item>

      <!-- Weekly -->
      <v-tab-item>
        <div v-for="(value, key) in weekly" :key="key" class="mt-3">
          <h3>{{key}}</h3>
          <v-data-table
            :headers="weeklyTableHeaders"
            :items="getItems(value)"
            item-key="week"
            :must-sort="true"
            :pagination.sync="pagination"
            class="elevation-2"
          >
            <template slot="items" slot-scope="props">
              <td>{{ props.item.week }}</td>
              <td class="text-xs-right">{{ props.item.k }}</td>
              <td class="text-xs-right">{{ props.item.kpm | toFix(2)}}</td>
              <td class="text-xs-right">{{ props.item.mp }}</td>
              <td class="text-xs-right">{{ props.item.wp | percent}}</td>
              <td class="text-xs-right">{{ props.item.s | number}}</td>
              <td class="text-xs-right">{{ props.item.t1 }}</td>
              <td class="text-xs-right">{{ props.item.t3 }}</td>
              <td class="text-xs-right">{{ props.item.t5 }}</td>
              <td class="text-xs-right">{{ props.item.t6 }}</td>
              <td class="text-xs-right">{{ props.item.t10 }}</td>
              <td class="text-xs-right">{{ props.item.t12 }}</td>
              <td class="text-xs-right">{{ props.item.t25 }}</td>
              <td class="text-xs-right">{{ props.item.lr.gradient }}</td>
            </template>
          </v-data-table>
        </div>
      </v-tab-item>

      <v-tab-item>
        <v-card class="my-3" v-if="bests && bests.kills">
          <v-card-title>
            <v-layout justify-space-between>
              <h1>Kills</h1>
              <h1>{{bests.kills.k}}</h1>
            </v-layout>
          </v-card-title>
          <small class="grey--text pl-3">{{getDate(bests.kills.d)}}</small>
        </v-card>
      </v-tab-item>

      <!-- Chart -->
      <v-tab-item lazy>
        <v-flex class="mt-3">
          <v-card>
            <v-card-text>

              <h3>Last 30 Matches</h3>
              <line-chart :chart-data="chartData" :options="options" />

            </v-card-text>
          </v-card>
        </v-flex>
      </v-tab-item>
    </v-tabs>

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
    active: null,
    chartData: {},
    options: { responsive: true, maintainAspectRatio: false },
    groupMatchesDates: [],
    groupedMatches: {},
    groupedMatchesSummaries: {},
    bests: {},
    weeklyTableHeaders: [
      { text: 'Week', value: 'week' },
      { text: 'Kills', value: 'k' },
      { text: 'Kills/Match', value: 'kpm' },
      { text: 'Matches', value: 'mp' },
      { text: 'Win %', value: 'wp' },
      { text: 'Score', value: 's' },
      { text: 'Wins', value: 't1' },
      { text: 'Top 3', value: 't3' },
      { text: 'Top 5', value: 't5' },
      { text: 'Top 6', value: 't6' },
      { text: 'Top 10', value: 't10' },
      { text: 'Top 12', value: 't12' },
      { text: 'Top 25', value: 't25' },
      { text: 'Regression', value: 'r' }
    ],
    weekly: [],
    pagination: {
      sortBy: 'week',
      descending: true
    }
  }),
  created() {
    // Bests
    db.ref(`/bests/${this.$route.params.id}`).once('value', snap => {
      this.bests = snap.val()
    })

    // Weekly
    db.ref(`/weeklySummary/${this.$route.params.id}`).once('value', snap => {
      this.weekly = snap.val()
    })

    // Daily
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
    },
    getItems(weeks) {
      const weeksArr = Object.keys(weeks).map(week => {
        const w = weeks[week]
        w.week = week
        return w
      })
      return weeksArr
    }
  },
  filters: {
    percent: val => {
      return (val * 100).toFixed(1)
    },
    toFix: (val, decs) => {
      if (!val) {
        return ''
      }
      return parseFloat(val).toFixed(decs)
    },
    number: val => {
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
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
