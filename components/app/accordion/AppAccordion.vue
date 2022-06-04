<template>
    <section class="accordion">
        <button class="accordion__title" type="button" @click="toggle">{{title}}</button>
        <!--  -->
        <div class="accordion__content" :class="{'accordion__content--active':isOpen === true}">
            <slot></slot>
        </div>
    </section>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: 'アコーディオンを開く',
        }
    },
    data(){
        return {
            isOpen: false,
        }
    },
    mounted() {
    },
    methods: {
        toggle() {
            this.isOpen = !this.isOpen;
            this.$emit('accordionSelected',this.isOpen);
        },
        close() {
            this.isOpen = false;
        },
        open() {
            this.isOpen = true;
        }
    }
}
</script>

<style lang="scss" scoped>
.accordion {
    width: 100%;
    border-radius: 10px;
    box-shadow: $box-shadow;
    &__title {
        width: 100%;
        padding: 1.5rem 1.5rem;
        color: #000;
        font-size: 1rem;
        font-weight: bold;
        text-align: left;
        cursor: pointer;
    }
    &__content {
        display: none;
        padding: 0 1.5rem 2rem 1.5rem;
        color: #353535;
        p:first-child {
            margin-top: 0;
        }
        &--active {
            display: block;
        }
    }
}
</style>
