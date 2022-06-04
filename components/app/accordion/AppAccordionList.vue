<template>
    <div class="accordion-wrap">
        <app-accordion  v-for="(item,index) in content" :key="index" ref="accordion" :title="item.title" @accordionSelected="accordionToggle($event,index)">
            <app-text-area>
                <p v-for="(text,i) in item.texts" :key="i" v-html="text"></p>
            </app-text-area>
        </app-accordion>
    </div>
</template>

<script>
export default {
    props: {
        content: {
            type: Array,
            default: Array,
        }
    },
    data(){
        return {
        }
    },
    methods: {
        accordionToggle(status,index) {
            // もし開ける操作がされたなら
            if (status === true) {
                // 全てのアコーディオンを閉じる
                for (let i = 0; i < this.$refs.accordion.length; i++) {
                    // 開けたアコーディオンは除く
                    if (i !== index) {
                        const element = this.$refs.accordion[i];
                        element.close();
                    }
                }
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.accordion-wrap {
    display: flex;
    margin: 2rem 0;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem 0;
}
</style>
