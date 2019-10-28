<template>
  <span v-if="creating">
    <input v-model="stockTicker.Id" placeholder="Enter a name for the stockTicker">
    <button v-on:click="save()">Save</button>
    <button v-on:click="discard()">Discard</button>
  </span>
  <button v-else v-on:click="create()">Create new stockTicker</button>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { StockTickerViewModel } from './models';
@Component({})
export default class CreateStockTicker extends Vue {
  private stockTicker: StockTickerViewModel | null = null;
  private creating: boolean = false;
  private create(): void {
    this.stockTicker = { id: 0, name: '', rowVersion: '' };
    this.creating = true;
  }
  private save(): void {
    this.$emit('add', this.stockTicker);
    this.discard();
  }
  private discard(): void {
    this.creating = false;
    this.stockTicker = null;
  }
}
</script>