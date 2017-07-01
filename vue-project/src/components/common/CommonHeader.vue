<template>
  <div class="header" :style="{background:$store.state.color}">
      <slot>
        <button @click="aa" :style="{background:$store.state.color}">{{$store.state.nav}}</button>
      </slot>
      <h2>{{$store.state.title}}</h2>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {

    }
  },
  methods:{
      aa:function(){
          history.go(-1);
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import"../../assets/css/reset.css";
  .header{
  		display: flex;
  		height: 1rem;
  }
  .header button{
  		width: 1rem;
  		height: 1rem;
  		color: #fff;
  		/*background: rgb(33, 150, 243);*/
  		border: none;
  }
  .header h2{
  		font-size: 30px;
  		flex: 1;
  		text-align: center;
  		line-height: 1rem;
  		height: 1rem;
  		color: #fff;
  		text-indent: -1rem;
  }
  .header{
    position: fixed;
    top: 0;
    width: 100%;
  }
</style>
