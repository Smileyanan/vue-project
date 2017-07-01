<template>
  <div class="footer" :style="{background:$store.state.color}">
      <ul>
        <li><router-link to="/movie">电影</router-link></li>
        <li><router-link to="/music">音乐</router-link></li>
        <li><router-link to="/book">书籍</router-link></li>
        <li><router-link to="/photo">图片</router-link></li>
      </ul>
  </div>
</template>

<script>
  export default {
    name: 'hello',
    data () {
      return {

      }
    },
//    methods:{
//        changeTitle(title,color){
//            this.$store.dispatch('changeTitle',title);
//            this.$store.dispatch('changeColor',color);
//        }
//    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import"../../assets/css/reset.css";
  .footer{
    color: #fff;
    position: fixed;
    bottom: 0;
    width: 100%;
  }
  .footer ul li{
    height: 1rem;
    flex: 1;
    text-align: center;
    line-height: 1rem;
    font-size: 14px;
    float: left;
  }
  .footer ul{
    height: 1rem;
    display: flex;
  }
  .footer a{
    color: #cccccc;
    outline: none;
  }
  .footer a.router-link-active{
    color: #fff;
  }
</style>
