<template>
    <layout-wrap-main>
        <app-page-title title="ガイドマップ">
            <p>場内地図をご覧いただけます。</p>
        </app-page-title>
        <app-block-normal>
            <div class="map">
                <div class="map__image" :style="styleObject()"></div>
            </div>
            <p class="page-link">
                <a href="/2022/public/map_2022_01.pdf" target="_blank" rel="noopener noreferrer">PDFで見る ></a>
            </p>
            <input v-model="scale" class="scale-input" type="range" min="0.65" max="2" step="0.005">
        </app-block-normal>
        <layout-button-center>
            <app-button-ring link="booth" desc="模擬店の紹介"></app-button-ring>
            <app-button-ring link="timetable" desc="ステージ紹介"></app-button-ring>
        </layout-button-center>
    </layout-wrap-main>
</template>

<script>
export default {
    data() {
        return {
            scale: 1,
        }
    },
    head() {
        return {
            title: '地図',
            meta: [
                { hid: 'description', name: 'description', content: '場内地図をご覧いただけます。長田高校の文化祭2022は「WEAVE」がテーマ。私たち自身の無限の色が織物のように出逢い、生み出される最高の時間を共に。一縷の想いがいつか大きな帆を張って！徹底した新型コロナウイルス感染症拡大防止対策を講じて開催します。' },
            ]
        }
    },
    methods: {
        styleObject() {
            const scale = this.scale;
            const style = {
                transform: `scale(${scale})`,
                margin: `calc(-140vw * ${(1 - scale)} / 2) calc(-210vw * ${(1 - scale)} / 2)`
            }
            return style;
        }
    }
}
</script>

<style lang="scss" scoped>
.scale-input {
    display: block;
    -webkit-appearance: none;
    appearance: none;
    cursor: pointer;
    background: $theme;
    height: 6px;
    width: 60%;
    border-radius: 10px;
    margin: 2.5rem auto 0 auto;
    &::-webkit-slider-thumb {
        -webkit-appearance: none;
        background: $theme;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        box-shadow: $box-shadow;
    }
}
.map {
    border-radius: 8px;
    overflow: scroll;
    width: 100%;
    height: 400px;
    background: #C1CFD7;
    &__image {
        transform: scale(0.85);
        transform-origin: center center;
        background-image: url("@/assets/images/map_2022_01.png");
        width: 210vw;
        min-width: 100%;
        height: 140vw;
        background-repeat: no-repeat;
        background-size: cover;
        border-radius: 8px;
        will-change: transform,margin;
        // transition: transform 0.01s linear 0s,margin 0.01s linear 0s;
    }
}
.page-link {
    text-align-last: right;
    margin: 1rem 0 2rem 0;
}
</style>
