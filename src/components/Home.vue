<template>

  <v-container fluid fill-height>
    <v-layout v-if="loading" justify-center align-center>

      <v-alert type="error" :value="error">
        There was an error trying to get your stats. Please wait 20 seconds and try again. If you don't wait 20 seconds - I will find you...
      </v-alert>

      <v-progress-circular v-if="!error" indeterminate :size="70" :width="7"></v-progress-circular>
    </v-layout>
    <v-layout v-if="!loading" row wrap>

      <v-flex xs12>
        <h3 class="pb-2">Lifetime</h3>
        <v-data-table
          :headers="lifetime.fields"
          :items="lifetime.data"
          :pagination.sync="paginationLifeTime"
          hide-actions
          class="elevation-2"
        >
          <template slot="items" slot-scope="props">
            <td v-for="field in lifetime.fields" :key="field.value">
              {{props.item[field.value] ? props.item[field.value] : '-'}}
            </td>
          </template>
        </v-data-table>
      </v-flex>

      <v-flex xs12 v-for="mode in modes" :key="mode.code" class="mt-3">

        <h3 class="pb-2">{{mode.name}}</h3>

        <v-data-table
          :headers="modeData[mode.code].fields"
          :items="modeData[mode.code].data"
          :pagination.sync="paginationModes"
          hide-actions
          class="elevation-2"
        >
          <template slot="items" slot-scope="props">
            <td v-for="field in modeData[mode.code].fields" :key="field.value">
              {{props.item[field.value] ? props.item[field.value].displayValue : '-'}}
            </td>
          </template>
        </v-data-table>

      </v-flex>

    </v-layout>
  </v-container>

</template>

<script>
import { mapState, mapMutations } from 'vuex'
import firebase from 'firebase'

const db = firebase.database()

export default {
  name: 'Home',
  data: () => ({
    paginationLifeTime: {
      sortBy: 'Wins',
      descending: true
    },
    paginationModes: {
      sortBy: 'Wins',
      descending: true
    }
  }),
  created() {
    this.setLoading(true)
    db.ref('/data').on('value', data => {
      this.setLoading(false)
      const d = data.val()
      const arr = Object.keys(d).map(key => d[key])
      this.updateData({ data: arr })
    })
  },
  methods: {
    ...mapMutations(['updateData', 'setLoading'])
  },
  computed: {
    ...mapState({
      modes: state => state.modes,
      modeData: state => state.modeData,
      lifetime: state => state.lifetime,
      loading: state => state.loading,
      error: state => state.error
    })
  }
}
</script>
