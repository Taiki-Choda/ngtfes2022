<template>
    <dl class="app-detail-area">
        <slot></slot>
    </dl>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.app-detail-area {
    dt {
        margin-top: $normal-margin * 1.5;
        margin-bottom: $normal-margin;
        &:first-child {
            margin-top: 0;
        }
    }
}
</style>
