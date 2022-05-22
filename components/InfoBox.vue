<template>
    <layout-row>
        <article class="info-box">
            <app-title :title="title"></app-title>
            <slot></slot>
        </article>
    </layout-row>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: '情報',
        }
    }
}
</script>

<style lang="scss" scoped>
.info-box {
    border: solid 1px #aaa;
    border-radius: 6px;
    padding: 2.75rem 2.15rem;
    &__inner {
        margin: 0;
        padding: 0;
    }
}
</style>
