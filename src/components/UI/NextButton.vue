<!-- @format -->

<template>
    <button class="btn btn__start-test">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: "StartTestButton",
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
    border-radius: 20px;
    border: none;
}

.btn__start-test {
    margin-top: 150px;
}
</style>
