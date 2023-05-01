<!-- @format -->

<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: "MyButton",
};
</script>

<style scoped>
.btn {
    padding: 10px 15px;
    background: none;
    color: #45b227;
    border: 2px solid #45b227;
    cursor: pointer;
}
</style>
