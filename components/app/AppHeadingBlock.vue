<template>
    <app-block-normal class="heading-block">
        <app-title :title="title"></app-title>
        <slot></slot>
    </app-block-normal>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: '',
        }
    },
}
</script>

<style lang="scss">
</style>
