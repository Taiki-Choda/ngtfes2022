<template>
    <div class="app-text-area">
        <slot></slot>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.app-text-area {
    margin-bottom: - $normal-margin;
    h1,h2,h3,h4,h5,h6 {
        padding-bottom: $normal-margin;
    }
    p {
        padding-bottom: $normal-margin;
    }
    ul, ol {
        padding-bottom: $normal-margin;
        padding-left: 1.25em;
    }
    li, dt {
        padding-bottom: $normal-margin;
        &:last-child {
            padding-bottom: 0;
        }
    }
}
</style>
