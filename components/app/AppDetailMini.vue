<template>
    <dl class="app-detail-mini">
        <dt class="app-detail-mini__title"><app-label-box>{{title}}</app-label-box></dt>
        <dd class="app-detail-mini__description"><slot></slot></dd>
    </dl>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: '説明',
        }
    }
}
</script>

<style lang="scss" scoped>
.app-detail-mini {
    display: flex;
    flex-wrap: nowrap;
    align-content: flex-start;
    gap: 0.75rem;
    margin: $normal-margin 0;
    &__description {
        padding-top: 3.5px;
        flex-grow: 1;
    }
}
</style>
