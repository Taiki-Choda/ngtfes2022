<template>
    <article>
        <app-block>
            <layout-row>
                <div class="sort__buttons">
                    <button class="sort__date" :class="{'active':viewTab === 1}" @click="changeView(1);">5/13 Fri.</button>
                    <button class="sort__date" :class="{'active':viewTab === 2}" @click="changeView(2);">5/14 Sat.</button>
                </div>
            </layout-row>
            <article class="timetable-wrap">
                <app-timetable-venue></app-timetable-venue>
                <div class="timetable__card-wrap" :class="{'active':viewTab === 1}">
                    <app-timetable-card
                    v-for="(show,i) in shows1"
                    :key="show.id"
                    :index="i"
                    :venue="show.venue"
                    :kind="show.kind"
                    :name="show['group-name']"
                    :start="show.hours.start"
                    :end="show.hours.end"
                    @openModal="openModal(show)"
                    ></app-timetable-card>
                </div>
                <div class="timetable__card-wrap" :class="{'active':viewTab === 2}">
                    <app-timetable-card
                    v-for="(show,n) in shows2"
                    :key="show.id"
                    :index="n"
                    :venue="show.venue"
                    :kind="show.kind"
                    :name="show['group-name']"
                    :start="show.hours.start"
                    :end="show.hours.end"
                    @openModal="openModal(show)"
                    ></app-timetable-card>
                </div>
            </article>
        </app-block>
        <app-modal ref="showModal"></app-modal>
    </article>
</template>

<script>
export default {
    data() {
        return {
            shows1: Array,
            shows2: Array,
            viewTab: 3,
        }
    },
    mounted() {
        this.$axios.get('/2022/api/stage.json').then((response) => {
            const day1 = [];
            const day2 = [];
            //  取得できたら、res
            const res = response.data;
            res.forEach(show => {
                if (show.hours.day1.show === true) {
                    const item = JSON.parse(JSON.stringify(show));
                    item.hours = item.hours.day1;
                    day1.push(item);
                }
                if (show.hours.day2.show === true) {
                    const item = JSON.parse(JSON.stringify(show));
                    item.hours = item.hours.day2;
                    day2.push(item);
                }
            });
            this.shows1 = this.sort(day1);
            this.shows2 = this.sort(day2);
        }).catch(() => {
            //  Jsonを取得できなかった場合
        });
    },
    created() {
        this.viewTab = 2;
    },
    methods: {
        changeView(date) {
            this.viewTab = date;
        },
        openModal(info) {
            this.$refs.showModal.openModal(info);
        },
        sort(array) {
            array.sort((a,b) => {
                const aTime = this.toMin(a.hours.start);
                const bTime = this.toMin(b.hours.start);
                if(aTime < bTime) return -1;
                if(aTime > bTime) return 1;
                return 0;
            });
            return array;
        },
        toMin(time) {
            const hour = Number(time.split(':')[0]);
            const min = Number(time.split(':')[1]);
            const res = hour * 60 + min;
            return res;
        }
    }
}
</script>

<style lang="scss" scoped>
.timetable-wrap {
    width: calc(100% - 6.5rem);
    margin-left: 4.85rem;
    @include tablet {
        width: 80%;
        max-width: 800px;
        margin: 0 auto;
    }
}
.timetable {
    &__card-wrap {
        position: relative;
        display: none;
        height: 800px;
        &.active {
            display: block;
        }
    }
}
</style>
