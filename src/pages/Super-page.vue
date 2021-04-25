<template>
    <div class="authorization-page">
        <img class="authorization-page__logo" src="/Long.svg">
        <div class="authorization-page__content">
            <h1 class="authorization-page__heading1">Супер!</h1>
            <p class="authorization-page__description1">Мы выслали вам письмо с ссылкой на почту.</p>
            <p class="authorization-page__description1">Перейдите по ссылке в письме, чтобы войти на сайт.</p>
        </div>
        <p class="authorization-page__description__small">Не получили письмо? <a href="./auth">Повторить</a></p>
    </div>
</template>
<script>
export default {
    name: 'SuperPage',
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
.authorization-page__heading1{
    font-size: 50px;
    font-style: normal;
    font-weight: 700;
    text-align: center;
    color: white;
    font-family: 'Manrope';
    margin-bottom: 34px;
}
.authorization-page__description1{
    font-family: 'Manrope';
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    text-align: center;
    color: white;
    margin-top: 16px;
    /* margin-bottom: 34px; */
}
.authorization-page__description__small{
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    color: white;
    margin-top: 40px;
    font-family: 'Manrope';
}
.authorization-page__description__small a{
    color: white;
    border-bottom: 1px white solid;
}
</style>