<template>
    <div class="modal" :class="{'active':stmt === 'open','close':stmt === 'close','animating':stmt === 'animating'}">
        <div class="modal__inner">
            <article class="modal__content">
                <app-title v-if="type==='booth'" :title="info['title']"></app-title>
                <app-title v-else :title="info['group-name']"></app-title>
                <app-text-area>
                    <p v-html="info['copy-60']"></p>
                    <!-- <p v-html="info['copy-100']"></p> -->
                </app-text-area>
                <app-price-table v-if="info.menu && info.menu.sell" :items="info.menu.item"></app-price-table>
            </article>
        </div>
        <app-close-button :tabindex="tabindex" @click.native="closeModal"></app-close-button>
        <div class="modal__overlay" @click="closeModal"></div>
    </div>
</template>

<script>
export default {
    props: {
        type: {
            type: String,
            default: "booth",
        }
    },
    data(){
        return {
            stmt: 'close',
            info: Object,
            tabindex: -1,
        }
    },
    methods: {
        openModal(info) {
            this.stmt = 'open';
            this.info = info;
            this.tabindex = 0;
            this.$noScroll();
        },
        closeModal() {
            this.tabindex = -1;
            this.stmt = 'animating';
            setTimeout(() => {
                this.stmt = 'close';
                this.info = {};
            }, 750);
            this.$returnScroll();
            this.$emit('modalClose');
        },

    }
}

</script>

<style lang="scss" scoped>
.modal {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 9999;
    visibility: visible;
    opacity: 1;
    &__content {
        position: absolute;
        left: 50%;
        top: 50%;
        width: 90%;
        max-width: 500px;
        max-height: 70vh;
        padding: 3em;
        border-radius: 5px;
        background:#fff;
        z-index:10;
        overflow: scroll;
    }
    &__overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
    &.close {
        visibility: hidden;
        opacity: 0;
        .modal__content {
            opacity: 0;
            transform: translate(-50%,-15%);
            transition: transform 0.75s cubic-bezier(0.680, -0.550, 0.215, 1.550), opacity 0.65s cubic-bezier(0.680, -0.550, 0.215, 1.550);
        }
        .modal__overlay {
            background: rgba(0, 0, 0, 0);
            backdrop-filter: blur(0px);
            animation: backgroundOpen 0.5s ease 0s backwards;
        }
    }
    &.active {
        .modal__content {
            opacity: 1;
            transform: translate(-50%,-50%);
            transition: transform 0.75s cubic-bezier(0.680, -0.550, 0.215, 1.550), opacity 0.65s cubic-bezier(0.680, -0.550, 0.215, 1.550);
        }
        .modal__overlay {
            background: rgba(0, 0, 0, 0.15);
            backdrop-filter: blur(6px);
            transition: background 0.75s ease 0s, backdrop-filter 0.5s ease 0s;
        }
    }
    &.animating {
        .modal__content {
            transform: translate(-50%,-15%);
            opacity: 0;
            transition: transform 0.75s cubic-bezier(0.680, -0.550, 0.215, 1.550), opacity 0.65s cubic-bezier(0.680, -0.550, 0.215, 1.550);
        }
        .modal__overlay {
            background: rgba(0, 0, 0, 0);
            backdrop-filter: blur(0px);
            transition: background 0.75s ease, backdrop-filter 0.5s ease;
            transition-delay: 0.2s;
        }
    }
}
.active {
    .close-button {
        opacity: 1;
    }
}
.close-button {
    position: absolute !important;
    top: 5%;
    right: 5%;
    opacity: 0;
    transition: opacity 0.3s ease 0s;
}
</style>
