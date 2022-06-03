<template>
    <info-box title='お問い合わせ'>
        <app-text-area>
            <p>{{msg}}</p>
            <address class="address-contact">
                <!--  -->
                <span v-if='tgt==="promotion"'>長田高校文化祭スタッフ コンセプト部 プロモーションパート</span>
                <span v-if='tgt==="team"'>長田高校文化祭スタッフ</span>
                <!--  -->
                <br><a class="page-link" href="mailto:contact@ngtfes.com">contact@ngtfes.com</a>
            </address>
        </app-text-area>
    </info-box>
</template>

<script>

export default {
    components: {
    },
    props: {
        msg: {
            type:String,
            default:'各種お問い合わせは、下記の連絡先にお願いいたします。',
        },
        tgt: {
            type:String,
            default: 'promotion',
        }
    },
    data(){
        return {
        }
    }
}
</script>

<style lang="scss" scoped>
.address-contact {
    font-weight: bold;
}
</style>
