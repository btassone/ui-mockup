import { MutationTree } from 'vuex';
import {AccessLevel, Reader, ReaderType, RootState, TableRow} from '@/store/types';
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
    readers(state: RootState, readers: Reader[]): void {
        state.readers = readers;
    },
    readerTypes(state: RootState, readerTypes: ReaderType[]): void {
        state.readerTypes = readerTypes;
    },
    selectedItem(state: RootState, selectedItem: TableRow): void {
        state.selectedItem = selectedItem;
    }
};