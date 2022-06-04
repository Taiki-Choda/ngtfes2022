<template>
    <table class="card__table">
        <tbody>
            <tr v-for="(item,index) in items" :key="index">
                <th>{{item.name}}<br><span v-if="item.description !== ''" class="card__table-desc">{{item.description}}</span></th>
                <td>¥{{item.price}}</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
    props: {
        items: {
            type: Array,
            default: Array,
        }
    },
    data(){
        return {
        }
    },
    methods: {
    },
}

</script>

<style lang="scss" scoped>
.card {
    &__table {
        width: 100%;
        border-radius: 5px;
        margin-top: 1.5rem;
        color: #353535;
        line-height: 120%;
        th,td {
            padding: 12px 10px;
        }
        th {
            text-align: left;
            vertical-align: middle;
            font-weight: normal;
        }
        td {
            text-align: right;
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
