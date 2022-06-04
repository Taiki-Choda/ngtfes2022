<template>
    <app-block-normal>
        <!-- <layout-row>
            <div class="sort__buttons">
                <button class="sort__date" :class="{'active':viewTab === 1}" @click="changeView(1);">食品模擬</button>
                <button class="sort__date" :class="{'active':viewTab === 2}" @click="changeView(2);">教室模擬</button>
                <button class="sort__date" :class="{'active':viewTab === 3}" @click="changeView(3);">展示</button>
            </div>
        </layout-row> -->
        <div class="card-wrap">
            <app-card-booth v-for="(booth,index) in booths" :key="index" :info="booth" @click.native="openModal(booth);"></app-card-booth>
        </div>
        <app-modal ref="boothModal" type="booth"></app-modal>
    </app-block-normal>
</template>

<script>
export default {
  data () {
    return {
      booths: [],
      viewTab: 0,
    }
  },
  mounted () {
    this.$axios.get('/2022/api/booth.json').then((response) => {
        //  取得できたら、Dataに入れる
        this.booths = JSON.parse(JSON.stringify(response.data));
      }).catch(() => {
        //  Jsonを取得できなかった場合
      })
  },
  methods: {
    openModal(info) {
        this.$refs.boothModal.openModal(info);
    }
  }
}
</script>

<style lang="scss" scoped>
.card-wrap {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: $cards-gap;
}
</style>
