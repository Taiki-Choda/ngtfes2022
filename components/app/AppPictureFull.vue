<template>
    <picture>
        <img class="picture-full" :src='src' :alt='alt'>
    </picture>
</template>

<script>

export default {
    components: {
    },
    props: {
        src: {
            type: String,
            default: '',
        },
        alt: {
            type: String,
            default: '長田高校文化祭の画像',
        }
    },
    data(){
        return {
        }
    }
}
</script>

<style lang="scss" scoped>
.picture-full {
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    max-width: 800px;
    max-height: 60vh;

    object-fit: contain;
    // border-radius: 6px;
}
</style>
