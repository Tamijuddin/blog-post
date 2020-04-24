<template>
  <div id="app">
    <app-header></app-header>
   <router-view></router-view>
  </div>
</template>

<script>
/*import Blog from './components/Blog.vue'
import BlogList from './components/BlogList.vue'*/
import header from './components/header.vue'

export default {
  name: 'App',
  components: {
    'app-header':header
    /*Blog,
    #BlogList*/
  }
}
</script>

<style>
#app {
  font-family:'Courier New', Courier, monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin:20px 50px;
 /* text-align: center;
  color: #2c3e50;
  margin-top: 10px;*/
}
</style>
