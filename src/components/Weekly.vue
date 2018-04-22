<template>
  <div>
    <h3>Week of {{startWeekDate}} to {{endWeekDate}}</h3>

      <v-data-table
        :headers="headers"
        :items="items"
        item-key="user"
        :must-sort="true"
        :pagination.sync="pagination"
        class="elevation-2"
        no-data-text="No data for this week"
      >
        <template slot="items" slot-scope="props">
          <router-link tag="tr" :to="{ name: 'player', params: { id: props.item.user } }">
            <td>{{ props.item.user }}</td>
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
          </router-link>
        </template>
      </v-data-table>
  </div>
</template>

<script>
import firebase from 'firebase'
import * as moment from 'moment'
const db = firebase.database()

export default {
  data: () => ({
    pagination: {
      sortBy: 'k',
      descending: true
    },
    headers: [
      { text: 'User', value: 'user' },
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
    items: [],
    startWeekDate: moment()
      .week(moment().week())
      .format('ll'),
    endWeekDate: moment()
      .week(moment().week() + 1)
      .format('ll')
  }),
  created() {
    const week = moment().week()
    const year = moment().year()

    db.ref('/weeklySummary').once('value', snap => {
      const data = snap.val()
      const users = Object.keys(data)
      const items = users.filter(user => data[user][year][week]).map(user => {
        const d = data[user][year][week]
        d.user = user
        return d
      })
      this.items = items
    })
  }
}
</script>
