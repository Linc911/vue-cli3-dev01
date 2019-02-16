<template>
  <div>
    <h1>index</h1>
    <a href="view1.html" target="_blank">view1</a>
    &nbsp;
    &nbsp;
    &nbsp;
    &nbsp;
    <a href="view2.html" target="_blank">view2</a>
    <div>store-test{{data}}===={{cData}}</div>
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
      console.log(this.$store)
    return {
      data: this.$store.state.name, // 将 URL 地址中传递过来的 Id值，挂载到 data上，方便以后调用
      newsinfo: {} // 新闻对象
    };
  },
  computed:{
      cData(){
          return this.$store.state.name + "oo" 
      }
  },
};
</script>

<style scoped>
</style>