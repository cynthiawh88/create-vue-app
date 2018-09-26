<template>
  <div class="home">
    <van-button
        type="primary"
        size="large"
    >
      ok
    </van-button>
    <div class="a">
      <b>click</b>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Button } from 'vant'

Vue.use(Button)

export default {
  name: 'home'
}
</script>

<style lang="scss" scoped>
</style>
