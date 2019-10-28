<template>
  <ul>
    <li v-for="stockTicker in stockTickers" v-bind:key="stockTicker.id">
      <StockTickerDetail v-bind:stockTicker="stockTicker" v-on:update="onUpdate" v-on:remove="onRemove"/>
    </li>
    <li><CreateStockTicker v-on:add="onAdd"/></li>
  </ul>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import StockTickerDetail from './StockTickerDetail.vue';
import CreateStockTicker from './CreateStockTicker.vue';
import { StockTickerViewModel } from '@/components/stockTickers/models';
@Component({
  components: {
    StockTickerDetail,
    CreateStockTicker
  }
})
export default class StockTickerList extends Vue {
  @Prop() private stockTickers!: StockTickerViewModel[];
  private onUpdate(stockTicker: StockTickerViewModel): void {
    this.$emit('update', stockTicker);
  }
  private onRemove(stockTickerId: number): void {
    this.$emit('remove', stockTickerId);
  }
  private onAdd(stockTicker: StockTickerViewModel): void {
    this.$emit('add', stockTicker);
  }
}
</script>