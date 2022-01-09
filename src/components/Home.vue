<template>
    <Header />
    <h1>Hello {{user}}, Welcome to the Home page</h1>
    <table border="1">
        <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Contact</td>
            <td>Address</td>

        </tr>
        <tr v-for="item in restaurants" :key="item.id">
            <td>{{item.id}}</td>
            <td>{{item.name}}</td>
            <td>{{item.contact}}</td>
            <td>{{item.address}}</td>

        </tr>
    </table>
</template>

<script>
import axios from 'axios'
import Header from './Header.vue'

export default {
    name: 'Home',
    data(){
        return {
            user: '',
            restaurants: [],
        }
    },
    components: {
        Header
    },
    async mounted(){
        let user = localStorage.getItem('user-info')
        this.user = JSON.parse(user).name
        if (!user){
            this.$router.push({name: 'Login'})
        }
        let result = await axios.get('http://localhost:5001/restaurants')
        this.restaurants = result.data;
    }
}
</script>

<style>
    td{
        width: 160px;
        height: 40px;
    }
</style>