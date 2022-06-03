<template>
    <button class="app-tag-button" :class="{'app-tag-button--active':active}" @click="clicked()">
        <slot></slot>
    </button>
</template>

<script>
export default {
    props: {
        active: {
            type: Boolean,
            default: false,
        }
    },
    data(){
        return {
        }
    },
    methods: {
        clicked() {
            this.$emit('clicked')
        }
    }
}

</script>

<style lang="scss" scoped>
.app-tag-button {
    border-radius: 30px;
    padding: 0.75rem 1.85rem;
    background: rgb(255, 255, 255);
    color: #000000;
    border: solid 2px #000;
    font-weight: bold;
    transition: background 0.25s ease 0s;
    white-space: nowrap;
    flex-grow: 1;
    max-width: 200px;
    &--active {
        background: #000;
        color: #fff;
    }
}
</style>
