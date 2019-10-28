import Vue from 'vue';
import Vuex, {
  StoreOptions,
  ActionContext,
  MutationTree,
  ActionTree
} from 'vuex';
import { RootState } from './state';
import { stockTickers } from './modules/stockTickers';

Vue.use(Vuex);

const options: StoreOptions<RootState> = {
  state: {},
  modules: {
    stockTickers
  }
};

export default new Vuex.Store(options);
