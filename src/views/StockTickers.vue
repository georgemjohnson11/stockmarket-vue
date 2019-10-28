<template>
  <StockTickerList v-bind:stockTickers="stockTickers" v-on:update="onUpdate" v-on:remove="onRemove" v-on:add="onAdd" />
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import StockTickerList from '@/components/stockTickers/StockTickerList.vue';
import { StockTickerViewModel } from '@/components/stockTickers/models';
import { types } from '@/store/modules/stockTickers/actions';
import { State, namespace } from 'vuex-class';
@Component({
  components: {
    StockTickerList
  }
})
export default class StockTickers extends Vue {
  @stockTickersModule.State('stockTickers') private stockTickers!: StockTickerViewModel[];
  @stockTickersModule.Action('loadStockTickers') private loadStockTickers!: () => void;

  public mounted(): void {
    // this.$store.dispatch(types.LOAD_STOCKTICKERS); // another way of doing the same
    this.loadStockTickers();
  }
  
  private onUpdate(stockTicker: StockTickerViewModel): void {
    this.$store.dispatch(types.UPDATE_STOCKTICKER, stockTicker);
  }
  private onRemove(stockTickerId: number): void {
    this.$store.dispatch(types.REMOVE_STOCKTICKER, stockTickerId);
  }
  private onAdd(stockTicker: StockTickerViewModel): void {
    this.$store.dispatch(types.ADD_STOCKTICKER, stockTicker);
  }
}
</script>