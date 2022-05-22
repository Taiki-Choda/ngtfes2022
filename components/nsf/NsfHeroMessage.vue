<template>
    <layout-row class="hero-message">
        <app-effect-change class="svg-box">
            <svg class="line" width="100%" height="100%" viewBox="0 0 8000 1234" version="1.1" xmlns="http://www.w3.org/2000/svg" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;">
                <path d="M7654.17,1029.17c-0,-0 -836.542,-956.083 -2029.17,-856.177c-986.478,82.637 -980.861,896.705 -2254.17,806.706c-971.523,-68.669 -846.925,-776.046 -1933.33,-808.863c-703.03,-21.236 -1095.83,612.5 -1095.83,612.5" style="fill:none;stroke-width:83.33px;"/>
                <path d="M7833.33,512.5c0,0 -905.951,487.921 -1620.83,462.5c-631.971,-22.473 -1335.28,-749.738 -2022.92,-802.01c-965.078,-73.362 -1565.4,570.546 -2510.42,622.843c-948.35,52.483 -1429.17,-495.833 -1429.17,-495.833" style="fill:none;stroke-width:83.33px;"/>
                <path d="M7925,682.806c0,0 -524.692,-516.033 -1412.5,-504.167c-885.319,11.834 -1106.08,793.2 -1808.33,850.528c-1245.27,101.656 -1379.86,-740.952 -2295.83,-775.528c-708.919,-26.759 -1011.11,520.383 -1954.17,843.075" style="fill:none;stroke-width:83.33px;"/>
            </svg>
        </app-effect-change>
        <app-hero-text text1="私たちの世界に" text2="同じなんてない。"></app-hero-text>
        <app-hero-text text1="まだ見ぬ世界に手を伸ばし" text2="まだ見ぬ輝きと出会うんだ。"></app-hero-text>
        <app-hero-text text1="無限の色が織りなす" text2="かけがえのない瞬間を共に。"></app-hero-text>
        <app-hero-text text1="一縷の想いが" text2="いつか大きな帆を張って__"></app-hero-text>
    </layout-row>
</template>

<script>
</script>

<style lang="scss" scoped>
.hero-message {
    position: relative;
    padding-top: 9.5rem;
    padding-bottom: 6rem;
    background: rgba(240, 240, 240, 0.7);
    backdrop-filter: blur(9px);
    clip-path: polygon(0 3rem, 100% 0, 100% 100%, 0 100%);
    z-index: 10;
    overflow: hidden;
}
.svg-box {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
}
.line {
    position: absolute;
    transform: rotate(55deg);
    bottom: 0%;
    right: -150%;
    width: 450%;
    stroke-width: 13px;
    fill: none;
    stroke: rgba(168, 168, 168, 0.7);
    stroke-dasharray: 200%;
    z-index: -1;
    opacity: 0.78;
    visibility: hidden;
    // filter: blur(3px);
    path {
        &:first-child {
            stroke: rgba(227, 227, 227, 0.75);
        }
        &:last-child {
            stroke: rgba(204, 204, 204, 0.6)
        }
    }
}
[data-show-entry=shown] .line{
    visibility: visible;
    animation: line_animation 8s both 1s;
}
@keyframes line_animation {
  0% {
    stroke-dashoffset: 200%;
  }
  90% {
    stroke-dashoffset: 15%;
  }
  100% {
    stroke-dashoffset: 0%;
  }
}
</style>
