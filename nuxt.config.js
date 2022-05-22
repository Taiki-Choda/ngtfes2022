export default {
    // Target: https://go.nuxtjs.dev/config-target
    target: 'static',
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        titleTemplate: '%s｜WEAVE｜長田高校文化祭2022',
        htmlAttrs: {
            lang: 'ja',
        },
        base: {
            href: 'router.base',
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '長田高校の文化祭2022は「WEAVE」がテーマ。私たち自身の無限の色が織物のように出逢い、生み出される最高の時間を共に。一縷の想いがいつか大きな帆を張って！徹底した新型コロナウイルス感染症拡大防止対策を講じて開催します。' },
            { name: 'robots', content: 'INDEX,FOLLOW' },
            { name: 'SKYPE_TOOLBAR', content: 'SKYPE_TOOLBAR_PARSER_COMPATIBLE' },
            { name: 'keywords', content: '文化祭,長田高校,WEAVE,長田文化祭,高校,神戸,イベント,青春,中学生' },
            { name: 'theme-color', content: '#ededed' },
            { name: 'author', content: 'Nagata School Festival Staff' },
            { name: 'cpr', content: '©︎2022 Nagata School Festival All rights reserved.' },
            { name: 'title', content: 'WEAVE｜長田高校文化祭2022' },
            { name: 'language', content: 'ja' },
            // ------------------
            { property: 'og:title', content: 'WEAVE｜長田高校文化祭2022' },
            { property: 'og:type', content: 'website' },
            { property: 'og:image', content: 'https://ngtfes.com/2022/ogp/ogp_summary.jpg' },
            { property: 'og:url', content: 'https://www.ngtfes.com/2022/' },
            { property: 'og:description', content: '長田高校の文化祭2022は「WEAVE」がテーマ。私たち自身の無限の色が織物のように出逢い、生み出される最高の時間を共に。一縷の想いがいつか大きな帆を張って！徹底した新型コロナウイルス感染症拡大防止対策を講じて開催します。' },
            { property: 'og:site_name', content: 'WEAVE｜長田高校文化祭2022' },
            // ------------------
            { name: 'twitter:card', content: 'summary' },
            { name: 'twitter:site', content: '@ngt_fes_staff' },
            { name: 'twitter:creator', content: '@ngt_fes_staff' },
            { name: 'twitter:title', content: 'WEAVE｜長田高校文化祭2022' },
            { name: 'twitter:description', content: '長田高校の文化祭2022は「WEAVE」がテーマ。私たち自身の無限の色が織物のように出逢い、生み出される最高の時間を共に。一縷の想いがいつか大きな帆を張って！徹底した新型コロナウイルス感染症拡大防止対策を講じて開催します。' },
            { name: 'twitter:url', content: 'https://www.ngtfes.com/2022/' },
            { name: 'twitter:image', content: 'https://ngtfes.com/2022/ogp/ogp_summary.jpg' },
        ],
        link: [
            { rel: 'shortcut icon', href: 'favicon/favicon.ico' },
            { rel: 'icon', type: 'image/png', sizes: '16x16', href: 'favicon/favicon_16.png' },
            { rel: 'icon', type: 'image/png', sizes: '32x32', href: 'favicon/favicon_32.png' },
            { rel: 'icon', type: 'image/png', sizes: '192x192', href: 'favicon/android-touch-icon.png' },
            { rel: 'icon', type: 'image/png', sizes: '192x192', href: 'favicon/android-chrome_192x192.png' },
            { rel: 'icon', type: 'image/png', sizes: '512x512', href: 'favicon/android-chrome_512x512.png' },
            { rel: 'apple-touch-icon', href: 'favicon/apple-touch-icon.png' },
            { rel: 'apple-touch-icon', sizes: '57x57', href: 'favicon/apple-touch-icon_57.png' },
            { rel: 'apple-touch-icon', sizes: '72x72', href: 'favicon/apple-touch-icon_72.png' },
            { rel: 'apple-touch-icon', sizes: '114x114', href: 'favicon/apple-touch-icon_114.png' },
            { rel: 'apple-touch-icon', sizes: '144x144', href: 'favicon/apple-touch-icon_144.png' },
        ],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        '@/assets/scss/base.scss',
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        { src: '~/plugins/smooth-scroll.js', mode: 'client' },
        { src: '~/plugins/base.js', mode: 'client' },
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/eslint
        '@nuxtjs/eslint-module',
    ],
    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        '@nuxtjs/style-resources',
        [
            '@nuxtjs/google-gtag',
            {
                id: 'G-7MBCHZ8L4Y', // あなたのGoogleアナリティクスのプロパティID
                // debug: false // 本番環境以外でもGAを有効にしたい場合はtrueに。
            }
        ],
        // Doc: https://github.com/nuxt-community/sitemap-module
        '@nuxtjs/sitemap'   // サイトマップ宣言は常に配列の最終行に書くこと
    ],

    router: {
        base: '/2022/'
    },

    sitemap: {
        hostname: 'https://ngtfes.com',

        // sitemap除外対象
        exclude: [
        ],
        // 動的に生成するページは、明示的に宣言する
        routes: [
        ]
    },

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {
        // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
        baseURL: '/',
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
    },

    generate: {
        dir: '2022',
        fallback: 'error.html',
        subFolders: false,
        // ssr: false,
    },

    // common vars
    styleResources: {
        scss: ['@/assets/scss/variable.scss'],
    },

    //
    globalName: 'nsfApp',
    globals: {
        id: globalName => `${globalName}`,
        nuxt: globalName => `$${globalName}`,
        context: globalName => `${globalName.toUpperCase()}`,
      },

}
