<template>
  <div class="nav">
    <ul>
      <li><router-link to="/movie/top250">top250</router-link></li>
      <li><router-link to="/movie/hot">正在热映</router-link></li>
      <li><router-link to="/movie/coming">即将上映</router-link></li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'hello',
    data () {
      return {

      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import"../../assets/css/reset.css";
  .nav{
    color: #fff;
    background: rgb(33, 150, 243);
  }
  .nav ul li{
    height: 1rem;
    flex: 1;
    text-align: center;
    line-height: 1rem;
    font-size: 14px;
    float: left;
  }
  .nav ul{
    height: 1rem;
    display: flex;
  }
  .nav{
    position: fixed;
    top: 1rem;
    width: 100%;
  }
  .nav a{
    color: #cccccc;
    outline: none;
  }
  .nav a.router-link-active{
    color: #fff;
  }
</style>
