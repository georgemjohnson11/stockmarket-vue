<template>
  <span v-if='isInEditMode'>
    <input
      v-model='editableStockTicker.name'
      placeholder='Enter a name for the stockTicker'
    />
    <button v-on:click='save()'>Save</button>
    <button v-on:click='discard()'>Discard</button>
    <button v-on:click='remove()'>Remove</button>
  </span>
  <span v-else>
    {{ stockTicker.name }}
    <button v-on:click='edit()'>Edit</button>
  </span>
</template>

<script lang='ts'>
import { Component, Vue, Prop } from 'vue-property-decorator';
import { StockTickerViewModel } from './models';
@Component({
  components: {}
})
export default class StockTickerDetail extends Vue {
  @Prop() private stockTicker!: StockTickerViewModel;
  private isInEditMode: boolean = false;
  private editableStockTicker: StockTickerViewModel | null = null;
  private edit(): void {
    this.isInEditMode = true;
    this.editableStockTicker = { ...this.stockTicker };
  }
  private save(): void {
    this.$emit('update', this.editableStockTicker);
    this.discard();
  }
  private discard(): void {
    this.isInEditMode = false;
    this.editableStockTicker = null;
  }
  private remove(): void {
    this.$emit('remove', this.editableStockTicker!.id);
  }
}
</script>
