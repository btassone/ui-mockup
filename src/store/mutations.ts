import { MutationTree } from 'vuex';
import {AccessLevel, Reader, ReaderType, RootState, TableData, TableRow} from '@/store/types';
import _ from "underscore";

export const mutations: MutationTree<RootState> = {
    accessLevels(state: RootState, accessLevels: AccessLevel[]): void {
        state.accessLevels = accessLevels;
    },
    accessLevel(state: RootState, accessLevel: AccessLevel): void {
        state.accessLevels.forEach((al: AccessLevel) => {
            if(al.id === accessLevel.id) {
                al = accessLevel;
            }
        })
    },
    filterTableData(state: RootState, value: string) {

        const accessFiltered = state.tableData.rows.filter((row: TableRow) => {
            if (row.accessLevel.indexOf(value) !== -1) {
                return row;
            }
        });

        const descriptionFiltered = state.tableData.rows.filter((row: TableRow) => {
            if (row.description.indexOf(value) !== -1) {
                return row;
            }
        });

        const readerFiltered = state.tableData.rows.filter((row: TableRow) => {
            if (row.reader.indexOf(value) !== -1) {
                return row;
            }
        });

        const readerTypeFiltered = state.tableData.rows.filter((row: TableRow) => {
            if (row.readerType.indexOf(value) !== -1) {
                return row;
            }
        });

        state.filteredData = _.uniq([].concat(accessFiltered as any)
            .concat(descriptionFiltered as any)
            .concat(readerFiltered as any)
            .concat(readerTypeFiltered as any));
    },
    searchValue(state: RootState, searchValue: string): void {
        state.searchValue = searchValue;

        if(state.searchValue !== "") {
            (mutations as any).filterTableData(state, searchValue);
        } else {
            state.filteredData = [];
        }
    },
    tableData(state: RootState, tableData: TableData): void {
        state.tableData = tableData;
    },
    readers(state: RootState, readers: Reader[]): void {
        state.readers = readers;
    },
    readerTypes(state: RootState, readerTypes: ReaderType[]): void {
        state.readerTypes = readerTypes;
    },
    readerType(state: RootState, data: any): void {
        console.log(data);
    },
    selectedItem(state: RootState, selectedItem: TableRow): void {
        state.selectedItem = selectedItem;
    }
};