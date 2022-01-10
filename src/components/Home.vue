<template>
    <Header />
    <h1>Hello {{user}}, Welcome to the Home page</h1>
    <table border="1">
        <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Contact</td>
            <td>Address</td>
            <td>Actions</td>

        </tr>
        <tr v-for="item in restaurants" :key="item.id">
            <td>{{item.id}}</td>
            <td>{{item.name}}</td>
            <td>{{item.contact}}</td>
            <td>{{item.address}}</td>
            <td>
                <router-link :to="'/update/'+item.id">Update</router-link>
                <button @click="deleteRestaurant(item.id)">Delete</button>
            </td>
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
    methods: {
        async deleteRestaurant(id){
            let result = await axios.delete(`http://localhost:5001/restaurants/${id}`)
            if (result.status == 200){
                this.loadData()
            }
        },
        async loadData(){
            let user = localStorage.getItem('user-info')
        if (!user){
            this.$router.push({name: 'Login'})
        }
        this.user = JSON.parse(user).name
        let result = await axios.get('http://localhost:5001/restaurants')
        this.restaurants = result.data;
        }
    },
    mounted(){
        this.loadData()
    }
}
</script>

<style>
    td{
        width: 160px;
        height: 40px;
    }
</style>