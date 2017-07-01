<template>
  <div class="top250">
    <div class="movie-list" v-for="movie in movieList">
      <div class="movie-img">
        <img :src="movie.images.small" alt="">
      </div>
      <div class="movie-title">
        <span>{{movie.title}}</span>
        <p><span v-for="genre in movie.genres">{{genre}} </span>
          ({{movie.year}}) (平均{{movie.rating.average}}分)</p>
      </div>
    </div>
  </div>
</template>

<script>
  import Axios from 'axios'
  export default {
    name: 'hello',
    data () {
      return {
        movieList:[]
      }
    },
    mounted:function(){
      Axios.get(API_PROXY+'https://api.douban.com/v2/movie/in_theaters?count=10&start=0')
        .then((res)=> {
          this.movieList = res.data.subjects;
          console.log(this.movieList);
        });
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import"../../assets/css/reset.css";
  .movie-list .movie-img{
    width: 0.8rem;
    height: 0.8rem;
    float: left;
  }
  .movie-list{
    overflow: hidden;
    padding: 0.4rem;
  }
  .movie-list .movie-title{
    float: left;
    border-bottom: 1px solid #ccc;
    width: 4rem;
    margin-left: 0.7rem;
  }
  .movie-list .movie-img img{
    width: 100%;
    height: 100%;
  }
  .top250{
    margin-top: 2rem;
    margin-bottom: 1rem;
  }
</style>
