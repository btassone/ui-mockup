<template>
  <div id="crud-table">
    <div class="table w-full">

      <!-- Column Headings -->
      <div class="table-row">
        <div
            class="table-cell font-bold border-b pb-1 border-theme-dark"
            v-for="(heading, index) in this.tableData.columnHeadings"
            :key="index">
          {{heading}}
        </div>
      </div>

      <!-- Table Data -->
      <div
          class="table-row"
          v-for="(row, index) in tData()"
          :class="{ 'selected': row === selectedItem }"
          :key="index"
          @click="setSelectedItem(row, $event.target)">
        <div class="table-cell">{{ row.accessLevel }}</div>
        <div class="table-cell">{{ row.readerType }}</div>
        <div class="table-cell">{{ row.reader }}</div>
      </div>

    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import Component from 'vue-class-component';
  import { Getter, Mutation } from 'vuex-class';
  import { TableData, TableRow } from '@/store/types';

  @Component({})
  export default class CrudTableComponent extends Vue {
    @Getter('tableData')
    tableData!: TableData;

    @Getter('filteredTableData')
    filteredTableData!: TableRow[];

    @Getter('selectedItem')
    selectedItem!: TableRow;

    @Mutation('selectedItem')
    mutateSelectedItem!: (selectedItem: TableRow) => void;

    // Set the selected item in the store
    setSelectedItem(row: TableRow, target: EventTarget) {
      this.mutateSelectedItem(row);
    }

    // Grabs the filtered table data vs the normal data stack depending if filtered is populated or not
    tData(): TableRow[] {
      let data: TableRow[] = [] as TableRow[];

      if(this.filteredTableData && this.filteredTableData.length > 0) {
        data = this.filteredTableData
      } else {
        data = this.tableData.rows;
      }

      return data;
    }
  }

</script>

<style scoped lang="scss">
  #crud-table {
    .selected {
      @apply bg-theme-gray;
    }
  }
</style>
