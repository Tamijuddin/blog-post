<template>
    <nav>
    <h1>Javascript Blog App</h1>
    <table align='center'>
        <tr>
            <td><router-link to="/"  inline exact>Home</router-link></td>
            <td><router-link to="/list"  inline exact>All Blogs</router-link></td>
            <td><router-link to="/about"  inline exact>About</router-link></td>
        </tr>
    </table>
    </nav>
</template>

<script>
export default {
    
}
</script>

<style scoped>
a{
    color: #fff;
    text-decoration: none;
    padding: 6px 8px;
    border-radius: 10px;
}
nav{
    background:#444;
    padding: 14px 0;
    margin-bottom: 40px;
}
/*.router-link-exact-active{
    background: #eee;
    color: #444;
}*/
h1{
    color:white;
    font-weight: bold;
    text-align: center;
}
</style>