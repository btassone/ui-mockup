import { GetterTree } from "vuex";
import { AccessLevel, Reader, ReaderType, RootState, TableRow, TableData } from '@/store/types';
import _ from "underscore";


export const getters: GetterTree<RootState, RootState> = {
    accessLevels(state: RootState): AccessLevel[] {
        return state.accessLevels;
    },
    readers(state: RootState): Reader[] {
        return state.readers;
    },
    tableData(state: RootState): TableData {
        return state.tableData;
    },
    readerTypes(state: RootState): ReaderType[] {
        return state.readerTypes;
    },
    selectedItem(state: RootState): TableRow {
        return state.selectedItem;
    }
};