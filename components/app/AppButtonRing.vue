<template>
<div class="app-button-ring" role="button" tabindex="0" :aria-label="desc">
    {{desc}}
    <app-link-wrap :link="link" :name="desc" :type="type"></app-link-wrap>
</div>
</template>

<script>
export default {
    props: {
        link: {
            type: String,
            default: '/',
        },
        desc: {
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
.app-button-ring {
    position: relative;
    padding: 15px 38px 15px 31px;
    border-radius: 40px;
    white-space: nowrap;
    letter-spacing: 0.05em;
    font-weight: bold;
    border: solid 2px $theme;
    text-align: center;
    color: #000;
    z-index: 2;
    transition: color 0.3s,background 0.25s;
    flex-grow: 0.2;
    &::before {
        position: absolute;
        content: '';
        right: 20px;
        top: calc(50% - 6px);
        width: 8px;
        height: 8px;
        border: solid 2px #000;
        border-width: 2px 2px 0 0;
        transform: rotate(45deg);
        transition: border-color 0.3s,right 0.25s;
    }
    &:hover {
        color: #fff;
        background: $theme;
        &::before {
            border-color: #fff;
            right: 15px
        }
    }
}
</style>
