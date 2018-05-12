<template>
  <div>

    <v-layout justify-space-between row class="mx-3">
      <div class="player-code">{{$route.params.id}}</div>

      <v-menu offset-y>
        <v-btn color="primary" dark slot="activator">{{routes[$route.name]}} <v-icon right>arrow_drop_down</v-icon></v-btn>
        <v-list v-if="$route.params.id">
          <v-list-tile :to="{ name: 'playerDaily', params: { id: $route.params.id } }" tag="div" @click="active = 'Daily'">
            <v-list-tile-title class="white--text">Daily</v-list-tile-title>
          </v-list-tile>
          <v-list-tile :to="{ name: 'playerWeekly', params: { id: $route.params.id } }" tag="div" @click="active = 'Weekly'">
            <v-list-tile-title class="white--text">Weekly</v-list-tile-title>
          </v-list-tile>
          <v-list-tile :to="{ name: 'playerBests', params: { id: $route.params.id } }" tag="div" @click="active = 'Bests'">
            <v-list-tile-title class="white--text">Bests</v-list-tile-title>
          </v-list-tile>
          <v-list-tile :to="{ name: 'playerCharts', params: { id: $route.params.id } }" tag="div" @click="active = 'Charts'">
            <v-list-tile-title class="white--text">Charts</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-layout>

    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'player',
  data: () => ({
    routes: {
      playerDaily: 'Daily',
      playerWeekly: 'Weekly',
      playerBests: 'Bests',
      playerCharts: 'Charts'
    }
  })
}
</script>

<style scoped>
.player-code {
  font-size: 2em;
}
</style>
