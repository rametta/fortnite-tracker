<template>
  <div>
    <v-card class="ma-3" v-if="bests && bests.kills">
      <v-card-title>
        <v-layout justify-space-between>
          <h1>Kills</h1>
          <h1>{{bests.kills.k}}</h1>
        </v-layout>
      </v-card-title>
      <small class="grey--text pl-3">{{getDate(bests.kills.d)}}</small>
    </v-card>
  </div>
</template>

<script>
import firebase from 'firebase'
const db = firebase.database()

export default {
  name: 'playerBests',
  data: () => ({
    bests: {}
  }),
  created() {
    db.ref(`/bests/${this.$route.params.id}`).once('value', snap => { this.bests = snap.val() })
  },
  methods: {
    getDate(dateStr) {
      return new Date(dateStr).toLocaleString()
    }
  }
}
</script>
