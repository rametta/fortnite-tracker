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
import { toMaybe, map, justs, pipe } from 'sanctuary'

const db = firebase.database()

const modeMap = {
  p10: 'duo',
  p9: 'squad',
  p2: 'solo'
}

// recentMatches :: data -> users -> UserMatches[]
const recentMatches = ({ data, users }) =>
  map((user) => ({
    user,
    maybeMatches: toMaybe(data[user].recentMatches)
  }))(users)

// convertMatches :: UserMatches[] -> Maybe[] formattedMatch[]
const convertMatches = map(({ maybeMatches, user }) =>
  map(map(formatMatch(user)))(maybeMatches)
)

// formatMatch :: user -> match -> formattedMatch
const formatMatch = (user) => (match) => ({
  ...match,
  user,
  fromNow: moment.utc(match.dateCollected).fromNow(),
  unix: moment(match.dateCollected).unix(),
  mode: modeMap[match.playlist]
})

// flattenMatches = match[][] -> match[]
const flattenMatches = (matches) => [].concat.apply([], matches)

// sortMatches = match[] -> match[]
const sortMatches = (matches) => matches.sort((a, b) => b.unix - a.unix)

const pipeline = pipe([
  recentMatches,
  convertMatches,
  justs,
  flattenMatches,
  sortMatches
])

export default {
  data: () => ({
    feed: []
  }),
  created() {
    db.ref('/data').once('value', (snap) => {
      const data = snap.val()
      const users = Object.keys(data)

      this.feed = pipeline({
        data,
        users
      })
    })
  }
}
</script>
