<template>
  <layout-wrap-main>
        <app-block-normal>
                <app-heading-cool title="安心して楽しめる文化祭のために" sub="Health Safety"></app-heading-cool>
                <!--  -->
                <!-- <app-picture-full :src="require(`@/assets/images/safety-mind-logo_02.jpg`)" alt='セーフティーマインドのロゴ'></app-picture-full> -->
                <!--  -->
                <p class="feature-copy">
                    <span class="text-nowrap">私たち</span><span class="text-nowrap">文化祭スタッフは</span><br><span class="text-nowrap">全ての方が安心して</span><span class="text-nowrap">文化祭を楽しめるよう</span><br><span class="text-nowrap">常に安全管理を</span><span class="text-nowrap ja-narrow">重要課題として認識し、</span><br><span class="text-nowrap">想定されるリスクを</span><br><span class="text-nowrap">限りなくゼロに</span><span class="text-nowrap ja-narrow">近づけます。</span>
                </p>
        </app-block-normal>
        <attention-block title="ご家族｜来場予約が必要です">
            <app-text-area>
                <p>現状の感染状況を鑑み、本年度の来場対象者は「在校生の同居ご家族」のみと決定いたしました。</p>
                <p>対象の方のご入場には、来場予約が必要です。詳しくは専用ページをご確認ください。</p>
            </app-text-area>
            <layout-button-center>
                <app-button-ring link="/covid-19/advance-reservation" desc="入場予約について"></app-button-ring>
            </layout-button-center>
        </attention-block>
        <app-heading-block title="感染拡大防止策">
            <app-text-area>
                <p>全ての方が安心して文化祭を楽しむことができるよう、文化祭スタッフの規定する「感染拡大防止策」を遵守してください。</p>
                <p>スタッフの指示や「感染拡大防止策」にご協力いただけない場合には、ご退出いただきます。</p>
                <p>当日、衛生安全の確保が困難と判断した場合、やむを得ず開催内容を変更する場合がございます。</p>
            </app-text-area>
            <app-heading-mini title="マスク着用">
                <p>常に、鼻と口がしっかりと覆われた状態で、正しく着用してください<br>※所定の飲食スペースでの飲食時を除く</p>
            </app-heading-mini>
            <app-heading-mini title="飲食について">
                <p>食べ歩きは禁止します。必ずイートインスペース（会議室/3F教室）をご利用ください<br>食事中の会話はお控えください</p>
            </app-heading-mini>
            <app-heading-mini title="距離の確保">
                <p>周囲の方と十分な距離をとり、密集することがないよう注意してください<br>※待ち列・鑑賞スペースでは、足下の目印にそって並んでください</p>
            </app-heading-mini>
            <app-heading-mini title="手指消毒">
                <p>模擬店への入室時など各所での手指消毒を徹底してください<br>併せて定期的に、お手洗いで十分な手指の洗浄を行ってください</p>
            </app-heading-mini>
            <app-heading-mini title="体調管理">
                <p>体調の異変を感じた場合は、お近くの教員・スタッフにお声がけいただくか、保健室へお越しください。熱中症にも十分ご注意ください。</p>
            </app-heading-mini>
            <app-heading-mini title="講堂ステージ">
                <p>講堂ステージの客席数には制限を設けています。<br>混雑状況によりご鑑賞いただけない可能性がございます。ご了承ください。</p>
            </app-heading-mini>
            <ul class="list-note">
                <li>開催に際しては徹底した衛生管理を行います。ただし、来場により感染しないことを保証するものではありません。</li>
                <li>今後の状況によっては開催内容の変更・中止となる場合があります。</li>
            </ul>
        </app-heading-block>
        <!--  -->
        <app-heading-block title="基本的な感染対策">
            <app-text-area>
                <p>日頃から基本的な感染対策にご協力ください。</p>
                <ul>
                    <li>正しいマスクの着用</li>
                    <li>頻繁な手指洗浄・消毒</li>
                    <li>身体的距離の確保</li>
                    <li>定期的な換気</li>
                    <li>飲食時・大声での会話を控える</li>
                </ul>
            </app-text-area>
        </app-heading-block>
  </layout-wrap-main>
</template>

<script>
import LayoutWrapMain from '../../components/Layout/LayoutWrapMain.vue'
export default {
  components: { LayoutWrapMain },
    data(){
        return {
            pageTitle:'新型コロナウイルスについて',
        }
    },
    head() {
        return {
            title: '安全してお楽しみいただくために',
            meta: [
                { hid: 'description', name: 'description', content: '長田高校文化祭2022「WEAVE」の開催に際しては徹底した衛生管理を行います。ご来場の際は感染拡大防止策を遵守してください。一般の方のご来場についてもこちらでご案内しています。' },
            ]
        }
    },
}
</script>

<style lang="scss">
.feature-copy {
    font-size: calc(1.05rem + 0.2vw);
    line-height: 2em;
    font-weight: bold;
    color: #3f3f3f;
}
</style>
