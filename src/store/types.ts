export interface RootState {
    accessLevels: AccessLevel[],
    readers: Reader[],
    tableData: TableData,
    readerTypes: ReaderType[],
    selectedItem: TableRow
}

export interface AccessLevel {
    id: number,
    name: string,
    readerId: number,
    description: string
}

export interface Reader {
    id: number,
    typeId: number,
    name: string
}

export interface ReaderType {
    id: number,
    name: string
}

export interface TableData {
    columnHeadings: string[],
    rows: TableRow[],
}

export interface TableRow {
    accessLevel: string,
    description: string,
    readerType: string,
    reader: string,
}