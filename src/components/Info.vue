<template>
  <div>
    <div class="mb-3 grey--text">To be played when exiting the bus...</div>
    <audio controls>
      <source src="static/freefallin.mp3" type="audio/mpeg">
      Your browser does not support the audio element.
    </audio>
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
