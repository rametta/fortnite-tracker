<template>
  <div>

    <v-layout justify-space-between row class="mx-3">
      <div class="player-code">{{$route.params.id}}</div>

      <v-menu offset-y>
        <v-btn color="primary" dark slot="activator">{{routes[$route.name]}} <v-icon right>arrow_drop_down</v-icon></v-btn>
        <v-list v-if="$route.params.id">
          <v-list-tile :to="{ name: 'playerXbox', params: { id: $route.params.id } }" tag="div">
            <v-list-tile-title class="white--text">Xbox</v-list-tile-title>
          </v-list-tile>
          <v-list-tile :to="{ name: 'playerPC', params: { id: $route.params.id } }" tag="div">
            <v-list-tile-title class="white--text">PC</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-layout>

    <transition name="fade">
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  name: 'player',
  data: () => ({
    routes: {
      playerXbox: 'Xbox',
      playerPC: 'PC'
    }
  })
}
</script>

<style scoped>
.player-code {
  font-size: 2em;
}
</style>
