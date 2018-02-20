<template>
  <div class="d-flex flex-column justify-content-between h-100">

    <div>
      <nav class="navbar navbar-dark bg-primary justify-content-between">
        <router-link to="/" class="navbar-brand">Victory Squad 🎉</router-link>
        <button type="button" class="btn btn-light" @click="refreshData()">
          <div :class="{ 'fa-spin': loading }">
            <i class="fas fa-sync"></i>
          </div>
        </button>
      </nav>
    </div>

    <div class="content">
      <router-view />
    </div>

    <div class="text-center p-3 mt-3 bg-light">
      Made with 💖 by <a href="http://rametta.org" target="_blank">Jason</a>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'App',
  methods: {
    ...mapActions(['refreshData'])
  },
  computed: {
    ...mapState({
      loading: state => state.loading
    })
  }
}
</script>

<style>
html {
  height: 100%;
}
body {
  margin: 0;
  height: 100%;
}
.content {
  flex-grow: 1;
}
.hand {
  cursor: pointer;
}
</style>
