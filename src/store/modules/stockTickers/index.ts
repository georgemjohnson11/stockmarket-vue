import { Module } from 'vuex';
import { StockTickersState } from './state';
import { RootState } from '@/store/state';
import { makeActions } from './actions';
import { mutations } from './mutations';
import { StockTickersService } from '@/data/stockTickers/stockTickers-service';

export const stockTickers: Module<StockTickersState, RootState> = {
  namespaced: true,
  actions: makeActions(new StockTickersService()), // TODO: move Service initiation
  mutations,
  state: {
    stockTickers: []
  }
};
