<template>
    <div>
        <div
        class="timetable-card"
        :class="{'timetable-card--left':venue === '講堂','timetable-card--right':venue ==='野外'}"
        :style="styleObject"
        role="button"
        tabindex="0"
        :aria-label="name"
        @click="openModal()"
        >
            <div
            class="timetable-card__kind"
            :class="{'staff':kind === '文スタ','club':kind === '部活'}"
            >
                <p>{{kind}}</p>
            </div>
            <div class="timetable-card__name">
                <h5>{{name}}</h5>
            </div>
        </div>
        <!--  -->
        <div class="timetable-card__liner" :style="styleObject"></div>
        <div class="timetable-card__time" :style="styleObject" :aria-label="name+'の開始時刻'">{{start}}</div>
    </div>
</template>

<script>
export default {
    props: {
        index: {
            type: Number,
            default: 1,
        },
        venue: {
            type: String,
            default: '野外',
        },
        kind: {
            type: String,
            default: '種類',
        },
        name: {
            type: String,
            default: 'ショー名',
        },
        start: {
            type: String,
            default: '9:00',
        },
        end: {
            type: String,
            default: '10:00',
        }
    },
    data(){
        return {
            scale: 2,
        }
    },
    computed: {
        styleObject() {
            function toMin(time) {
                const hour = Number(time.split(':')[0]);
                const min = Number(time.split(':')[1]);
                const res = hour * 60 + min;
                return res;
            }
            const top = (toMin(this.start) - 60 * 9) * this.scale + 1;
            const height = (toMin(this.end) - toMin(this.start)) * this.scale - 4;
            const style = {
                top: top + 'px',
                height: height + 'px',
                animationDelay: String(this.index) * 0.05 + 's',
            }
            return style;
        }
    },
    methods: {
        openModal() {
            this.$emit('openModal');
        }
    }
}
</script>

<style lang="scss" scoped>
.timetable-card {
    position: absolute;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: flex-start;
    background-color: #ededed;
    width: 48%;
    min-height: 2.5rem;
    border-radius: 5px 0 8px 0;
    overflow: hidden;
    cursor: pointer;
    z-index: 10;
    &--left {
        left: 0;
    }
    &--right {
        right: 0;
    }
    &__kind {
        display: flex;
        align-items: center;
        background-color: #00C1C2;
        width: 57px;
        height: 100%;
        p {
            margin: 0;
            width: 100%;
            text-align: center;
            font-weight: bold;
            font-size: 0.75rem;
            white-space: nowrap;
            color: #fff;
        }
        &.club {
            background-color: #8E5AE3;
        }
        &.staff {
            background-color: #EA5D5F;
        }
    }
    &__name {
        display: flex;
        align-items: center;
        padding: 0 0.75rem;
        h5 {
            margin: 0;
            font-weight: bold;
            font-size: 0.85rem;
            line-height: 120%;
        }
    }
    &__liner {
        position: absolute;
        width: calc(100% + 10px);
        right: 0;
        border: dotted 1px #aaa;
        border-width: 1px 0 0;
        min-height: 3rem;
        z-index: -1;
        transform: translateY(-2.5px);
    }
    &__time {
        position: absolute;
        right: calc(100% + 20px);
        font-weight: bold;
        transform: translateY(-1.1rem);
        letter-spacing: -0.03em;
        font-style: oblique;
        font-size: 1.1rem;
    }
}
.active {
    .timetable-card {
        animation: cardShow 1s ease 0s both;
    }
    .timetable-card__time {
        animation: cardShow 0.85s ease 0s both;
    }
    .timetable-card__liner {
        animation: lineShow 0.85s ease 0s both;
    }
}
@keyframes cardShow {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}
@keyframes lineShow {
    0% {
        width: 0%;
    }
    100% {
        width: calc(100% + 10px);
    }
}
</style>
