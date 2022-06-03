<template>
    <footer class="nsf-footer">
        <layout-row>
            <nav class="nsf-footer__nav" aria-label="主要ページへのリンク">
                <ul class="nsf-footer__links">
                    <li v-for="item in pages" :key="item.path">
                        <nuxt-link :to="{path:item.path}">{{item.name}}</nuxt-link>
                    </li>
                </ul>
            </nav>
            <section class="nsf-footer__caption">
                <nuxt-link  class="nsf-footer__logo" to="/">
                    <img alt="Vue logo" src="@/assets/images/logo/main_black.svg" width="192" height="172">
                </nuxt-link>
                <p class="nsf-footer__title">長田高校文化祭<span class="half-width-fit">2022</span><br>WEAVE</p>
            </section>
            <section class="nsf-footer__copyright" aria-label="コピーライト">
                <p>開催に際しては徹底した衛生管理を行いますが、来場により感染しないことを保証するものではありません。<br>スタッフの指示には必ず従い、「感染拡大防止策」を遵守してください。<br>&copy;2022 Nagata School Festival All rights reserved.</p>
            </section>
        </layout-row>
    </footer>
</template>

<script>
    export default {
        data(){
            return {
                pages: [
                    {
                        path: '/',
                        name: 'トップ'
                    },
                    {
                        path: '/use-guide',
                        name: '利用規約'
                    },
                    {
                        path: '/privacy-policy',
                        name: 'プライバシー'
                    },
                    {
                        path: '/site-map',
                        name: 'サイトマップ'
                    },
                    {
                        path: '/covid-19/health-safety',
                        name: '衛生安全'
                    },
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
.nsf-footer {
    padding: 3.5rem 0 2.5rem 0;
    background-color: #f7f7f7;
    &__caption {
        margin: 3.5rem 0 0;
        display: flex;
        flex-wrap: nowrap;
        align-items: center;
        justify-content: left;
    }
    &__nav {
        border: solid 1px #dedede;
        border-width: 1px 0 1px 0;
    }
    &__links {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-around;
        gap: 0 2rem;
        margin: 0;
        padding: 1.15rem 0;
        list-style: none;
        li {
            margin: 0;
            padding: 0.45em 0;
            text-align: center;
        }
    }
    &__title {
        margin: 0;
        letter-spacing: 0.05em;
        padding: 0 0 0 20px;
        font-weight: bold;
        flex-grow: 2;
    }
    &__logo {
        width: 50%;
        max-width: 120px;
        img {
            width: 100%;
        }
    }
    &__copyright {
        margin-top: 1.85rem;
        p {
            font-size: 11.5px;
        }
    }
}
</style>
