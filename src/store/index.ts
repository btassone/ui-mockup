import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'
import { RootState } from '@/store/types';
import { actions } from './actions';
import {getters} from "@/store/getters";
import {mutations} from "@/store/mutations";

Vue.use(Vuex);

const state: RootState = {
  accessLevels: [],
  readers: [],
  readerTypes: []
};

const store: StoreOptions<RootState> = {
  state,
  actions,
  getters,
  mutations
};

export default new Vuex.Store<RootState>(store);