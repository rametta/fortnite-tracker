<template>
  <v-app dark>

    <v-toolbar app fixed :color="color">
      <router-link :to="{name: 'home'}" class="home-link white--text" exact>
        <v-toolbar-title class="ml-0">Victory Squad 🎉</v-toolbar-title>
      </router-link>
      <v-spacer></v-spacer>
      <v-chip @click="like()" :color="chipColor" text-color="white">
        <v-avatar :class="avatarColor">{{likes}}</v-avatar>
        <v-icon>favorite</v-icon>
      </v-chip>
    </v-toolbar>

    <v-content>
      <v-container>
        <transition name="fade">
          <router-view />
        </transition>
      </v-container>
    </v-content>

    <v-card>
      <v-bottom-nav
        app
        fixed
        shift
        :value="true"
        :active.sync="e2"
        :color="color"
      >
        <v-btn dark :to="{name: 'charts'}" exact>
          <span>Charts</span>
          <v-icon>insert_chart</v-icon>
        </v-btn>
        <v-btn dark :to="{name: 'home'}" exact>
          <span>Home</span>
          <v-icon>home</v-icon>
        </v-btn>
        <v-btn dark :to="{name: 'info'}" exact>
          <span>Info</span>
          <v-icon>info</v-icon>
        </v-btn>
      </v-bottom-nav>
    </v-card>

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
  data: () => ({
    e2: 1,
    likes: 0
  }),
  methods: {
    ...mapMutations(['updateData', 'setLoading']),
    like() {
      this.likes++
      db.ref('/meta/likes').set(this.likes)
    }
  },
  computed: {
    ...mapState({
      loading: state => state.loading
    }),
    color() {
      switch (this.$route.name) {
        case 'charts':
          return 'blue darken-4'
        case 'home':
          return 'grey darken-4'
        case 'info':
          return 'teal darken-4'
      }
    },
    avatarColor() {
      switch (this.$route.name) {
        case 'charts':
          return 'blue darken-2'
        case 'home':
          return 'grey darken-2'
        case 'info':
          return 'teal darken-2'
      }
    },
    chipColor() {
      switch (this.$route.name) {
        case 'charts':
          return 'blue darken-3'
        case 'home':
          return 'grey darken-3'
        case 'info':
          return 'teal darken-3'
      }
    }
  },
  created() {
    this.setLoading(true)

    db.ref('/data').on('value', snap => {
      const d = snap.val()
      const arr = Object.keys(d).map(key => d[key])
      this.updateData({ data: arr })
      this.setLoading(false)
    })

    db.ref('/meta/likes').on('value', snap => {
      this.likes = snap.val()
    })
  }
}
</script>

<style>
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

.jason {
  background: #303030;
}
</style>
