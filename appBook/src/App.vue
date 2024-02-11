<template>
  <div> 
      <navBar></navBar>

      <router-view></router-view>
      
      

     
  </div>
</template>

<script>
import NavbarArea from './components/NavbarArea.vue';
import InputArea from './components/InputArea.vue'

  export default {
      components: {
        navBar : NavbarArea,
        inputArea : InputArea,
  
      }
  }
</script>

<style lang="scss" scoped>

</style>