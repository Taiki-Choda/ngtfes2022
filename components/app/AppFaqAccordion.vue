<template>
    <app-block class="accordion-wrap">
        <div v-for="(item,index) in content" :key="item.title" class="accordion" :class="{'active':isOpen[index]}">
            <button class="accordion__title" type="button" @click="toggle(index);">
                {{item.title}}
            </button>
            <!--  -->
            <div class="accordion__content" :class="{'active':isOpen[index]}">
                <app-text-area>
                    <p v-for="(text,i) in item.texts" :key="i" v-html="text"></p>
                </app-text-area>
            </div>
        </div>
    </app-block>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: 'アコーディオンを開く',
        },
        content: {
            type: Array,
            required: true,
        }
    },
    data(){
        return {
            isOpen: [],
        }
    },
    mounted() {
        this.isOpen = Array(this.content.length).fill(false);
    },
    methods: {
        toggle(index) {
            if (this.isOpen[index] === false) {
                this.isOpen = Array(this.content.length).fill(false);
                this.isOpen[index] = true;
            } else {
                this.isOpen = Array(this.content.length).fill(false);
            }
        },
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
        &.active {
            display: block;
        }
    }
}
</style>
