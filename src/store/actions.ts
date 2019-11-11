import { ActionTree } from 'vuex';
import {AccessLevel, Reader, ReaderType, RootState, TableData} from '@/store/types';
import { getters } from "@/store/getters";
import store from './index';

// Normally this would be done from axios or some other vehicle for retrieving the data, but since all the data for this
// is static we can just import it and commit it to the store
import * as accessLevelsImport from "@/data/accessLevels.json";
import * as readersImport from "@/data/readers.json";
import * as readerTypesImport from "@/data/readerTypes.json";
import _ from "underscore";

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
    commit('tableData', (actions as any).parseTableData(store.state));
  },
  parseTableData(state: any): TableData {
    let data = [];
    let tableData: TableData = {
      columnHeadings: ["Name", "Reader Type", "Reader(s)"],
      rows: []
    };

    _.each(state.accessLevels, (accessLevel: AccessLevel) => {
      const description: string = accessLevel.description;
      const accessLevelName: string = accessLevel.name;
      const reader: Reader = _.findWhere(state.readers, { id: accessLevel.readerId }) as Reader;
      const readerName: string = reader.name;
      const readerTypeName: string = (_.findWhere(state.readerTypes, { id: reader.typeId }) as ReaderType).name;

      tableData.rows.push({
        accessLevel: accessLevelName,
        description,
        readerType: readerTypeName,
        reader: readerName,
      });
    });

    return tableData;
  },
};