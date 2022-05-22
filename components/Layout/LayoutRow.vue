<template>
    <div class="row">
        <slot></slot>
    </div>
</template>

<script>
</script>

<style lang="scss">
.row {
    padding-left: 1.75rem;
    padding-right: 1.75rem;
    @include tablet {
        padding-left: 3.35rem;
        padding-right: 3.35rem;
    }
    @include laptop {
        padding-left: 5rem;
        padding-right: 5rem;
    }
    @include pc {
        padding-left: 9.75rem;
        padding-right: 9.75rem;
    }
}
</style>
