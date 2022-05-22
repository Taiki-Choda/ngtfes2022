<template>
    <layout-wrap-main>
        <app-page-title title="模擬店の一覧">
            <p>個性あふれる模擬店をご紹介します！</p>
        </app-page-title>
        <attention-block title="ご注意">
            <app-text-area>
                <ul>
                    <li>食事の際は必ずイートインスペース（3F）をご利用ください。</li>
                    <li>体験中は常にマスクを着用し、大きな声はお控えください</li>
                    <li>お並びの際は横に広がらず、通路の確保にご協力ください。</li>
                    <!-- <li><strong>雨天時、食品模擬は体育館で実施します</strong></li> -->
                    <!-- <li>アレルギー表示は参考として掲載しています。他のアレルゲンが調理・提供段階において混入する可能性や、実際に販売する商品が変更されていることがあります。ご自身の判断の下、ご購入ください。</li> -->
                </ul>
            </app-text-area>
        </attention-block>
        <nsf-booth-list></nsf-booth-list>
        <layout-button-center>
            <app-button-ring link="map" desc="地図を見る"></app-button-ring>
        </layout-button-center>
    </layout-wrap-main>
</template>

<script>
export default {
    data() {
        return {
        }
    },
    head() {
        return {
            title: '模擬店',
            meta: [
                { hid: 'description', name: 'description', content: '長田高校文化祭2022「WEAVE」の室内模擬店・食品模擬店の紹介です。美味しいフードや楽しいアクティビティーなど、各クラス様々な企画をご用意しています。' },
            ]
        }
    },
}
</script>

<style lang="scss">
</style>
