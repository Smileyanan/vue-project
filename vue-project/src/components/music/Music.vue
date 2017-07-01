<template>
  <div class="music">
    <common-header></common-header>
    <div class="list">
      <ul>
        <li v-for="obj in albums" @click="changeTitle(obj.name)">
          <router-link :to="'/music/music-list/'+obj.id"><img :src="obj.bg" alt=""></router-link>
        </li>
      </ul>
    </div>
    <common-footer></common-footer>
  </div>
</template>

<script>
  import CommonHeader from '../common/CommonHeader'
  import CommonFooter from '../common/CommonFooter'
  import Axios from 'axios'

  export default {
    data () {
      return {
        albums:[]
      }
    },
    components:{
      CommonHeader,
      CommonFooter
    },
    mounted:function(){
      this.$store.dispatch('changeTitle',['music','rgb(0, 150, 136)','<']);
      Axios.get('../../../static/musiclist.json').then((res)=>{
          this.albums = res.data.albums;
          console.log(this.albums);
      });
    },
    methods:{
        changeTitle(name){
          this.$store.dispatch('changeTitle',[name,'rgb(0, 150, 136)','<']);
        }
    }
  }
</script>
<style scoped>
  .list{
      margin-top: 1rem;
      margin-bottom: 1rem;
  }
  .list ul li{
    width: 50%;
    float: left;
  }
  .list ul li img{
    width: 100%;
    height: 100%;
  }


</style>
