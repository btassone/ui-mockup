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
    readerTypes(state: RootState): ReaderType[] {
        return state.readerTypes;
    },
    tableData(state: RootState): TableData {
        let data = [];
        let tableData: TableData = {
            columnHeadings: ["Name", "Reader Type", "Reader(s)"],
            rows: []
        };

        _.each(state.accessLevels, (accessLevel: AccessLevel) => {
            const description: string = accessLevel.description;
            const reader: Reader = _.findWhere(state.readers, { id: accessLevel.readerId }) as Reader;
            const readerType: ReaderType = _.findWhere(state.readerTypes, { id: reader.typeId }) as ReaderType;

            tableData.rows.push({
                accessLevel,
                description,
                readerType,
                reader,
            });
        });

        return tableData;
    },
    selectedItem(state: RootState): TableRow {
        return state.selectedItem;
    }
};