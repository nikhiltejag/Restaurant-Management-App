<template>
  <router-view />
  
</template>

<script>

export default {
  name: 'App',
 
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  margin: 0;
  padding: 0;
}

 .logo{
        width: 150px;
    }
    .register input, .login input, .add input{
        width: 300px;
        display: block;
        margin: auto;
        margin-bottom: 20px;
        padding: 12px 20px 12px 20px;
        border: 1px solid skyblue;
    }

    .register button, .login button, .add button{
        width: 340px;
        height: 40px;
        border: none;
        background-color: skyblue;
        color: white;
        cursor: pointer;
    }
</style>
