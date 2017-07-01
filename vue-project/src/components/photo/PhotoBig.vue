<template>
  <div class="photo">
    <common-header></common-header>
    <v-touch @swipeleft="next" @swiperight="prev" class="photo-box" :style="bgstyle"></v-touch>
  </div>
</template>

<script>
  import CommonHeader from '../common/CommonHeader'

  export default {
    data () {
      return {
          index:this.$route.params.index
      }
    },
    components:{
      CommonHeader
    },
    mounted:function(){
      this.$store.dispatch('changeTitle',['photo','rgb(63, 81, 181)','<']);
    },
    computed:{
        bgstyle(){
            return{
                background:"url('" + this.$store.state.photoList[this.index].src + "') no-repeat center / contain #000"
            }
        }
    },
    methods:{
        next:function(){
            this.index++;
            if(this.index == this.$store.state.photoList.length){
                this.index = 0;
            }
        },
        prev:function(){
            this.index--;
            if(this.index == -1){
                this.index = this.$store.state.photoList.length - 1;
            }
        }
    }
  }
</script>
<style scoped>
  .photo-box{
    width: 100%;
    position: absolute;
    bottom: 0;
    top: 1rem;
  }
</style>
