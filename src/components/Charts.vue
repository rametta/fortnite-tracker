<template>
  <div>
    <v-card>
      <v-card-title>
        <h3>Lifetime Kills</h3>
      </v-card-title>
      <v-card-text>

        <v-flex>
          <doughnut-chart :chart-data="chartData" :options="options"/>
        </v-flex>

      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import DoughnutChart from './DoughnutChart'
import firebase from 'firebase'
const db = firebase.database()

export default {
  components: { DoughnutChart },
  data: () => ({
    chartData: {
      labels: [], // player names
      datasets: [] // player datasets
    },
    options: { responsive: true, maintainAspectRatio: false },
    colors: [
      '#2196F3',
      '#FF5722',
      '#00E676',
      '#1A237E',
      '#F50057',
      '#E1BEE7',
      '#BBDEFB',
      '#00B8D4',
      '#4CAF50',
      '#795548',
      '#607D8B'
    ]
  }),
  created() {
    db.ref('/data').once('value', snap => {
      const data = snap.val()
      const usernames = Object.keys(data)

      const kills = usernames.map(username => {
        const killsMap = data[username].lifeTimeStats.find(
          x => x.key === 'Kills'
        )
        if (killsMap) return killsMap.value
        return 0
      })

      const dsKills = {
        label: 'Kills',
        backgroundColor: this.colors,
        data: kills
      }

      this.chartData = { labels: usernames, datasets: [dsKills] }
    })
  }
}
</script>
