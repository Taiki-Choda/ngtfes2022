<template>
    <layout-wrap-main>
        <app-page-title title="サイトマップ">
            <p>WEAVEの公式サイトページ一覧です。<br>下部ページなど一部記載がないページもございます。</p>
        </app-page-title>
        <app-heading-block v-for="group in pageGroups" :key="group.id" :title="group.name">
            <ul class="link-list list-reset">
                <li v-for="page in group.pages" :key="page.id"><nuxt-link :to="page.src">{{page.title}}</nuxt-link></li>
            </ul>
        </app-heading-block>
    </layout-wrap-main>
</template>

<script>
export default {
    data() {
        return {
            pageGroups: [
                {
                    id: 1,
                    name: 'メインページ',
                    pages: [
                        {
                            id: 1,
                            src: '/',
                            title: 'トップ',
                        },
                        {
                            id: 2,
                            src: '/booth',
                            title: '店舗',
                        },
                        {
                            id: 3,
                            src: '/map',
                            title: '地図',
                        },
                        {
                            id: 4,
                            src: '/timetable',
                            title: 'タイムテーブル',
                        },
                        {
                            id: 5,
                            src: '/concept',
                            title: 'コンセプト',
                        },
                        {
                            id: 6,
                            src: '/events/',
                            title: '企画',
                        },
                        {
                            id: 7,
                            src: '/events/photo-contest',
                            title: 'フォトコンテスト',
                        }
                    ]
                },
                {
                    id: 2,
                    name: '新型コロナウイルス関連',
                    pages: [
                        {
                            id: 1,
                            src: '/covid-19/health-safety',
                            title: '安心して楽しめる文化祭のために',
                        },
                        {
                            id: 2,
                            src: '/covid-19/advance-reservation',
                            title: '入場予約について',
                        },
                        // {
                        //     id: 3,
                        //     src: '/',
                        //     title: 'トップページ',
                        // },
                        // {
                        //     id: 4,
                        //     src: '/',
                        //     title: 'トップページ',
                        // }
                    ]
                },
                // {
                //     id: 3,
                //     name: 'スタッフ紹介',
                //     pages: [
                //         {
                //             id: 1,
                //             src: '/team/',
                //             title: 'スタッフ紹介トップ',
                //         },
                //         // {
                //         //     id: 2,
                //         //     src: '/',
                //         //     title: 'トップページ',
                //         // },
                //         // {
                //         //     id: 3,
                //         //     src: '/',
                //         //     title: 'トップページ',
                //         // },
                //         // {
                //         //     id: 4,
                //         //     src: '/',
                //         //     title: 'トップページ',
                //         // }
                //     ]
                // },
                {
                    id: 4,
                    name: 'その他のページ',
                    pages: [
                        {
                            id: 1,
                            src: '/use-guide',
                            title: 'サイト利用規約',
                        },
                        {
                            id: 2,
                            src: '/privacy-policy',
                            title: 'プライバシーポリシー',
                        },
                        {
                            id: 3,
                            src: '/site-map',
                            title: 'サイトマップ',
                        }
                    ]
                },
            ]
        }
    },
    head() {
        return {
            title: 'サイトマップ',
            meta: [
                { hid: 'description', name: 'description', content: '当サイトのページ一覧です。ページはこちらからお探しください。長田高校の文化祭2022は「WEAVE」がテーマ。私たち自身の無限の色が織物のように出逢い、生み出される最高の時間を共に。一縷の想いがいつか大きな帆を張って！徹底した新型コロナウイルス感染症拡大防止対策を講じて開催します。' },
            ]
        }
    },
}
</script>

<style lang="scss" scoped>
.link-list {
    font-weight: bold;
    li {
        margin-top: 0.5em;
    }
    a {
        position: relative;
        color: $link;
        padding-right: 9px;
        &::after {
            position: absolute;
            content: '';
            top: 0.25em;
            right: 0;
            width: 0.4em;
            height: 0.4em;
            border: solid 1px $link;
            border-width: 2px 2px 0 0;
            transform: rotate(45deg);
        }
    }
}
</style>
