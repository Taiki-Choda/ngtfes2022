<template>
    <h3 class="app-title">{{title}}</h3>
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
.app-title {
    font-size: 1.45rem;
    padding-bottom: 1rem;
    margin-bottom: 1.65rem;
    line-height: 1.35em;
    border-bottom: solid 1px #dedede;
}
</style>
