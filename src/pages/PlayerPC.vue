<template>
  <div class="mx-3">
    Coming soon...
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'playerDaily',
  data: () => ({
    groupMatchesDates: [],
    groupedMatches: {},
    groupedMatchesSummaries: {}
  }),
  computed: {
    ...mapState({
      modes: state => state.modes
    })
  }
}
</script>

<style scoped>
.big {
  font-size: 1.3em;
}
.big-num {
  font-size: 2.5em;
}
</style>
