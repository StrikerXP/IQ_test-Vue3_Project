<!-- @format -->

<template>
    <nav>
        <navbar />
    </nav>
    <main-page />
</template>

<script>
import Navbar from "@/components/NavBar.vue";
import MainPage from "@/pages/MainPage.vue";

export default {
    components: { MainPage, Navbar },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=PT+Serif&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Yeseva+One&display=swap");

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
</style>
