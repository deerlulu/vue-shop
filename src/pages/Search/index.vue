<template>
  <div class="">
    <h1>params参数{{keyword}}</h1>
    <h1>query参数{{k}}</h1>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  //路由组件可以传递params
  props: ['keyword', 'k'],
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
};
</script>
<style lang='scss' scoped>
</style>