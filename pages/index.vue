<template>
    <layout-wrap-main spacer="bottom">
        <div class="home-hero">
            <img class="home-hero__img" src="@/assets/images/top_01.png" alt="長田高校文化祭2022・WEAVE">
        </div>
        <nsf-concept-block>
            <p>私たちの世界に同じなんてない。まだ見ぬ世界に手を伸ばし、まだ見ぬ輝きと出会うんだ。無限の色が織りなす、かけがえのない瞬間を共に。一縷の想いがいつか大きな帆を張って__</p>
        </nsf-concept-block>
        <!-- <attention-block title="ご注意">
            <app-text-area>
                <p><strong>文化祭スタッフの指示には必ず従い、安心・安全な運営にご協力をお願いします。</strong></p>
                <ul>
                    <li>ステージは撮影禁止です</li>
                    <li>マスクを正しく着用し、周囲の方との距離を確保してください</li>
                    <li>声援、叫び声、大きな声はお控えください</li>
                    <li>ご家族の方は規定時間に必ずご退出ください（一部のステージ鑑賞中を除く）</li>
                </ul>
            </app-text-area>
        </attention-block> -->
        <attention-block title="開催終了">
            <app-text-area>
                <p>「WEAVE」は無事に開催を終了しました。たくさんのご協力・ご来場、誠にありがとうございました。</p>
            </app-text-area>
        </attention-block>
        <app-block-normal>
            <app-heading-cool title="文化祭を楽しもう！" sub="ピックアップ機能"></app-heading-cool>
            <nsf-pickup-button></nsf-pickup-button>
        </app-block-normal>
        <nsf-now-stage></nsf-now-stage>
        <app-block-normal>
            <app-heading-cool title="安全な開催に向けて" sub="Health Safety"></app-heading-cool>
            <p>全ての方に安心してお楽しみいただけるよう、準備を進めております。開催に際しては感染拡大防止策を策定し、その徹底に努めます。<br>衛生安全について詳しくは以下のページをご覧ください。</p>
            <layout-button-center style="padding-bottom:0;">
                <app-button-ring link="covid-19/health-safety" desc="衛生安全について"></app-button-ring>
            </layout-button-center>
        </app-block-normal>
    </layout-wrap-main>
</template>

<script>

export default {

    data(){
        return {
        }
    },
    head() {
        return {
            title: 'WEAVE｜長田高校文化祭2022',
            titleTemplate: '',
            meta: [
                { hid: 'description', name: 'description', content: '長田高校の文化祭2022は「WEAVE」がテーマ。私たち自身の無限の色が織物のように出逢い、生み出される最高の時間を共に。一縷の想いがいつか大きな帆を張って！徹底した新型コロナウイルス感染症拡大防止対策を講じて開催します。' },
            ]
        }
    },
}
</script>

<style lang="scss" scoped>
.home-hero {
    width: 100%;
    &__img {
        width: 100%;
    }
}
.logo-main {
    width: 80%;
    max-width: 450px;
}
.wrap {
    background: #fff;
    margin-top: -6rem;
}
</style>
