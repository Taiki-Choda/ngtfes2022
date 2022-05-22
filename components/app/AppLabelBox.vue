<template>
    <span class="label-box label-box--gray">
        <slot></slot>
    </span>
</template>

<script>
</script>

<style lang="scss" scoped>
.label-box {
    display: inline-block;
    background: #eeeeee;
    padding: 3.5px 14px;
    border-radius: 3px;
    font-size: 0.95em;
    &--gray {
        background: #eeeeee;
        font-weight: bold;
    }
}
</style>
