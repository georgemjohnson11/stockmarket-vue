import Vue from 'vue';
import Vuex, {StoreOptions} from 'vuex';
import { RootState } from './state';
import { stockTickers } from './modules/stockTickers';
import { auth } from './modules/auth';

Vue.use(Vuex);

const options: StoreOptions<RootState> = {
  state: {},
  modules: {
    auth,
    stockTickers
  }
};

export default new Vuex.Store(options);
