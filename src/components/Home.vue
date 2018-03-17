<template>

  <div>
    <v-layout v-if="loading" justify-center align-center>

      <v-alert type="error" :value="error">
        There was an error trying to get your stats. Please wait 20 seconds and try again. If you don't wait 20 seconds - I will find you...
      </v-alert>

      <v-progress-circular v-if="!error" indeterminate :size="70" :width="7"></v-progress-circular>
    </v-layout>
    <v-layout v-if="!loading" column>

      <v-flex>
        <h3 class="pb-2">Lifetime</h3>
        <v-data-table
          :headers="lifetime.fields"
          :items="lifetime.data"
          :custom-sort="lifetimeSort"
          :must-sort="true"
          :pagination.sync="paginationLifetime"
          hide-actions
          class="elevation-2"
        >
          <template slot="items" slot-scope="props">
            <router-link tag="tr" :to="{ name: 'player', params: { id: props.item.user } }">
              <td nowrap v-for="field in lifetime.fields" :key="field.value">
                {{props.item[field.value] ? props.item[field.value] : '-'}}
              </td>
            </router-link>
          </template>
        </v-data-table>
      </v-flex>

      <v-flex v-for="mode in modes" :key="mode.code" class="mt-3">

        <h3 class="pb-2">{{mode.name}}</h3>

        <v-data-table
          :headers="modeData[mode.code].fields"
          :items="modeData[mode.code].data"
          :custom-sort="modeSort"
          :must-sort="true"
          :pagination.sync="paginationModes[mode.code]"
          hide-actions
          class="elevation-2"
        >
          <template slot="items" slot-scope="props">
            <router-link tag="tr" :to="{ name: 'player', params: { id: props.item.user.displayValue } }">
              <td v-for="field in modeData[mode.code].fields" :key="field.value">
                {{props.item[field.value] ? props.item[field.value].displayValue : '-'}}
              </td>
            </router-link>
          </template>
        </v-data-table>

      </v-flex>

    </v-layout>
  </div>

</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Home',
  data: () => ({
    paginationLifetime: {
      sortBy: 'Wins',
      descending: true
    },
    paginationModes: {
      p2: {
        sortBy: 'top1',
        descending: true
      },
      p9: {
        sortBy: 'top1',
        descending: true
      },
      p10: {
        sortBy: 'top1',
        descending: true
      },
      curr_p2: {
        sortBy: 'top1',
        descending: true
      },
      curr_p9: {
        sortBy: 'top1',
        descending: true
      },
      curr_p10: {
        sortBy: 'top1',
        descending: true
      }
    }
  }),
  methods: {
    lifetimeSort(items, index, isDesc) {
      // Don't sort if no column
      if (!index) return items

      // Custom sort for user, alphabetically
      if (index === 'user') {
        if (isDesc) {
          return items.sort((a, b) => {
            const x = a[index].toLowerCase()
            const y = b[index].toLowerCase()
            if (y < x) return -1
            if (y > x) return 1
            return 0
          })
        } else {
          return items.sort((a, b) => {
            const x = a[index].toLowerCase()
            const y = b[index].toLowerCase()
            if (x < y) return -1
            if (x > y) return 1
            return 0
          })
        }
      }

      // All other sorts by numbers
      return isDesc
        ? items.sort((a, b) => b[index] - a[index])
        : items.sort((a, b) => a[index] - b[index])
    },
    modeSort(items, index, isDesc) {
      // Don't sort if no column
      if (!index) return items

      // Custom sort for user, alphabetically
      if (index === 'user') {
        if (isDesc) {
          return items.sort((a, b) => {
            const x = a[index].displayValue.toLowerCase()
            const y = b[index].displayValue.toLowerCase()
            if (y < x) return -1
            if (y > x) return 1
            return 0
          })
        } else {
          return items.sort((a, b) => {
            const x = a[index].displayValue.toLowerCase()
            const y = b[index].displayValue.toLowerCase()
            if (x < y) return -1
            if (x > y) return 1
            return 0
          })
        }
      }

      // All other sorts by numbers
      if (isDesc) {
        return items.sort((a, b) => {
          if (a[index] === undefined || b[index] === undefined) {
            return 0
          }

          if (a[index].valueDec !== undefined) {
            return b[index].valueDec - a[index].valueDec
          } else if (a[index].valueInt !== undefined) {
            return b[index].valueInt - a[index].valueInt
          } else {
            return b[index].value - a[index].value
          }
        })
      }

      return items.sort((a, b) => {
        if (a[index] === undefined || b[index] === undefined) {
          return 0
        }

        if (a[index].valueDec !== undefined) {
          return a[index].valueDec - b[index].valueDec
        } else if (a[index].valueInt !== undefined) {
          return a[index].valueInt - b[index].valueInt
        } else {
          return a[index].value - b[index].value
        }
      })
    }
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
