<template>
    <nuxt-link v-if="type === 'domestic'" class="wrap-link" :to="link" aria-hidden="true">{{name}}</nuxt-link>
    <a v-else class="wrap-link" :href="link" target="_blank" rel="noopener noreferrer" aria-hidden="true">{{name}}</a>
</template>

<script>
export default {
    props: {
        link: {
            type: String,
            default: '/',
        },
        name: {
            type: String,
            default: 'リンク先のページへ',
        },
        type: {
            type: String,
            default: 'domestic',
        }
    },
    data(){
        return {
        }
    }
}

</script>

<style lang="scss" scoped>
.wrap-link {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 99;
    opacity: 0;
    text-indent: -100em;
}
</style>
