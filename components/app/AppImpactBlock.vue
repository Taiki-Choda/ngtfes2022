<template>
    <app-block class="row">
        <h2 class="impact-title">{{title}}</h2>
        <slot></slot>
    </app-block>
</template>

<script>
export default {
    props: {
      title: String,
    },
}
</script>

<style lang="scss" scoped>
.impact-title {
    font-size: 2rem;
}
</style>
