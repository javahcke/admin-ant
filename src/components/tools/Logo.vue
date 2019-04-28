<template>
  <div class="logo">
    <router-link :to="{name:'dashboard'}">
      <!-- <LogoSvg alt="logo" />
      <h1 v-if="showTitle">{{ title }}1</h1> -->
      <!-- <h1 style="height: 100px;display: inline-block;width: 100%;"> -->
        <img style="width:30px;" src="@/assets/x-logo.png" alt="">
        <img style="width:165px;" src="@/assets/logo1.png" alt="">
      <!-- </h1> -->
    </router-link>
  </div>
</template>

<script>
import LogoSvg from '@/assets/logo.svg?inline'  

export default {
  name: 'Logo',
  components: {
    LogoSvg
  },
  props: {
    title: {
      type: String,
      default: 'Ant Design Pro',
      required: false
    },
    showTitle: {
      type: Boolean,
      default: true,
      required: false
    }
  }
}
</script>
<style>
h1{
  
}
</style>

