<template>
    <img class="logo" src="../assets/resto-logo.jpg" />
    <h1>Sign Up</h1>
    <div class="register">
        <input type="text" v-model="name" placeholder="Enter Name" />
        <input type="text" v-model="email" placeholder="Enter Email" />
        <input type="password" v-model="password" placeholder="Enter Password" />
        <button @click="signUp">Sign Up</button>
        <p>
            <router-link to="/login">Login</router-link>
        </p>
    </div>
    
</template>

<script>
import axios from 'axios'

export default {
    name: 'SignUp',
    data(){
        return {
            email: '',
            name: '',
            password: ''
        }
    },
    methods: {
        async signUp(){
            let result = await axios.post('http://localhost:5001/user', {
                name: this.name,
                email: this.email,
                password: this.password,
            })
            if (result.status === 201){
                localStorage.setItem('user-info', JSON.stringify(result.data));
                this.$router.push({name: 'Home'})
            }
        }
    },
    mounted(){
        let user = localStorage.getItem('user-info');
        if (user){
            this.$router.push({name: 'Home'})
        }
    }
}
</script>

<style>
   
</style>