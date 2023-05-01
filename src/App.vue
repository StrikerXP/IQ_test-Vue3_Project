<!-- @format -->

<template>
    <nav><navbar /></nav>
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
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
</style>
