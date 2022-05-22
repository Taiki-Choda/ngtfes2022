<template>
    <div
      class="scroll-top-button"
      :class="{'scroll-top-button--hide':firstTime,'scroll-top-button--unshown':!muchScrolled,}"
      aria-label="ページ最上部までスクロール"
      role="button"
      tabindex="0"
      @click="scrollToTop()"
    >
        <!--  -->
        <div class="arrow-icon"></div>
        <!--  -->
    </div>
</template>

<script>
export default {
    data(){
        return {
            muchScrolled: false,
            scroll: 0,
            firstTime: true,
        }
    },
    mounted() {
        window.addEventListener('scroll', this.showWithScroll);
    },
    beforeDestroyed() {
        window.removeEventListener('scroll', this.showWithScroll)
    },
    methods: {
        scrollToTop() {
            const currentScrollX = window.scrollX;
            window.scrollTo({
                top :0,
                left: currentScrollX,
                behavior: "smooth"
            });
        },
        showWithScroll() {
            this.scroll = window.scrollY;
            if (this.scroll > 100) {
                this.muchScrolled = true;
                if (this.firstTime) {
                    this.firstTime = false;
                }
            } else {
                this.muchScrolled = false;
            }
        },
    }
}
</script>

<style lang="scss" scoped>
@keyframes zoomPopUp {
    0% {
        transform: scale(0.2);
        opacity: 0;
    }
    100% {
        transform: scale(1);
        opacity: 1;
    }
}
@keyframes zoomPopDown {
    0% {
        transform: scale(1);
        opacity: 1;
    }
    100% {
        transform: scale(0.2);
        opacity: 0;
    }
}
.scroll-top-button {
    position: fixed;
    bottom: 10%;
    right: 4%;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    cursor: pointer;
    background-color: $theme;
    box-shadow: $box-shadow;
    transition: opacity 0.2s, box-shadow 0.2s;
    animation: zoomPopUp 0.6s cubic-bezier(0.680, -0.550, 0.265, 1.550) forwards;
    z-index: 999;
    &--unshown {
        pointer-events: none;
        animation: zoomPopDown 0.6s cubic-bezier(0.680, -0.550, 0.265, 1.550) forwards;
    }
    &--hide {
        // ページ読み込み時に、非表示前にanimationが適用されるのを防止
        animation: none;
        opacity: 0;
    }
    &:hover {
        box-shadow: 0px 0px 0px rgba(0,0,0,0);
    }
}
.arrow-icon {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    &::before, &::after {
        content: '';
        position: absolute;
        top: 48%;
        left: 50%;
        width: 16px;
        height: 3px;
        border-radius: 2px;
        background-color: #fff;
    }
    &::before {
        transform: translate(-20%,-50%) rotate(45deg);
    }
    &::after {
        transform: translate(-80%,-50%) rotate(-45deg);
    }
}
</style>
