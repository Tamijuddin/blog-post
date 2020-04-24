 import Blog from './components/Blog.vue'
 import BlogList from './components/BlogList.vue'
 import About from './components/About.vue'

export default[
    {path:'/', component:Blog},

    {path:'/list', component:BlogList},

    {path:'/about', component:About},
]