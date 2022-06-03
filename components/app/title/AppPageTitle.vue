<template>
    <app-block-normal>
        <h1 class="page-title">{{title}}</h1>
        <slot></slot>
    </app-block-normal>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: 'ページ',
        },
    }
}
</script>

<style lang="scss" scoped>
.page-title {
    padding: 1rem 0;
    font-size: 1.85rem;
    line-height: 135%;
}
</style>
