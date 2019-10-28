import { ActionTree } from 'vuex';
import { StockTickersState, StockTicker } from './state';
import { RootState } from '@/store/state';

export const types = {
    LOAD_STOCKTICKERS: 'stockTickers/loadStockTickers',
    ADD_STOCKTICKER: 'stockTickers/add',
    UPDATE_STOCKTICKER: 'stockTickers/update',
    REMOVE_STOCKTICKER: 'stockTickers/remove'
};

export const actions: ActionTree<StockTickersState, RootState> = {
    loadStockTickers({ commit }): void {
        // TODO: fetch stockTickers from the api
        const stockTickers = [
            { id: 1, name: 'Sample StockTicker', rowVersion: 'aaa' },
            { id: 2, name: 'Another Sample StockTicker', rowVersion: 'bbb' }
        ];
        commit('setStockTickers', stockTickers);
    },
    add({ commit }, stockTicker: StockTicker): void {
        // TODO: make the api request before committing to the store
        commit('add', stockTicker);
    },
    update({ commit }, stockTicker: StockTicker): void {
        // TODO: make the api request before committing to the store
        commit('update', stockTicker);
    },
    remove({ commit }, stockTickerId: number): void {
        // TODO: make the api request before committing to the store
        commit('remove', stockTickerId);
    }
};