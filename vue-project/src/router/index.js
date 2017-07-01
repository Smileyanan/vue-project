import Vue from 'vue'
import Router from 'vue-router'
import CommonHeader from '@/components/common/CommonHeader'
import  CommonFooter from '@/components/common/CommonFooter'
import Movie from '@/components/movie/Movie'
import MovieTop250 from '@/components/movie/MovieTop250'
import MovieHot from '@/components/movie/MovieHot'
import MovieComing from '@/components/movie/MovieComing'
import Music from '@/components/music/Music'
import Book from '@/components/book/Book'
import Photo from '@/components/photo/Photo'
import MusicList from '@/components/music/MusicList'
import PhotoBig from '@/components/photo/PhotoBig'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/movie',
      redirect: '/movie/top250'
    },
    {
      path: '/movie',
      component: Movie,
      children:[
        {path: '/movie/top250', component: MovieTop250 },
        {path: '/movie/hot', component: MovieHot },
        {path: '/movie/coming', component: MovieComing }
      ]
    },
    {
      path: '/',
      redirect: '/movie/top250'
    },
    {
      path: '/music/music-list/:id',
      component: MusicList
    },
    {
      path: '/music',
      component: Music
    },
    {
      path: '/photo/photo-big/:index',
      component: PhotoBig
    },
    {
      path: '/book',
      component: Book
    },
    {
      path: '/photo',
      component: Photo
    }
  ]
})
