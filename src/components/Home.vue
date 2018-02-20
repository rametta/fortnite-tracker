<template>
  <div>

    <div v-if="loading">

      <div class="alert alert-danger mt-3" role="alert" v-if="error">
        <strong>Error!</strong> There was an error trying to get your stats. Please wait 20 seconds and try again. If you don't wait 20 seconds - I will find you...
      </div>

      <Loader v-if="!error"/>
    </div>

    <div class="fade-in mt-3" v-if="!loading">

      <div class="container-fluid">
        <h3>Lifetime</h3>
        <div v-fixedFirstCol class="table-responsive mt-3">
          <table class="table table-sm table-bordered">
            <thead>
                <tr>
                  <th class="fixed-col">User</th>
                  <th class="hand" v-for="field in lifetime.fields" :key="field.code" @click="setLifetimeFieldSort({ field: field.code, isDesc: !lifetime.sortDesc })">
                    {{field.name}}
                    <span v-if="lifetime.sortField === field.code">
                      <i class="fas fa-sort-numeric-down"></i>
                      <!-- <i class="fas fa-sort-numeric-up" v-if="!modeData[mode.code].sortDesc"></i> -->
                      <!-- <i class="fas" :class="modeData[mode.code].sortDesc ? 'fa-sort-numeric-down' : 'fa-sort-numeric-up'"></i> -->
                    </span>
                  </th>
                </tr>
            </thead>
            <tbody>
              <tr v-for="u in lifetime.data" :key="u.user">

                <td class="fixed-col">
                  <!-- <router-link :to="{ name: 'player', params: { id: u.user }}">{{u.user}}</router-link> -->
                  {{u.user}}
                </td>

                <td v-for="field in lifetime.fields" :key="field.code">
                  {{u.stats[field.code] ? u.stats[field.code] : '-'}}
                </td>

              </tr>
            </tbody>
          </table>
        </div>

        <div v-for="mode in modes" class="mt-3" :key="mode.code">
          <h3>{{mode.name}}</h3>
          <div v-fixedFirstCol class="table-responsive mt-3">
            <table class="table table-sm table-bordered">
              <thead>
                <tr>
                  <th class="fixed-col">User</th>
                  <th class="hand" v-for="field in modeData[mode.code].fields" :key="field.code" @click="setFieldSort({ mode: mode.code, field: field.code, isDesc: !modeData[mode.code].sortDesc })">
                    {{field.name}}
                    <span v-if="modeData[mode.code].sortField === field.code">
                      <i class="fas fa-sort-numeric-down"></i>
                      <!-- <i class="fas fa-sort-numeric-up" v-if="!modeData[mode.code].sortDesc"></i> -->
                      <!-- <i class="fas" :class="modeData[mode.code].sortDesc ? 'fa-sort-numeric-down' : 'fa-sort-numeric-up'"></i> -->
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="u in modeData[mode.code].data" :key="u.user">
                  <!-- <td class="fixed-col"><router-link :to="{ name: 'player', params: { id: u.user }}">{{u.user}}</router-link></td> -->
                  <td class="fixed-col">{{u.user}}</td>

                  <td v-for="field in modeData[mode.code].fields" :key="field.code">
                    {{u.stats[field.code] ? u.stats[field.code].displayValue : '-'}}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>

    </div>

  </div>
</template>

<script>
import Loader from './Loader'
import { mapState, mapActions, mapMutations } from 'vuex'

export default {
  name: 'Home',
  components: { Loader },
  created() {
    this.refreshData()
  },
  methods: {
    ...mapActions(['refreshData']),
    ...mapMutations(['setFieldSort', 'setLifetimeFieldSort'])
  },
  directives: {
    fixedFirstCol: {
      inserted(el) {
        const elems = el.getElementsByClassName('fixed-col')

        el.addEventListener('scroll', e => {
          for (let i = 0; i < elems.length; i++) {
            elems[i].style.transform = `translateX(${e.target.scrollLeft}px)`
          }
        })
      }
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

<style scoped>
table {
  white-space: nowrap;
}

.fixed-col {
  background: white;
}

.fade-in {
  animation: fadein 2s;
}

@keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
