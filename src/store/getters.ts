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
            columnHeadings: [],
            rows: []
        };

        _.each(state.accessLevels, (accessLevel: AccessLevel) => {
            let name: string = accessLevel.name;

            const readerObj: Reader = _.findWhere(state.readers, { id: accessLevel.readerId }) as Reader;
            const readerTypeObj: ReaderType = _.findWhere(state.readerTypes, { id: readerObj.typeId }) as ReaderType;

            const reader: string = readerObj.name;
            const readerType: string = readerTypeObj.name;

            tableData.rows.push({
                name,
                readerType,
                reader,
            });
        });

        if (tableData.rows.length > 0) {
           const item = tableData.rows[0];

           for (let itemName in item) {
               if (item.hasOwnProperty(itemName)) {
                   tableData.columnHeadings.push(itemName);
               }
           }
        }

        return tableData;
    }
};