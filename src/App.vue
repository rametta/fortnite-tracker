<template>
  <v-app dark>

    <v-toolbar app fixed>
      <v-toolbar-title>Victory Squad 🎉</v-toolbar-title>
    </v-toolbar>

    <v-content>
      <router-view />
    </v-content>

    <v-footer app fixed>
      <div class="vic-footer">
        Made with 💖 by <a href="http://rametta.org" target="_blank">Jason</a>
      </div>
    </v-footer>

  </v-app>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import firebase from 'firebase'

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyBf2jmiNQyaG4Br9vq1CU3-VCBd2qMe-Yo',
  authDomain: 'fortnite-ingest.firebaseapp.com',
  databaseURL: 'https://fortnite-ingest.firebaseio.com',
  projectId: 'fortnite-ingest',
  storageBucket: 'fortnite-ingest.appspot.com',
  messagingSenderId: '11639620297'
}

firebase.initializeApp(config)

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
.vic-footer {
  text-align: center;
  width: 100%;
}
</style>
