<template>
    <section class="heading-block">
        <h5 class="heading-block__title heading-block__title--mini">{{title}}</h5>
        <app-text-area>
            <slot></slot>
        </app-text-area>
    </section>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: '',
        }
    },
}
</script>

<style lang="scss" scoped>
.heading-block {
    margin: 3rem 0;
    &__title {
        &--mini {
            margin-bottom: 0.75rem;
            font-size: 1rem;
        }
    }
}
</style>
