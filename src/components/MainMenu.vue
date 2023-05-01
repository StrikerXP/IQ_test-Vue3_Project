<!-- @format -->

<script>
export default {
    name: "MainMenu",
    props: {
        show: Boolean,
    },
};
</script>

<template>
    <div
        v-if="show"
        class="menu"
    >
        <div
            class="menu__close"
            @click="$emit('close')"
        ></div>
        <div class="menu-links">
            <router-link class="menu-links__link" to="/">Головна</router-link>
            <router-link class="menu-links__link" to="/">Інформація про тест</router-link>
            <router-link class="menu-links__link" to="/">Пройти тест</router-link>
        </div>
    </div>
</template>

<style scoped>
* {
    font-family: "Roboto", sans-serif;
    text-transform: uppercase;
}

.menu {
    display: flex;
    flex-direction: column;
    position: fixed;
    height: 100%;
    width: 22em;
    background: #181818;
    top: 0;
    z-index: 999;
}

.menu__close {
    display: flex;
    justify-content: center;
    align-self: flex-end;
    margin-top: 18px;
    margin-right: 13px;
    margin-bottom: 64px;
    color: #ffc700;
    width: 28px;
    height: 28px;
    cursor: pointer;
}

.menu__close:before,
.menu__close:after {
    position: absolute;
    content: " ";
    height: 28px;
    width: 3px;
    background-color: #ffc700;
}

.menu__close:before {
    transform: rotate(45deg);
}

.menu__close:after {
    transform: rotate(-45deg);
}

.menu-links {
    display: flex;
    flex-direction: column;
}

.menu-links__link {
    text-decoration: none;
    padding-bottom: 27px;
    padding-left: 23px;
    color: #ffffff;
}

.menu-links__link:last-child {
    color: #F4CE0C;
}
</style>
