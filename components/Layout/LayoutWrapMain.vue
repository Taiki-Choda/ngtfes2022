<template>
    <div
    class="wrap-main"
    :class="{'wrap-main--space-bottom':spacer==='bottom','wrap-main--space-top':spacer==='top','wrap-main--space-none':spacer==='none'}"
    >
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: {
        spacer: {
            type: String,
            default: 'both',
        }
    }
}
</script>

<style lang="scss">
.wrap-main {
    padding: 6.5rem 0 7.25rem 0;
    &--space-bottom {
        padding-top: 0;
    }
    &--space-top {
        padding-bottom: 0;
    }
    &--space-none {
        padding-top: 0;
        padding-bottom: 0;
    }
}
</style>
