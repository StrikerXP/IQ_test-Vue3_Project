<!-- @format -->

<template>
    <div class="main">
        <div class="container">
            <p class="text text__description">Пройдіть точний і швидкий</p>
            <h1 class="text text__title">Тест на оприділення<br>IQ</h1>
        </div>
    </div>
</template>

<script>
export default {
    name: "MainPage",
};
</script>

<style scoped>
.main {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #0d0d11;
    background-image: url("../images/rain_bk.jpg");
    background-repeat: no-repeat;
    background-position: top;
}

.container {
    margin: 0 auto;
    width: 320px;
}

.text {
    text-align: center;
    margin-top: 27px;
}

.text__description {
    font-family: "PT Serif", serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    color: white;
    line-height: 24px;
    text-align: center;
    letter-spacing: 0.05em;
}

.text__title {
    font-family: "Yeseva One", cursive;
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 35px;
    text-align: center;
    text-transform: uppercase;
    color: #ffc700;
}
</style>
