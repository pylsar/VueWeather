<template>
  <div id="app">
    <Weather/>
  </div>
</template>

<script>
import Weather from '@/views/Weather'
export default{
  name: 'App',
  components:{
    Weather
  }
}
</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
}
body{
  background: black;
}
</style>
