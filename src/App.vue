<!-- @format -->

<script>
import Navbar from "@/components/NavBar.vue";
import MainPage from "@/pages/MainPage.vue";

export default {
    components: { MainPage, Navbar },
};
</script>

<template>
    <navbar />
    <main-page />
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=PT+Serif:wght@400;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Yeseva+One&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Merriweather:wght@400;900&display=swap");

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.container {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
}

.text {
    line-height: 24px;
    text-align: center;
    letter-spacing: 0.05em;
}

.font__pt-serif {
    font-family: "PT Serif", serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
}

.font__yeseva-one {
    font-family: "Yeseva One", serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
}

.font__merriweather {
    font-family: "Merriweather", serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
}

.font__weight-700 {
    font-weight: 700;
}

.font__weight-900 {
    font-weight: 700;
}

.font__sz-8 {
    font-size: 8px;
}

.font__sz-12 {
    font-size: 12px;
}

.font__sz-15 {
    font-size: 15px;
}

.font__sz-18 {
    font-size: 18px;
}

.font__uppercase {
    text-transform: uppercase;
}

.color__white {
    color: white;
}

.color__yellow {
    color: #ffc700;
}

.color__black {
    color: black;
}
</style>
