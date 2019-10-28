import { Module } from 'vuex';
import { StockTickersState } from './state';
import { RootState } from '@/store/state';
import { actions } from './actions';
import { mutations } from './mutations';

export const stockTickers: Module<StockTickersState, RootState> = {
    namespaced: true,
    actions,
    mutations,
    state: {
        stockTickers: []
    }
};