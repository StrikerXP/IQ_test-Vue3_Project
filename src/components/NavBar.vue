<!-- @format -->

<script>
import MainMenu from "@/components/MainMenu.vue";

export default {
    name: "NavBar",
    components: { MainMenu },
    data() {
        return {
            showMainMenu: false,
        };
    },
};
</script>

<template>
    <nav class="navbar">
        <button
            class="menu-button"
            @click="showMainMenu = true"
        >
            <span class="menu-button__line"></span>
            <span class="menu-button__line"></span>
            <span class="menu-button__line"></span>
        </button>
        <img
            class="img-responsive"
            src="../images/brain.png"
            alt=""
        />
        <h1 class="title font__yeseva-one font__sz-12 font__uppercase color__yellow">тест на определение IQ</h1>
    </nav>
    <main-menu
        :show="showMainMenu"
        @close="showMainMenu = false"
    />
</template>

<style scoped>
.navbar {
    display: grid;
    grid-template-columns: 1fr 1fr 4fr;
    align-items: center;
    position: fixed;
    top: 0;
    width: 100%;
    background: #181818;
}

.menu-button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    background-color: transparent;
    cursor: pointer;
    border: none;
    height: 16px;
}

.menu-button__line {
    width: 24px;
    height: 3px;
    background-color: #625f5f;
}

.title {
    padding-left: 5%;
}

.img-responsive {
    max-height: 47px;
}
</style>
