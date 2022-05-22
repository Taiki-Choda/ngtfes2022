<template>
    <article class="card" role="button" tabindex="0" :aria-label="info.title+'についての情報'">
        <h3 class="card__title"><span class="card__label">{{info.place}}</span>{{info.title}}</h3>
        <h5 class="card__sub-info">{{info.kind}}<span class="card__slash"></span>{{info['group-name']}}</h5>
        <table v-if="info.menu.sell" class="card__table">
            <tbody>
                <tr v-for="(i,index) in info.menu.item" :key="index">
                    <th>{{i.name}}<br><span v-if="i.description !== ''" class="card__table-desc">{{i.description}}</span></th>
                    <td>¥{{i.price}}</td>
                </tr>
            </tbody>
        </table>
        <app-text-area v-else>
            <p class="card__desc">{{cutText(info['copy-60'])}}</p>
        </app-text-area>
    </article>
</template>

<script>
export default {
    props: {
        info: {
            type: Object,
            default: Object,
        }
    },
    data(){
        return {
        }
    },
    methods: {
        cutText(str) {
            let result = str.replace('<br>','');
            if (result.length > 35) {
                result = result.substr(0,35) + '...';
            }
            return result;
        }
    },
}

</script>

<style lang="scss" scoped>
.card {
    width: 100%;
    flex-grow: 1;
    padding: 1.85rem;
    box-shadow: $box-shadow;
    border-radius: 7px;
    flex-basis: 250px;
    &[role=button] {
        cursor: pointer;
    }
    &__label {
        font-size: 1rem;
        background-image: linear-gradient(125deg, #21b7fd -10%, #29c5bb 110%);
        color: #fff;
        padding: 4px 10px;
        border-radius: 5px;
        margin-right: 7px;
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
    &__table {
        width: 100%;
        border-radius: 5px;
        margin-top: 1.5rem;
        color: #353535;
        line-height: 100%;
        th,td {
            padding: 12px 15px;
        }
        th {
            padding-left: 0;
            text-align: left;
            vertical-align: middle;
            font-weight: normal;
        }
        td {
            padding-right: 0;
            text-align-last: right;
            vertical-align: middle;
        }
        tr {
            border-bottom: solid 1px #e9e9e9;
            &:first-child {
                border-top: solid 1px #e9e9e9;
            }
        }
    }
    &__table-desc {
        font-size: 0.75rem;
        color: #7c7c7c;
    }
    &__desc {
        padding-top: $normal-margin;
        color: #353535;
    }
}
</style>
