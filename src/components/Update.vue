<template>
    <Header />
    <h1>Hello User, Welcome to the Update Restaurant page</h1>
    <form class="add">
        <input type="text" placeholder="Enter Restro Name" v-model="restaurant.name">
        <input type="text" placeholder="Enter Restro Contact" v-model="restaurant.contact">
        <input type="text" placeholder="Enter Restro Address" v-model="restaurant.address">
        <button type="button" @click="updateRestaurant">Update Restaurant</button>
    </form>
</template>

<script>
import Header from './Header.vue'
import axios from 'axios'

export default {
    name: 'Update',
    data(){
        return {
            restaurant: {
                name: '',
                contact: '',
                address: ''
            }
        }
    },
    components: {
        Header
    },
    methods: {
        async updateRestaurant(){
            let result = await axios.put(`http://localhost:5001/restaurants/${this.$route.params.id}`, {
                name: this.restaurant.name,
                contact: this.restaurant.contact,
                address: this.restaurant.address,
            })
            if (result.status === 200){
                this.$router.push({path: '/'})
            }
        }
    },
    async mounted(){
        let user = localStorage.getItem('user-info')
        if (!user){
            this.$router.push({name: 'Login'})
        }
        let result = await axios.get(`http://localhost:5001/restaurants/${this.$route.params.id}`)
        this.restaurant = result.data
    }
}
</script>