<template>
    <article class="card" :aria-label="cardTitle">
        <slot></slot>
    </article>
</template>

<script>
export default {
    props: {
        cardTitle:{
            type: String,
            default: 'カード',
        }
    },
}
</script>

<style lang="scss" scoped>
.card {
    width: 100%;
    padding: 2.5rem 2rem;
    box-shadow: $box-shadow;
    border-radius: 8px;
    @include tablet {
        width: calc(50% - 1rem);
    }
    @include laptop {
        width: calc(33.3333% - 1rem);
    }
    @include pc {
        width: calc(25% - 2rem);
    }
}
</style>
