<template>
    <div class="heading-cool">
        <h1 class="heading-cool__title">
            <span class="heading-cool__main">{{title}}</span>
            <span class="heading-cool__sub">{{sub}}</span>
        </h1>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: '',
        },
        sub: {
            type: String,
            default: '',
        },
        // level: {
        //     type: Number,
        //     default: 1,
        // }
    },
}
</script>

<style lang="scss" scoped>
.heading-cool {
    margin: 3rem 0 3rem 0;
    &__title {
        position: relative;
        padding: 0.35rem 0 0.35rem 0.85rem;
        &::before {
            position: absolute;
            content: '';
            top: 0;
            left: 0;
            width: 2px;
            height: 100%;
            background-color: $theme;
        }
    }
    &__main {
        display: block;
        padding-bottom: 0.5rem;
        font-size: 1.75em;
        line-height: 1.25em;
    }
    &__sub {
        display: block;
        font-size: 1em;
        color: $theme;
    }
}
</style>
