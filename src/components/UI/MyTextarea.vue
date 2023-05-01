<!-- @format -->

<template>
    <textarea
        :value="modelValue"
        @input="updateInput"
        type="text"
        class="input"
    />
</template>

<script>
export default {
    name: "MyTextarea",
    props: {
        modelValue: [String, Number],
    },
    methods: {
        updateInput(e) {
            this.$emit("update:modelValue", e.target.value);
        },
    },
};
</script>

<style scoped>
.input {
    width: 100%;
    border: 2px solid #45b227;
    padding: 10px 15px;
    margin: 8px 0;
}
</style>
