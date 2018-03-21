<template>
  <div>
    <div class="mb-3 grey--text">To be played when exiting the bus...</div>
    <iframe class="vid" src="https://www.youtube.com/embed/ipanM9TwPeU?rel=0&amp;start=61" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    <div class="mt-3 grey--text">Made with {{getEmote}} by <a href="http://rametta.org">Jason</a></div>
  </div>
</template>

<script>
export default {
  data: () => ({
    emojis: [
      '🍺',
      '🍓',
      '🥚',
      '🥘',
      '🍌',
      '🍗',
      '🍟',
      '🍊',
      '🥐',
      '🥜',
      '🍕',
      '🍔',
      '🍪',
      '🥤',
      '🍿',
      '🥧',
      '🍞',
      '🍳',
      '☕️',
      '🍩',
      '🍉'
    ]
  }),
  computed: {
    getEmote() {
      return this.emojis[Math.floor(Math.random() * this.emojis.length)]
    }
  }
}
</script>

<style scoped>
.vid {
  width: 100%;
  height: 300px;
}
</style>
