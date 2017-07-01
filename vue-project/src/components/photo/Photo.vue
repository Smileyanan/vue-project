<template>
  <div class="photo">
    <common-header></common-header>
      <ul class="photo-list">
        <li v-for="(photo,index) in $store.state.photoList">
          <router-link :to="'/photo/photo-big/'+index"><img :src="photo.src" alt=""></router-link>
        </li>
      </ul>
    <common-footer></common-footer>
  </div>
</template>

<script>
  import CommonHeader from '../common/CommonHeader'
  import CommonFooter from '../common/CommonFooter'
  import Axios from 'axios'
  import $ from 'jquery'

  export default {
    data () {
      return {
      }
    },
    components:{
      CommonHeader,
      CommonFooter
    },
    mounted:function(){
      this.$store.dispatch('changeTitle',['photo','rgb(63, 81, 181)','<']);
      Axios.get('../../../static/photo-data.json').then((res)=>{
          this.$store.dispatch('photoList',res.data.photoData)
      });
    },
  }
</script>
<style scoped>
    .photo-list li{
      float: left;
      width: 50%;
    }
    .photo-list li img{
      width: 100%;
    }
    .photo-list{
      margin-top: 1rem;
      margin-bottom: 1rem;
      overflow: hidden;
    }
</style>
