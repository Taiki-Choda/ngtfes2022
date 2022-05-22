<template>
    <div ref="target" data-show-entry="before">
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: {
    },
    mounted() {
        const target = this.$refs.target;
        const options = {
            root: null,
            rootMargin: "0px 0px -150px",
            threshold: 0,
        };
        this.onIntersect(target, options);
    },
    methods: {
        onIntersect(target, options = {}) {
            const observer = new IntersectionObserver(this.datasetChange, options);
            observer.observe(target);
        },
        datasetChange(entries) {
            for(const e of entries) {
                if (e.isIntersecting) {
                    e.target.dataset.showEntry = "shown";
                }
            }
        }
    }
}
</script>

<style lang="scss" scoped>
</style>
