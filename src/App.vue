<template>
  <div class="">
    <Header></Header>
    <!-- 路由组件出口 -->
    <router-view></router-view>
    <!-- 在home/search显示，在登录注册隐藏 -->
    <Footer v-show="$route.meta.show"></Footer>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
export default {
  name: "",
  components: {
    Header,
    Footer
  },
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {},
};
</script>
<style lang='scss' scoped>
</style>