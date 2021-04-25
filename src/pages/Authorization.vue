<template>
    <div class="authorization-page">
        <img class="authorization-page__logo" src="/Long.svg">
        <div class="authorization-page__content">
            <h1 class="authorization-page__heading">Вход в сообщество.</h1>
            <p class="authorization-page__description">Мы отправим на ваш e-mail ссылку для входа</p>
        </div>
        <form class="input-auth" @submit.prevent="onSubmit">
            <div class="input-auth__div"> 
                <input type="email" class="authorization-page__input" v-model= "email" placeholder="Email">
                <input type="submit" class="authorization__btn" value="" >
            </div> 
        </form>
    </div>
</template>
<script>
export default {
    name: 'Authorization',
    data() {
        return{
            email: ''
        }
    },
    methods: {
        onSubmit () {
            this.$store.dispatch('auth/GET_TOKENID', this.email);
            this.$router.push('/super-page') 
        }
    },
    
}
</script>
<style>
.authorization-page{
    background: radial-gradient(53.56% 53.56% at 50% 0%, #4A195B 0%, #320E3F 100%);
    width: 100vw;
    height: 100vh;
}
.authorization-page__logo{
    display: block;
    margin: 0 auto;
    margin-bottom: 168px;
    padding-top: 128px;
}
.authorization-page__heading{
    font-size: 50px;
    font-style: normal;
    font-weight: 700;
    text-align: center;
    color: white;
    font-family: 'Manrope';
}
.authorization-page__description{
    font-family: 'Manrope';
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    text-align: center;
    color: white;
    margin-top: 16px;
    margin-bottom: 34px;
}
.input-auth{
    display: block;
    margin: 0 auto;
    vertical-align: middle;
    /* display: flex;
    align-items: center; */
}
.input-auth__div{
    display: flex;
}
.authorization-page__input{
    display: block;
    margin: 0 auto;
    border: none;
    background: rgba(255, 255, 255, 0.1);
    padding: 20px 100px 20px 30px;
    font-family: 'Manrope';
    font-size: 18px;
    font-weight: 500;
    line-height: 25px;
    color: #B6AFBC;
}
.authorization-page__input:active{
    color: #B6AFBC;
}
.authorization__btn{
    width: 10px;
    min-height: 10px;
    background-image: url('/arrow-right.svg');
    background-repeat: no-repeat;
    background-size: cover;
    background-color: transparent;
    border: none;
    
}

</style>