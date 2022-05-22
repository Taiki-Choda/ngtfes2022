<template>
    <layout-wrap-main>
        <app-page-title :title="pageTitle">
            <p>各演目をクリックすると紹介文をご覧いただけます。</p>
        </app-page-title>
        <attention-block title="ステージ鑑賞時の注意">
            <app-text-area>
                <ul>
                    <li><strong class="red">吹奏楽部・音楽部：一部の招待者を除く、保護者の方はご覧いただけません。</strong></li>
                    <li>観覧スペースには人数制限を設けています。定員に達し次第、受付を終了します。</li>
                    <li>野外ステージ後方は通路です。左右に分かれてご鑑賞ください。</li>
                    <li>ステージ鑑賞中は、大きな声を出さず、周囲の方との距離を確保してください。</li>
                </ul>
            </app-text-area>
        </attention-block>
        <!--  -->
        <nsf-time-table></nsf-time-table>
        <!--  -->
        <app-block>
            <layout-button-center>
                <app-button-ring link="/2022/public/timetable_2022_03.pdf" desc="PDFで見る" type="outer"></app-button-ring>
            </layout-button-center>
        </app-block>
    </layout-wrap-main>
</template>

<script>
export default {
    data() {
        return {
            pageTitle: 'タイムテーブル',
        }
    },
    head() {
        return {
            title: 'タイムテーブル',
            meta: [
                { hid: 'description', name: 'description', content: 'WEAVEのステージのタイムテーブルをご確認いただけます。ステージの各演目についての紹介も掲載しています。個性あふれる華やかなステージをお楽しみください。' },
            ]
        }
    },
}
</script>

<style lang="scss" scoped>
</style>
