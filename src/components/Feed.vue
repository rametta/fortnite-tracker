<template>
  <div>
    <v-layout column>
      <h2 class="mb-3">Feed</h2>
      <v-flex>

        <v-card v-for="match in feed" :key="match.id" class="mb-3">
          <v-card-title>
            <v-layout column>
              <div>
                {{match.user}} {{match.top1 ? 'won' : 'played'}} a {{match.mode}} match with <span :class="{'red--text': !match.kills}">{{match.kills}}</span> {{match.kills !== 1 ? 'kills' : 'kill'}} {{match.top1 ? '! 🎉' : ''}}
              </div>
              <div>
                <small class="grey--text">
                  {{match.fromNow}}
                </small>
              </div>
            </v-layout>
          </v-card-title>
        </v-card>

      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import firebase from 'firebase'
import moment from 'moment'

const db = firebase.database()

const modeMap = {
  p10: 'duo',
  p9: 'squad',
  p2: 'solo'
}

export default {
  data: () => ({
    feed: []
  }),
  created() {
    db.ref('/data').once('value', snap => {
      const val = snap.val()
      const users = Object.keys(val)

      const matches = users.map(user =>
        val[user].recentMatches.map(match => {
          match.user = user
          match.fromNow = moment.utc(match.dateCollected).fromNow()
          match.unix = moment(match.dateCollected).unix()
          match.mode = modeMap[match.playlist]
          return match
        })
      )

      const flattenMatches = [].concat.apply([], matches)
      const sortedMatches = flattenMatches.sort((a, b) => b.unix - a.unix)
      this.feed = sortedMatches
    })
  }
}
</script>

<style scoped>

</style>
