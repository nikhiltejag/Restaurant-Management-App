<template>
  <img class="logo" src="../assets/resto-logo.jpg" />
  <h1>Login</h1>
  <div class="login">
    <input type="text" v-model="email" placeholder="Enter Email" />
    <input type="password" v-model="password" placeholder="Enter Password" />
    <button @click="login">Login</button>
    <p>
      <router-link to="/sign-up">Sign Up</router-link>
    </p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Login',
    data(){
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        async login(){
            let result = await axios.get(`http://localhost:5001/user?email=${this.email}&${this.password}`)

            if (result.status === 200){
                localStorage.setItem('user-info', JSON.stringify(result.data[0]))
                this.$router.push({name: 'Home'})
            }
        }
    },
    mounted(){
        let user = localStorage.getItem('user-info');
        console.log(user)
        if (user){
            this.$router.push({name: 'Home'})
        }
    }
}
</script>