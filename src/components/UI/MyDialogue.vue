<template>
    <div class="dialogue" v-if="show" @click="hideDialogue">
        <div @click.stop class="dialogue__content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import toggleMixin from "@/mixins/toggleMixin";

export default {
    name: "MyDialogue",
    mixins: [toggleMixin]
};
</script>

<style scoped>
.dialogue {
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(0,0,0, 0.5);
    position: fixed;
    display: flex;
}

.dialogue__content {
    margin: auto;
    background: white;
    -webkit-border-radius: 12px;
    -moz-border-radius: 12px;
    border-radius: 12px;
    min-width: 300px;
    min-height: 50px;
    padding: 20px;
}
</style>