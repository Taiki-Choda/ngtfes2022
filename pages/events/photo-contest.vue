<template>
    <layout-wrap-main>
        <app-page-title title="フォトコンテスト">
            <p>「WEAVE」では、フォトコンテストを開催します！皆さんの素敵な青春がつまった写真を、ぜひシェアしましょう！<br>たくさんのご応募をお待ちしております！</p>
        </app-page-title>
        <app-heading-block title="応募方法">
            <p>写真、個人番号、名前を「<a class="page-link" href="mailto:soumungtfes@gmail.com">soumungtfes@gmail.com</a>」に送信</p>

        </app-heading-block>
        <app-heading-block title="企画詳細">
            <app-detail>
                <dt><app-label-box>対象者</app-label-box></dt>
                <dd>在校生（75回生〜77回生）、教員</dd>
                <dt><app-label-box>募集対象</app-label-box></dt>
                <dd>
                    <app-text-area>
                        <p>長田高校での行事及び学校生活等、長田高校に関することならなんでもOK！</p>
                    </app-text-area>
                    <ul class="list-note">
                        <li>文化祭当日や、修学旅行、六甲山縦走など校外での活動も対象です</li>
                    </ul>
                </dd>
                <dt><app-label-box>賞品</app-label-box></dt>
                <dd>
                    <p><strong>応募してくださった全ての方に参加賞として現像した思い出の1枚をプレゼント！</strong><br>さらに、下記の賞にはそれぞれ景品をご用意しています。</p>
                </dd>
                <dt><app-label-box>審査方法</app-label-box></dt>
                <dd>
                    <app-text-area>
                        <p>ご応募いただいた作品の中から以下の6つの賞を、各担当者が決定します。</p>
                        <ul>
                            <li>最優秀賞（総務パート）</li>
                            <li>優秀賞（2作品・総務パート）</li>
                            <li>校長賞</li>
                            <li>実行委員長賞</li>
                            <li>副実行委員長賞</li>
                        </ul>
                    </app-text-area>
                </dd>
            </app-detail>
        </app-heading-block>
        <app-heading-block title="注意事項">
            <app-text-area>
                <p>ご応募の際は以下の注意事項を必ずご確認ください。<br>応募いただいた時点で、以下内容に同意したものとみなします。</p>
                <ul>
                    <li>マナーを守って撮影してください。不適切な写真は応募対象外となります。</li>
                    <li>応募する作品の被写体の方には必ず許可を得てください。</li>
                    <li>応募された作品は文化祭当日、階段に掲示します。</li>
                    <li>1人につき3枚まで応募できます。</li>
                    <li>各賞の写真は重複しないよう選出します。</li>
                    <li>当日も作品を随時募集します。ただし、5月14日の12時までです。</li>
                    <li>カメラでも携帯でもOKです。写真の加工は原型をとどめる範囲内であればOK！</li>
                    <li>表彰は、文化祭2日目の閉会式にて行います。</li>
                    <li>企画への参加によって、応募者・被写体を含む関係者が受けた精神的又は社会的な損害について、文化祭スタッフはその一切を保証しません。</li>
                    <li><nuxt-link class="page-link" to="/privacy-policy">プライバシーポリシー</nuxt-link>も必ずご確認ください。</li>
                </ul>
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
            title: 'フォトコンテスト',
            meta: [
                { hid: 'description', name: 'description', content: '長田高校文化祭2022「WEAVE」のフォトコンテストでは、みなさんの青春がつまった写真をお待ちしています！' },
            ]
        }
    },
}
</script>

<style lang="scss">
</style>
