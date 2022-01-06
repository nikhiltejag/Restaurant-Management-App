<template>
    <img class="logo" src="../assets/resto-logo.jpg" />
    <h1>Sign Up</h1>
    <div class="register">
        <input type="text" v-model="name" placeholder="Enter Name" />
        <input type="text" v-model="email" placeholder="Enter Email" />
        <input type="password" v-model="password" placeholder="Enter Password" />
        <button @click="signUp">Sign Up</button>
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
                localStorage.setItem('user-info', result.data);
                this.$router.push({name: 'Home'})
            }
        }
    }
}
</script>

<style>
    .logo{
        width: 150px;
    }
    .register input{
        width: 300px;
        display: block;
        margin: auto;
        margin-bottom: 20px;
        padding: 12px 20px 12px 20px;
        border: 1px solid skyblue;
    }

    .register button{
        width: 340px;
        height: 40px;
        border: none;
        background-color: skyblue;
        color: white;
        cursor: pointer;
    }
</style>