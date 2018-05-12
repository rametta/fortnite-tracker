<template>
  <div>
    <v-flex class="ma-3">
      <v-card>
        <v-card-text>

          <h3>Last 30 Matches</h3>
          <line-chart :chart-data="dailyChartData" :options="options" />

        </v-card-text>
      </v-card>
    </v-flex>

    <v-flex class="ma-3">
      <v-card>
        <v-card-text>

          <h3>Win % by week</h3>
          <line-chart :chart-data="weeklyChartData" :options="options" />

        </v-card-text>
      </v-card>
    </v-flex>
  </div>
</template>

<script>
import firebase from 'firebase'
import LineChart from '@/components/LineChart'
const db = firebase.database()

export default {
  name: 'playerCharts',
  components: { LineChart },
  data: () => ({
    weeklyChartData: {},
    dailyChartData: {},
    options: { responsive: true, maintainAspectRatio: false }
  }),
  created() {
    // Weekly
    db.ref(`/weeklySummary/${this.$route.params.id}`).once('value', snap => {
      const val = snap.val()
      const years = Object.keys(val)
      const weeks = years.map(year => ({ year, weeks: Object.keys(val[year]) }))

      const labels = [].concat(
        ...weeks.map(obj => obj.weeks.map(week => `${obj.year}.${week}`))
      )

      const data = [].concat(
        ...years.map(year =>
          Object.keys(val[year]).map(week =>
            parseFloat(val[year][week]['wp'] * 100).toFixed(2)
          )
        )
      )

      const datasets = [
        {
          label: 'Win %',
          backgroundColor: '#f4424e',
          data
        }
      ]

      this.$set(this, 'weeklyChartData', { labels, datasets })
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

        const labels = matches
          .map(match => new Date(match.d).toLocaleDateString())
          .reverse()

        const dsKills = {
          label: 'Kills',
          backgroundColor: '#2196F3',
          data: matches.map(match => match.k).reverse()
        }

        const datasets = [dsKills]

        this.$set(this, 'dailyChartData', { labels, datasets })
      })
  }
}
</script>
