<template>
  <div id="app">
    <Weather/>
    <Rain />
  </div>
</template>

<script>
import Weather from '@/views/Weather'
import Rain from '@/components/Rain'
export default{
  name: 'App',
  components:{
    Weather,
    Rain
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
