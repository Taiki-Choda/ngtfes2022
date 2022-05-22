<template>
    <layout-wrap-main>
        <app-page-title title="企画紹介">
            <p>「WEAVE」では、たくさんの企画をご用意しています。<br>ぜひご参加ください！</p>
        </app-page-title>
        <app-heading-block title="グッズ販売">
            <app-text-area>
            <p>「WEAVE」をテーマにしたデザインのグッズを販売します！<br>グッズを手に入れて、WEAVE沼に浸っちゃいませんか！？</p>
            </app-text-area>
            <app-detail-mini title="場所">ピロティー</app-detail-mini>
        </app-heading-block>
        <app-heading-block title="ストリートピアノ">
            <app-text-area>
            <p>今年も開催！ストリートピアノ！</p>
            <p>自由にピアノを弾いて、文化祭の思い出の1ページにしてください！素敵な音色をみんなで共有しましょう！</p>
            </app-text-area>
            <app-detail-mini title="場所">足湯</app-detail-mini>
        </app-heading-block>
        <app-heading-block title="B-1グランプリ">
            <app-text-area>
                <p>みなさん耳にしたことはありますか…？このグランプリを。そう、「文化祭グランプリ」略して「B-1グランプリ」！</p>
                <p>ぜひ、自分の"推し"な店舗に投票してくださいね！</p>
                <p>食品模擬・室内模擬の2部門を開催します。クラス全員で作り上げた模擬店で優勝を狙っちゃいましょう！</p>
            </app-text-area>
                <app-detail-mini title="投票場所">３階の階段付近（校門側）</app-detail-mini>
        </app-heading-block>
        <app-heading-block title="運命の赤い糸">
            <app-text-area>
                <p>今年の1年生企画の１つ！<br>自分と同じ番号を持つ運命の相手をあなたは文化祭で出会うことができるのか…</p>
                <p>出会えたら、思い出の1枚を撮って、フォトコンテストに応募してくださいね！</p>
            </app-text-area>
        </app-heading-block>
        <app-heading-block title="寄せ書き">
            <app-text-area>
                <p>思い思いのコメントで「WEAVE」ロゴの周りを埋めつくそう！</p>
            </app-text-area>
                <app-detail-mini title="場所">階段付近</app-detail-mini>
        </app-heading-block>
        <app-heading-block title="フォトコンテスト">
            <app-text-area>
                <p>素敵な写真をシェアしませんか？詳しくは特設ページをご覧ください。</p>
                <p><nuxt-link class="page-link" to="/events/photo-contest">フォトコンテスト詳細 ＞</nuxt-link></p>
            </app-text-area>
        </app-heading-block>
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
            title: '企画紹介',
            meta: [
                { hid: 'description', name: 'description', content: '長田高校文化祭2022「WEAVE」ではたくさんの企画をご用意！ぜひご参加ください！' },
            ]
        }
    },
}
</script>

<style lang="scss">
</style>
