<template>
  <v-app dark>

    <v-toolbar app fixed>
      <router-link :to="{name: 'home'}" class="home-link white--text">
        <v-toolbar-title>Victory Squad 🎉</v-toolbar-title>
      </router-link>
    </v-toolbar>

    <v-content>
      <v-container fluid>
        <transition name="fade">
          <router-view />
        </transition>
      </v-container>
    </v-content>

    <v-footer app fixed>
      <div class="vic-footer">
        Made with 🥩 by <a href="http://rametta.org" target="_blank">Jason</a>
      </div>
    </v-footer>

  </v-app>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
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

const app = firebase.initializeApp(config)
const db = app.database()

export default {
  name: 'App',
  methods: {
    ...mapMutations(['updateData', 'setLoading'])
  },
  computed: {
    ...mapState({
      loading: state => state.loading
    })
  },
  created() {
    this.setLoading(true)
    db.ref('/data').on('value', data => {
      this.setLoading(false)
      const d = data.val()
      const arr = Object.keys(d).map(key => d[key])
      this.updateData({ data: arr })
    })
  }
}
</script>

<style>
.vic-footer {
  text-align: center;
  width: 100%;
}
.home-link {
  text-decoration: none;
}

.fade-enter-active,
.fade-leave-active {
  transition-property: opacity;
  transition-duration: 0.25s;
}

.fade-enter-active {
  transition-delay: 0.25s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
