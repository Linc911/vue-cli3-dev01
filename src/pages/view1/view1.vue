<template>
  <div>
    <div>view1====={{data}}==={{cData}}</div>
     <dx-button :text='data' @click="updateStore"/>
    <div id="nav">
      <router-link to="/">Home11</router-link>|
      <router-link to="/about">About22</router-link>
    </div>
    <router-view/>
  </div>
</template>


 
<script>
import "devextreme/dist/css/dx.common.css";
import "devextreme/dist/css/dx.light.css";
import DxButton from 'devextreme-vue/button';
import HelloWorld from "./../../components/button-example.vue";
export default {
  name: "view1",
  data() {
    console.log(this.$store);
    return {
      data: this.$store.state.name, // 将 URL 地址中传递过来的 Id值，挂载到 data上，方便以后调用
      newsinfo: {} // 新闻对象
    };
  },
  methods:{
      updateStore(){
          console.log("click")
          this.$store.commit("resetName","hwn"+ Math.random())
      }
  },
  computed:{
      cData(){
          return this.$store.state.name + "oo" 
      }
  },
  components: {
    HelloWorld,
    DxButton
  }
};
</script>

<style scoped>
</style>