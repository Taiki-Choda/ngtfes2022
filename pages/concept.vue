<template>
    <layout-wrap-main spacer="bottom">
        <nsf-hero-opening></nsf-hero-opening>
        <nsf-hero-message></nsf-hero-message>
        <nsf-concept-block>
            <p>無数の糸から生み出される織物のように、たくさんの個性に溢れた、それぞれの「糸」が繋がり合い、響き合い、そして未だ目にしたことのない深みある感動に包まれる時間、それが「WEAVE（読み：ウィーブ）」です。</p>
        </nsf-concept-block>
        <div style="background:#fff; margin-top:-6rem;">
            <layout-block-spacer></layout-block-spacer>
            <app-block-normal style="margin:0;">
                <app-heading-cool title="安全な開催に向けて" sub="Health Safety"></app-heading-cool>
                <app-text-area>
                    <p>全ての方に安心してお楽しみいただけるよう、準備を進めております。開催に際しては感染拡大防止策を策定し、その徹底に努めます。</p>
                    <p>衛生安全について詳しくは以下のページをご覧ください。</p>
                </app-text-area>
                <layout-button-center style="padding-bottom:0;">
                    <app-button-ring link="covid-19/health-safety" desc="衛生安全について"></app-button-ring>
                </layout-button-center>
            </app-block-normal>
        </div>
    </layout-wrap-main>
</template>

<script>

export default {
    layout: 'default',
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

<style lang="scss">
</style>
