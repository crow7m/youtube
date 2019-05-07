<template>
  <div id="app">
    <div id="nav">
      <page-header></page-header>
      <router-link to="/">Video List</router-link>
    </div>
    <div class="page-content">
      <router-view/>
    </div>

  </div>
</template>
<script>
  import pageHeader from './components/pageParts/pageHeader.vue';
  export default {
    components: {
      pageHeader,
    }
  }
</script>
<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.page-content{
  flex: 1 1 auto;
  position: relative;/* need this to position inner content */
  overflow-y: auto;
  margin-top: 48px;
}
#nav {
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
