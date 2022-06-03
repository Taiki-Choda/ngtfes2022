<template>
    <section class="app-box-red">
        <div class="app-box-red__content">
            <slot></slot>
        </div>
    </section>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: '注意事項',
        },
    }
}
</script>

<style lang="scss" scoped>
.app-box-red {
    border: solid 2px $red;
    border-radius: 4px;
    margin: 2.5rem 0;
    overflow: hidden;
    &__content {
        padding: 2rem 1.45rem;
        color: $red;
        line-height: 1.35em;
    }
}
</style>
