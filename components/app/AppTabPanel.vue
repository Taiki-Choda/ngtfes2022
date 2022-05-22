<template>
    <div class="tab-panel">
        <article
        v-for="panel in panelData"
        :id="panel.id"
        :key="panel.id"
        class="tab-panel__inner"
        role="tabpanel"
        :aria-labelledby="panel.id"
        :aria-hidden="tabState !== panel.id"
        :v-html="tab.content"
        >
        </article>
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
