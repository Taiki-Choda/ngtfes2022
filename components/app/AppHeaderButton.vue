<template>
    <div
        class="header-btn"
        role="button"
        tabindex="0"
        :aria-label='helperOpenClose'
        @click="headerOpenClose"
    >
        <span class="header-btn__label">MENU</span>
        <div class="header-btn__lines">
            <span class="header-btn__line"></span>
            <span class="header-btn__line"></span>
            <span class="header-btn__line"></span>
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.header-btn {
    position: absolute;
    top: 12.5px;
    right: 33px;
    width: 123px;
    height: 45px;
    border-radius: 30px;
    cursor: pointer;
    transition: width 0.5s;
    z-index: 30;
    background-color: $theme;
    box-shadow: $box-shadow;
    z-index: 1300;
    &__label {
        position: absolute;
        left: 15px;
        top: 52%;

        user-select: none;
        display: block;
        font-weight: bold;
        color: #fff;
        white-space: nowrap;
        line-height: 100%;
        font-size: 14px;
        letter-spacing: 0.5px;
        width: 60px;
        transition: width 0.5s, opacity 0.5s;
        overflow: hidden;
        transform: translateY(-50%);
    }
    &__lines {
        position: absolute;
        top: 50%;
        right: 29px;
        width: 22.5px;
        height: 40%;
        transform: translate(50%,-50%);
        transition: right 0.3s;
    }
    &__line {
        top: 0;
        display: block;
        position: absolute;
        width: 100%;
        height: 3px;
        border-radius: 2px;
        top: calc(50% - 1px);
        right: 0;
        background-color: #ffffff;
        transform: translate(0,-50%) rotate(0deg);
        transition: width 0.35s ease 0s, transform 0.3s ease 0.1s, top 0.3s ease 0.1s;
        &:first-child {
            top: 12%;
        }
        &:nth-child(2) {
            width: 65%;
            transition: width 0.35s ease 0.1s;
        }
        &:last-child {
            width: 80%;
            top: 85%;
        }
    }
}
</style>
