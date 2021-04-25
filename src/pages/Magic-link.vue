<template>
    <div class="">
        <h1>Magic link</h1>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name: 'Magiclink',
    data() {

    },
    async mounted() {  
        const refreshToken = this.$route.query.token;
        const data = await axios.post('https://api.mesto.co/v1/auth/refresh', {refreshToken, RqUid: "a939dca3-dfc3-4750-887a-1893b3864058"}).then(response=> response.data);
        console.log(data)
        localStorage.setItem('accessToken', data.accessToken)
        localStorage.setItem('refreshToken', data.refreshToken)
        this.$router.push('/')
    },

}
</script>