<template>
  <div>
    <video ref="video" class="full-width-100" controls autoplay>
      Your browser does not support HTML5 video.
    </video>
    <v-progress-linear v-if="loading" :indeterminate="true"></v-progress-linear>
  </div>
</template>

<script>
import firebase from 'firebase'
const db = firebase.database()

export default {
  name: 'playerClip',
  data: () => ({
    loading: true
  }),
  mounted() {
    db
      .ref(
        `/clips/${this.$route.params.playerId.toLowerCase()}/${
          this.$route.params.clipId
        }`
      )
      .once('value', (snap) => {
        const clip = snap.val()
        const video = this.$refs.video
        video.src = clip.video
        video.addEventListener(
          'loadeddata',
          () => {
            video.play()
            this.loading = false
          },
          false
        )
        video.load()
      })
  }
}
</script>

<style scoped>
.full-width-100 {
  width: 100%;
}
</style>
