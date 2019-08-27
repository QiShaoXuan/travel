<template>
  <div id="app">
    <router-link to="/">
      <el-button :type="isActive('/')">9.28 ~ 10.05 至普吉岛
      </el-button>
    </router-link>
    <router-link to="/mangu">
      <el-button
        :type="isActive('/mangu')">9.28 ~ 10.05 至曼谷
      </el-button>
    </router-link>


    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App',
    methods: {
      isActive(path) {
        return path === this.$route.path ? 'primary' : 'info'
      },
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
aa
