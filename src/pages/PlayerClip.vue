<template>
  <div>
    <video ref="video" class="full-width-100" controls autoplay>
      Your browser does not support HTML5 video.
    </video>
  </div>
</template>

<script>
import firebase from 'firebase'
const db = firebase.database()

export default {
  name: 'playerClip',
  data: () => ({
    clip: {}
  }),
  mounted() {
    db
      .ref(`/clips/${this.$route.params.playerId}/${this.$route.params.clipId}`)
      .once('value', snap => {
        const clip = snap.val()
        console.log(clip.video)
        this.$refs.video.src = clip.video
        this.$refs.video.play()
      })
  }
}
</script>

<style scoped>
.full-width-100 {
  width: 100%;
}
</style>
