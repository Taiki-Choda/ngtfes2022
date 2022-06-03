<template>
    <app-heading-block title="直近の演目">
        <app-timetable-venue></app-timetable-venue>
        <div class="timetable__card-wrap">
            <div v-if="allEndA" class="timetable__msg">
                <p>本日終了</p>
            </div>
            <article v-else class="card">
                <h3 class="card__title">{{show1['group-name']}}</h3>
                <aside v-if="show1.hours"><span class="card__label">{{show1['hours'][dateId].start}}〜{{show1['hours'][dateId].end}}</span></aside>
                <p class="card__desc">{{show1['copy-20']}}</p>
            </article>
            <!--  -->
            <div v-if="allEndB" class="timetable__msg">
                <p>本日終了</p>
            </div>
            <article v-else class="card">
                <h3 class="card__title">{{show2['group-name']}}</h3>
                <aside v-if="show2.hours"><span class="card__label">{{show2['hours'][dateId].start}}〜{{show2['hours'][dateId].end}}</span></aside>
                <p class="card__desc">{{show2['copy-20']}}</p>
            </article>
        </div>
        <div class="text-right">
            <nuxt-link class="page-link" to="/timetable">もっと見る ></nuxt-link>
        </div>
        <ul class="list-note">
            <li>タイムテーブルから自動生成しているため、実際の進行状況と異なる場合があります。</li>
        </ul>
    </app-heading-block>
</template>

<script>
export default {
    data() {
        return {
            show1: "",
            show2: "",
            viewTab: 3,
            allEndA: false,
            allEndB: false,
            dateId: "day1",
        }
    },
    mounted() {
        const date = new Date();
        const today = date.getDate();
        const currentHour = date.getHours();
        const currentMin = date.getMinutes();

        let dateId = "day1";
        if (today !== 13 && today !== 14) {
            this.allEndA = true;
            this.allEndB = true;
        } else {
            if (today === 13) {
                dateId = "day1";
            }else if (today === 14) {
                dateId = "day2";
            }
            const currentTime = currentHour * 60 + currentMin;
            this.dateId = dateId;

            let closestTimeA = 1440;
            let closestShowA = "";

            let closestTimeB = 1440;
            let closestShowB = "";

            function timeToMin(time) {
                const hour = Number(time.split(':')[0]);
                const min = Number(time.split(':')[1]);
                const res = hour * 60 + min;
                return res;
            }
            this.$axios.get('/api/stage.json').then((response) => {
                const res = response.data;
                res.forEach(showInfo => {
                    const show = JSON.parse(JSON.stringify(showInfo));
                    if(show.hours[dateId].show) {
                        const showEndTime = timeToMin(show.hours[dateId].end);
                        const minUntilEnd = (showEndTime - currentTime);
                        if (show.venue === "講堂") {
                            if(closestTimeA > minUntilEnd && minUntilEnd >= 0) {
                                    closestTimeA = minUntilEnd;
                                    closestShowA = show;
                                }
                        } else if(closestTimeB > minUntilEnd && minUntilEnd >= 0) {
                            closestTimeB = minUntilEnd;
                            closestShowB = show;
                        }
                    }
                });
                if(closestShowA === "") {
                    this.allEndA = true;
                } else {
                    this.show1 = closestShowA;
                }
                if(closestShowB === "") {
                    this.allEndB = true;
                } else {
                    this.show2 = closestShowB;
                }
            }).catch(() => {
                //  Jsonを取得できなかった場合
            });
        }
    },
    methods: {
    }
}
</script>

<style lang="scss" scoped>
.timetable {
    &__msg {
        width: calc(50% - 0.5rem);
        text-align: center;
        p {
            font-weight: bold;
            color: #aaa;
            margin-top: 0;
        }
    }
    &__card-wrap {
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-between;
    }
}
.card {
    padding: 1.5rem;
    box-shadow: $box-shadow;
    border-radius: 7px;
    width: calc(50% - 0.5rem);
    &__label {
        font-size: 1rem;
        background-image: linear-gradient(125deg, #21b7fd -10%, #29c5bb 110%);
        color: #fff;
        padding: 4px 10px;
        border-radius: 5px;
        vertical-align: 1px;
        letter-spacing: -0.03em;
    }
    &__title {
        font-size: 1.1rem;
        margin: 0;
        padding-bottom: 0.35rem;
        letter-spacing: -0.03em;
    }
    &__sub-info {
        margin: 0;
        font-size: 0.95rem;
        font-weight: normal;
        color: #7c7c7c;
    }
    &__slash {
        position: relative;
        padding: 0 9px;
        &::before {
            content: '';
            position: absolute;
            top: 1px;
            left: 8.5px;
            height: calc(100% - 2px);
            width: 1.5px;
            border-radius: 2px;
            background-color: #7c7c7c;
            transform: rotate(25deg);
        }
    }
    &__table-desc {
        font-size: 0.75rem;
        color: #7c7c7c;
    }
    &__desc {
        font-size: 0.88rem;
        color: #292929;
        margin-top: 1rem;
    }
}
.text-right {
    margin: $normal-margin 0;
}
</style>
