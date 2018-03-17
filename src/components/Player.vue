<template>
    <div>
      <v-layout>
        <v-flex class="mx-3">
          <div class="player-code">{{$route.params.id}}</div>
          <div>Last 10 matches</div>
        </v-flex>
      </v-layout>
      <v-layout row wrap>
        <v-flex xl3 lg4 md6 xs12 v-for="match in recentMatches[$route.params.id]" :key="match.id" class="pa-3">
          <v-card :color="match.top1 === 1 ? 'green': ''">
            <v-card-title>

              <v-flex column>
                <v-flex d-flex row v-once class="big">
                  <div>{{getMode(match.playlist)}}</div>
                  <div class="text-xs-right">
                    <v-icon v-if="match.trnRatingChange > 0" color="green accent-3">keyboard_arrow_up</v-icon>
                    <v-icon v-if="match.trnRatingChange < 0" color="red">keyboard_arrow_down</v-icon>
                    {{cleanChange(match.trnRatingChange)}}
                  </div>
                </v-flex>
                <v-flex d-flex row>
                  <div>{{match.kills}} Kills</div>
                  <div class="text-xs-right">+{{match.score}} Score</div>
                </v-flex>
                <small :class="match.top1 === 1 ? 'white--text' : 'grey--text'" v-once>{{getDate(match.dateCollected)}}</small>
              </v-flex>

            </v-card-title>
          </v-card>
        </v-flex>
      </v-layout>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'player',
  computed: {
    ...mapState({
      modes: state => state.modes,
      modeData: state => state.modeData,
      lifetime: state => state.lifetime,
      recentMatches: state => state.recentMatches,
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
    }
  }
}
</script>

<style scoped>
.player-code {
  font-size: 1.5em;
}
.big {
  font-size: 1.3em;
}
</style>
