import { ActionTree } from 'vuex';
import { StockTickersState, StockTicker } from './state';
import { RootState } from '@/store/state';
import { StockTickersEndpoint } from '@/data/stockTickers/stockTickers-endpoint';

export const types = {
  LOAD_STOCKTICKERS: 'stockTickers/loadStockTickers',
  ADD_STOCKTICKER: 'stockTickers/add',
  UPDATE_STOCKTICKER: 'stockTickers/update',
  REMOVE_STOCKTICKER: 'stockTickers/remove'
};

export const makeActions = (stockTickersEndpoint: StockTickersEndpoint): ActionTree<StockTickersState, RootState> => {
  return {
      async loadStockTickers({ commit }): Promise<void> {
          const stockTickers = await stockTickersEndpoint.getAll();
          commit('setStockTickers', stockTickers);
      },
      async add({ commit }, stockTickers: StockTicker): Promise<void> {
          const addedStockTicker = await stockTickersEndpoint.add(stockTickers);
          commit('add', addedStockTicker);
      },
      async update({ commit }, stockTicker: StockTicker): Promise<void> {
          const updatedStockTicker = await stockTickersEndpoint.update(stockTicker);
          commit('update', updatedStockTicker);
      },
      async remove({ commit }, stockTickerId: string): Promise<void> {
          await stockTickersEndpoint.remove(stockTickerId);
          commit('remove', stockTickerId);
      }
  };
};
