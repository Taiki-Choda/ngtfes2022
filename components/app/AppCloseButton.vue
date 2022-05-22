<template>
    <div class="close-button" role="button" tabindex="0">
        <span class="close-button__line"></span>
        <span class="close-button__line"></span>
    </div>
</template>

<script>
export default {
    props: {
    },
    data(){
        return {
        }
    }
}

</script>

<style lang="scss" scoped>
.close-button {
    position: relative;
    width: 30px;
    height: 30px;
    cursor: pointer;
    z-index: 10;
    &__line {
        position: absolute;
        display: block;
        width: 100%;
        height: 3px;
        border-radius: 3px;
        background: #fff;
        top: calc(50% - 1.5px);
        left: 0;
        &:first-child {
            transform: rotate(45deg);
        }
        &:last-child {
            transform: rotate(-45deg);
        }
    }
}
</style>
