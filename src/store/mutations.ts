import { MutationTree } from 'vuex';
import { AccessLevel, Reader, ReaderType, RootState } from '@/store/types';

export const mutations: MutationTree<RootState> = {
    accessLevels(state: RootState, accessLevels: AccessLevel[]): void {
        state.accessLevels = accessLevels;
    },
    readers(state: RootState, readers: Reader[]): void {
        state.readers = readers;
    },
    readerTypes(state: RootState, readerTypes: ReaderType[]): void {
        state.readerTypes = readerTypes;
    }
};