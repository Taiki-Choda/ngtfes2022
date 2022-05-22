<template>
    <app-effect-change>
        <p class="app-hero-text">
            <span class="background"><span class="text-row">{{text1}}</span></span>
            <br><span class="background"><span class="ja-narrow text-row">{{text2}}</span></span>
        </p>
    </app-effect-change>
</template>

<script>
export default {
    props: {
        text1: {
            type:String,
            default: '',
        },
        text2: {
            type:String,
            default: '',
        }
    }
}
</script>

<style lang="scss" scoped>
.app-hero-text {
    margin-bottom: 1.5rem;
}
.background {
    position: relative;
    display: inline-block;
    padding: 7.5px 27px 7.5px 18px;
    &::before {
        position: absolute;
        content: '';
        top: 6%;
        left: 0;
        width: 0%;
        height: 88%;
        background-color: #ffffff;
        z-index: -1;
        transition: width 0.55s ease 0.2s;
    }
    // 二行目を遅らせる記述
    &:last-child {
        &::before {
            transition: width 0.55s ease 0.7s;
        }
        .text-row {
            transition: clip-path 0.95s ease 1.35s;
        }
    }
}
.text-row {
    position: relative;
    display: inline-block;
    padding-right: 10px;
    font-size: calc(1rem + 0.75vw);
    font-style: oblique 3deg;
    font-weight: bold;
    color: rgba(0, 0, 0, 0);
    background-clip: text;
    background-image: linear-gradient(148deg, rgb(11, 218, 166) 0%,rgb(34, 143, 216)100%);
    white-space: nowrap;
    clip-path: polygon(0 0, 0 0, 0 100%, 0% 100%);
    transition: clip-path 0.95s ease 0.65s;
    z-index: 100;
}

[data-show-entry=shown] {
    .text-row {
        clip-path: polygon(0 0, 120% 0, 120% 100%, 0% 100%);
    }
    .background {
        &::before {
            width: 100%;
        }
    }
}
</style>
