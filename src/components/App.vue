<template>
  <div id="app">
    <notifications position="bottom left" width="500px"/>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style>
  .bg-pink{
    background-color: #ffd1dc;
  }
  .white-text{
    color: white;
    text-shadow: 2px 2px 15px #ff003d;
  }
  body{
    font-family: 'Courier New', monospace;
  }
  a{
    text-decoration: none;
  }
  .vue-notification{
    font-size: 20px;
    border-radius: 25px;
  }
</style>
