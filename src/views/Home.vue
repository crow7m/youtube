<template>
  <div class="home">
    <videoList msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import videoList from '@/components/videoList.vue'

export default {
  name: 'home',
  components: {
      videoList
  }
}
</script>
