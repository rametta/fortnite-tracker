<template>
  <div class="mt-3 grey--text">Made with {{getEmote}} by <a href="http://rametta.org">Jason</a></div>
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
