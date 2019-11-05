import { StockTickersState, StockTicker } from './state';
import { MutationTree } from 'vuex';

const currentId: string = `GOOG`;

export const mutations: MutationTree<StockTickersState> = {
  setStockTickers(state: StockTickersState, stockTickers: StockTicker[]): void {
    state.stockTickers = [...stockTickers];
  },
  add(state: StockTickersState, stockTicker: StockTicker): void {
    stockTicker.id = currentId;
    state.stockTickers = [...state.stockTickers, stockTicker];
  },
  update(state: StockTickersState, stockTicker: StockTicker): void {
    const index = state.stockTickers.findIndex(g => g.id === stockTicker.id);
    state.stockTickers = [
      ...state.stockTickers.slice(0, index),
      stockTicker,
      ...state.stockTickers.slice(index + 1, state.stockTickers.length)
    ];
  },
  remove(state: StockTickersState, stockTickerId: string): void {
    state.stockTickers = state.stockTickers.filter(g => g.id !== stockTickerId);
  }
};
