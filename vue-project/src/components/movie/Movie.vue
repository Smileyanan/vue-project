<template>
  <div class="movie">
    <common-header>
      <button :style="{background:$store.state.color}">首页</button>
    </common-header>
    <movie-nav></movie-nav>
    <!--<movie-top250></movie-top250>-->
    <router-view></router-view>
    <common-footer></common-footer>
  </div>
</template>

<script>
  import CommonHeader from '../common/CommonHeader'
  import CommonFooter from '../common/CommonFooter'
  import MovieNav from './MovieNav'
  import MovieTop250 from './MovieTop250'
  export default {
    data () {
      return {

      }
    },
    components:{
        CommonHeader,
        CommonFooter,
        MovieNav,
        MovieTop250
    },
    mounted:function(){
      this.$store.dispatch('changeTitle',['movie','rgb(33, 150, 243)','首页']);
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import"../../assets/css/reset.css";

</style>
