<template>
    <h1>Hello User, Welcome to the Home page</h1>
</template>

<script>
export default {
    name: 'Home',
    mounted(){
        let user = localStorage.getItem('user-info')
        if (!user){
            this.$router.push({name: 'SignUp'})
        }
    }
}
</script>