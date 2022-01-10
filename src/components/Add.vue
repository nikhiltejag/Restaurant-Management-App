<template>
    <Header />
    <h1>Hello User, Welcome to the Add Restaurant page</h1>
    <form class="add">
        <input type="text" placeholder="Enter Restro Name" v-model="restaurant.name">
        <input type="text" placeholder="Enter Restro Contact" v-model="restaurant.contact">
        <input type="text" placeholder="Enter Restro Address" v-model="restaurant.address">
        <button type="button" @click="addRestaurant">Add New Restaurant</button>
    </form>
</template>

<script>
import Header from './Header.vue'
import axios from 'axios'

export default {
    name: 'Add',
    data(){
        return {
            restaurant: {
                name: '',
                contact: '',
                address: ''
            }
        }
    },
    methods: {
        async addRestaurant(){
            let result = await axios.post('http://localhost:5001/restaurants', {
                name: this.restaurant.name,
                contact: this.restaurant.contact,
                address: this.restaurant.address
            })
            if (result.status===201){
                this.$router.push({name: 'Home'})
            }
        }
    },
    components: {
        Header
    },
    mounted(){
        let user = localStorage.getItem('user-info')
        if (!user){
            this.$router.push({name: 'Login'})
        }
    }
}
</script>