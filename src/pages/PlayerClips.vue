<template>
  <div>
    <v-layout v-if="clips" row wrap>
      <v-flex v-for="clip in clips" :key="clip.id" xl3 lg4 md6 xs12 class="pa-3">
        <v-card v-if="$route.params.id" :to="{ name: 'playerClip', params: { clipId: clip.id, playerId: $route.params.id } }">
          <v-card-media
            class="white--text"
            height="200px"
            :src="clip.thumbnail"
          >
          </v-card-media>
          <v-card-title>
            <div>
              <span class="grey--text">{{getDate(clip.date)}}</span><br>
              <span class="grey--text">{{clip.duration}} seconds</span>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
    <div class="pa-3 grey--text" v-if="clips.length === 0">
      No Clips Available
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
import moment from 'moment'
const db = firebase.database()

export default {
  name: 'playerClips',
  data: () => ({
    clips: []
  }),
  created() {
    db
      .ref(`/clips/${this.$route.params.id.toLowerCase()}`)
      .once('value', (snap) => {
        const clipMap = snap.val()
        if (clipMap) {
          this.clips = Object.keys(clipMap)
            .map((key) => clipMap[key])
            .sort((a, b) => moment(b.date).diff(moment(a.date)))
        }
      })
  },
  methods: {
    getDate(dateStr) {
      return moment(dateStr)
        .local()
        .format('ll')
    }
  }
}
</script>
