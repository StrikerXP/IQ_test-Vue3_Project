<!-- @format -->

<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: "NextButton",
};
</script>

<style scoped>
.btn {
    font-family: "Merriweather", serif;
    align-self: center;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    width: 189px;
    height: 41px;
    background-color: #ffc700ff;
    border-radius: 50px;
    border: none;
}

.btn__transparent {
    background-color: transparent;
    border: 1px solid #fff;
    color: #fff;
}
</style>
