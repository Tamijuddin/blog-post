<template>

<div id="blog"> 

    <form v-if="!submitted">

            <label style="color:white">Blog Title:</label>
            <b-form-input v-model.lazy="blog.title"  placeholder="Enter title..." required></b-form-input>
            <br>


          <table align='center'><tr>
            <td><b-form-checkbox value="Angular.Js" v-model="blog.categories" class="text-white" inline>Angular.JS</b-form-checkbox></td>
            <td><b-form-checkbox value="Express.JS" v-model="blog.categories" class="text-white" inline>Express.JS</b-form-checkbox></td>
            <td><b-form-checkbox value="Vanilla.JS" v-model="blog.categories" class="text-white" inline>Vanilla.JS</b-form-checkbox></td></tr>
            <tr><td><b-form-checkbox value="React.Js" v-model="blog.categories" class="text-white" inline>React.JS</b-form-checkbox></td>
            <td><b-form-checkbox value="Vue.Js" v-model="blog.categories" class="text-white" inline>Vue.JS</b-form-checkbox></td>
            <td><b-form-checkbox value="Node.JS" v-model="blog.categories" class="text-white" inline>Node.JS</b-form-checkbox></td></tr>
            </table><br>


            <label style="color:white">Blog Content:</label>

              <b-form-textarea v-model.lazy.trim="blog.content" placeholder="Enter something..."></b-form-textarea><br>
              <label style="color:white">Blog Author:</label>
              <b-form-input type="text" v-model.lazy="blog.author"  placeholder="Enter Author name..." required></b-form-input><br>

          <b-button variant="success" block v-on:click="post">Add Your Blog</b-button>
    </form><br>

    <div v-if="submitted" class="posted"> 
      <h3 style="color:white">Thank you for submitting your blog...</h3><br>
      <a style="color:white" href="/">Create a new blog</a>
    </div><br>

    <div id="preview">
      <b-card>
            <h3><b>Preview Blog</b></h3>
            <hr>
            <p>Blog Title: {{ blog.title }}</p>
            <p>Blog Category:</p>
            <ul>
              <li v-for="category in blog.categories" v-bind:key="category">{{category}}</li>
            </ul>
            <p>Blog Content:</p>
            <p>{{ blog.content }}</p>
            <p>Blog Author: {{ blog.author }}</p>
      </b-card>
    </div>
    
  </div>
</template>

<script>

import axios from 'axios';

export default {
  name: 'Blog',
  data() {
    return {
    blog: {
    title:"",
    content:"",
    author:"",
    categories:[]
      },
    submitted:false,
    }
  },
  methods:{
    post(){
      axios.post('https://blog-app-da84b.firebaseio.com/posts.json',this.blog).then((data)=>{
        console.log(data);
        this.submitted = true;
      })
    }
  }
}
</script>


<style scoped>
h2{
    text-align: center;
  }
h3{
    text-align: center;
  }
  .posted{
    text-align: center;
  }
td{
  padding: 0px 15px 0px 15px;
}
table{
  max-width:fit-content;
  }
</style>