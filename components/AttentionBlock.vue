<template>
    <layout-row>
        <article class="attention-block">
                <h3 class="attention-block__title">{{title}}</h3>
                <div class="attention-block__content">
                    <slot></slot>
                </div>
        </article>
    </layout-row>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: '注意事項',
        },
    }
}
</script>

<style lang="scss" scoped>
.attention-block {
    border: solid 2px $attentionTheme;
    border-radius: 4px;
    margin: 3rem 0;
    overflow: hidden;
    &__title {
        font-size: 1.15rem;
        padding: 0.75rem 0.95rem;
        font-weight: bold;
        background-color: $attentionTheme;
        color: #fff;
    }
    &__content {
        padding: 2rem 1.45rem;
    }
}
</style>
