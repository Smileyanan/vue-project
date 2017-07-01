<template>
  <div class="music-list">
    <common-header></common-header>
    <a-player :music="musicList" :narrow="false" :autoplay="true" v-if="isShow" :showlrc="3" theme="#e6d0b2"
    listmaxheight="513px" mode="random"></a-player>
    <common-footer></common-footer>
  </div>
</template>

<script>
  import CommonHeader from '../common/CommonHeader'
  import CommonFooter from '../common/CommonFooter'
  import Axios from 'axios'
  import APlayer from 'vue-aplayer'

  export default {
    data () {
      return {
        musicData:[],
        musicList:[],
        isShow:false
      }
    },
    components:{
      CommonHeader,
      CommonFooter,
      APlayer
    },
    mounted:function(){
      this.$store.dispatch('changeTitle',['music','rgb(0, 150, 136)','<']);
      Axios.get('/static/music-data.json').then((res)=>{
        this.musicData = res.data.musicData;

        for(var i=0; i<this.musicData.length; i++){
            var obj = {};
            obj.title = this.musicData[i].title;
            obj.author = this.musicData[i].author;
            obj.url = this.musicData[i].src;
            obj.pic = this.musicData[i].musicImgSrc;
            obj.lrc = '/static/'+this.musicData[i].lrc;

            this.musicList.push(obj);
        }
        this.isShow = true;
      });
    }
  }
</script>
<style scoped>
    .aplayer{
      margin-top: 1rem;
    }


</style>
