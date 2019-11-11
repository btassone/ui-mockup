import { ActionTree } from 'vuex';
import { AccessLevel, Reader, ReaderType, RootState } from '@/store/types';

// Normally this would be done from axios or some other vehicle for retrieving the data, but since all the data for this
// is static we can just import it and commit it to the store
import * as accessLevelsImport from "@/data/accessLevels.json";
import * as readersImport from "@/data/readers.json";
import * as readerTypesImport from "@/data/readerTypes.json";

// Parse the json data into variables
const accessLevels: AccessLevel[] = (accessLevelsImport as any).default;
const readers: Reader[] = (readersImport as any).default;
const readerTypes: ReaderType[] = (readerTypesImport as any).default;

export const actions: ActionTree<RootState, RootState> = {
  // Commit the data to the store
  fetchData({ commit }): void {
    commit('accessLevels', accessLevels);
    commit('readers', readers);
    commit('readerTypes', readerTypes);
  }
};