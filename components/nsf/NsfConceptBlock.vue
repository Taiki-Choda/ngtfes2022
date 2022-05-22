<template>
    <section class="concept">
        <layout-row>
            <h3 class="concept__title">CONCEPT</h3>
            <div class="concept__description">
                <slot></slot>
            </div>
            <div class="concept__background"></div>
        </layout-row>
    </section>
</template>

<script>
</script>

<style lang="scss" scoped>
.concept {
    position: relative;
    margin: -1.65rem 0 3rem 0;
    padding: 7rem 0;
    color: #fff;
    background-image: linear-gradient(75deg,$theme -10%,#2dc2ba 40%,#14a0c3 100%);
    clip-path: polygon(0 0, 100% 1rem, 100% calc(100% - 2.5rem), 0 100%);
    z-index: 10;
    box-shadow: 0 0 50px #000;
    overflow: hidden;
    &__background {
        position: absolute;
        top: 55%;
        left: 60%;
        width: 100%;
        height: 100%;
        max-width: 580px;
        background-image: url('@/assets/images/logo/icon_white.svg');
        opacity: 0.15;
        transform: translate(-50%,-50%) scale(142%);
        background-position: center center;
        background-repeat: no-repeat;
        background-size: 100%;
        z-index: -1;
    }
    &__title {
        position: relative;
        font-size: 3rem;
        font-style: oblique 6deg;
        overflow-wrap: break-word;
        line-height: 0.95em;
        letter-spacing: -0.05em;
        margin-bottom: 3rem;
        &::after {
            position: absolute;
            content: '';
            width: 20%;
            height: 2px;
            top: calc(50% - 1px);
            left: auto;
            margin-left: 17px;
            background: #ffffff;
        }
    }
    &__description {
        font-size: 1.25rem;
    }
}
</style>
