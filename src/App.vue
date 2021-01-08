<template>
  <div id="app" >
      <myComponent></myComponent>
      <Home msg="Bijenkastenoverzicht"/>
  </div>
</template>

<script>
import Home from './components/Home.vue'

export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style>
img{
  width:150px;
}


</style>
