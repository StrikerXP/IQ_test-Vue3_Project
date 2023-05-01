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
    <div class="navbar">
        <button
            class="menu-button"
            @click="showMainMenu = true"
        >
            <span class="menu-button__line"></span>
            <span class="menu-button__line"></span>
            <span class="menu-button__line"></span>
        </button>
    </div>
    <main-menu
        :show="showMainMenu"
        @close="showMainMenu = false"
    />
</template>

<style scoped>
.navbar {
    position: sticky;
    background: #181818;
    padding-top: 17px;
    padding-bottom: 13px;
    padding-left: 15px;
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
</style>
