<template>
    <div class="tab-menu" role="tablist">
        <button
        :v-for="tab in tabData"
        class="tabs__button"
        type="button"
        role="tab"
        :aria-controls="tab.id"
        :aria-selected="tabStmt === tab.id"
        @click="handleTabChange($event)"
        >
        {{tab.title}}
        </button>
    </div>
</template>

<script>
export default {
    props: {
        tabData: {
            type: Array,
            required: true,
        },

        tabState: {
            type: String,
            required: true,
        },
    },
    methods: {
        handleTabChange(event) {
            const element = event.currentTarget
            const tabState = element.getAttribute('aria-controls')

            this.$emit('onTabChange', tabState)
        },
    },
}
</script>

<style lang="scss" scoped>

</style>
