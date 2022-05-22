<template>
    <app-block class="pickup">
        <div v-for="(link,index) in links" :key="index" class="pickup__button" role="link" tabindex="0" :aria-label="link.title+'を見る'">
            <h3 class="pickup__button-title">{{link.title}}</h3>
            <nuxt-link class="pickup__button-link" :to="link.to"></nuxt-link>
        </div>
    </app-block>
</template>

<script>
    export default {
        data(){
            return {
                links: [
                    {
                        title:"マップ",
                        to:"/map"
                    },
                    {
                        title:"タイムテーブル",
                        to:"/timetable"
                    },
                    {
                        title:"店舗",
                        to:"/booth"
                    },
                    {
                        title:"企画",
                        to:"/events/"
                    },
                    {
                        title:"コンセプト",
                        to:"/concept"
                    },
                ]
            }
        },
        destroyed() {
        },
        methods: {
        },
    }
</script>

<style lang="scss" scoped>
.pickup {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem 1.5rem;
    &__button {
        position: relative;
        width: calc(50% - 0.75rem);
        border-radius: 7px;
        text-align: center;
        padding: 1rem 0rem;
        box-shadow: $box-shadow;
        background-color: rgba(255, 255, 255, 0.85);
        backdrop-filter: blur(2px);
    }
    &__button-title {
        font-weight: bold;
        margin: 0;
    }
    &__button-link {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }
}
</style>
