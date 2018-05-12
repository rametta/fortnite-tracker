<template>
  <div>
    <div v-for="(value, key) in weekly" :key="key" class="ma-3">
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
  </div>
</template>

<script>
import firebase from 'firebase'

const db = firebase.database()

export default {
  name: 'playerWeekly',
  data: () => ({
    weeklyTableHeaders: [
      { text: 'Week', value: 'week' },
      { text: 'Kills', value: 'k', align: 'right' },
      { text: 'Kills/Match', value: 'kpm', align: 'right' },
      { text: 'Matches', value: 'mp', align: 'right' },
      { text: 'Win %', value: 'wp', align: 'right' },
      { text: 'Score', value: 's', align: 'right' },
      { text: 'Wins', value: 't1', align: 'right' },
      { text: 'Top 3', value: 't3', align: 'right' },
      { text: 'Top 5', value: 't5', align: 'right' },
      { text: 'Top 6', value: 't6', align: 'right' },
      { text: 'Top 10', value: 't10', align: 'right' },
      { text: 'Top 12', value: 't12', align: 'right' },
      { text: 'Top 25', value: 't25', align: 'right' },
      { text: 'Regression', value: 'r', align: 'right' }
    ],
    weekly: [],
    pagination: {
      sortBy: 'week',
      descending: true
    }
  }),
  created() {
    db.ref(`/weeklySummary/${this.$route.params.id}`).once('value', snap => { this.weekly = snap.val() })
  },
  methods: {
    getItems(weeks) {
      return Object.keys(weeks).map(week => {
        const w = weeks[week]
        w.week = week
        return w
      })
    }
  }
}
</script>
