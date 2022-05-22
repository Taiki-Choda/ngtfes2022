<template>
    <aside class="app-label-box" role="tooltip">
        <span>
            <slot></slot>
        </span>
    </aside>
</template>

<script>
</script>

<style lang="scss" scoped>
.app-label-box {
    display: inline-block;
    background: #f89e16;
    padding: 5px 1rem;
    border-radius: 3px;
    font-weight: bold;
    font-size: 1em;
    line-height: 1em;
    color: #fff;
    box-sizing: content-box;
    margin-right: 1rem;
}
</style>
