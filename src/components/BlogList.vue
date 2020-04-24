<template>
  <div id="blogList">
    <h2 style="color:white">List of All Blogs</h2>
    <b-form-input v-model="search" placeholder="Search Blogs"></b-form-input>
    <br>
      <div v-for="blog in filteredBlogs" v-bind:key="blog.id">
        <b-card border-variant="success" header-tag="header" footer-tag="footer">
          <template v-slot:header>
          <h6 class="mb-0">{{blog.title}}</h6>
          </template>
          <b-card-text>{{blog.content}}</b-card-text>
          <b-card-text>Categories:
          <li v-for="category in blog.categories" v-bind:key="category" inline>{{category}}</li>
          </b-card-text>

            <template v-slot:footer align="right">
            <em>Author:{{blog.author}}</em>
             </template>
        </b-card>
        <!--/*<b-card  v-bind:header="blog.title" align='left' v-bind:footer="blog.author" footer-tag="footer" >
          <b-card-text>{{blog.content}}</b-card-text>
          <b-card-text>{{blog.categories}}</b-card-text>
          </b-card>-->
          <br>
      </div>
  </div>
</template>

<script>

import  axios  from 'axios';

export default {
  
  data(){
      return {
        blogs:[],
        search:' '
      }
  },
  created(){
    axios.get('https://blog-app-da84b.firebaseio.com/posts.json')
    .then(response => {
      var blogsArray=[];
      for(let key in response.data){
        response.data[key].id=key
        blogsArray.push(response.data[key]);
      }this.blogs=blogsArray;
    })  
  },
  computed:{
    filteredBlogs(){
      return this.blogs.filter((blog)=>{
        return blog.title.toUpperCase().match(this.search.toUpperCase())
      })
    }
  }
}
</script>

<style scoped>

#blogList{
  max-width:90%;
  margin: 0px auto;
  text-align: left;
}
h2{
  text-align: center;
}
</style>
