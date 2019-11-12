<template>
  <div id="crud-table">
    <div class="table table-fixed w-full">

      <!-- Column Headings -->
      <div class="table-row header bg-theme-gray">
        <div
            class="table-cell font-bold text-theme-dark border-b pb-1 border-theme-dark-gray"
            v-for="(heading, index) in this.tableData.columnHeadings"
            :key="index">
          {{heading}}
        </div>
      </div>

      <!-- Table Data -->
      <div
          class="table-row data-item"
          v-for="(row, index) in tData()"
          :class="{ 'selected': row === selectedItem }"
          :key="index"
          @click="setSelectedItem(row, $event.target)">
        <div class="table-cell">
          <span>{{ row.accessLevel }}</span>
        </div>
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
    .selected .table-cell {
      @apply bg-yellow-300;
    }

    .table-cell {
      @apply p-1;

      &:first-child {
        @apply w-3/5;
      }

      &:nth-child(2) {
        @apply w-1/5;
      }

      &:last-child {
        @apply w-1/5;
      }
    }

    .table-row.header {
      .table-cell {
        &:first-child {
          @apply border-l-0;
        }
        @apply border-l border-theme-dark-gray;
      }
    }

    .data-item {
      .table-cell {
        @apply border-b border-l border-theme-dark-gray;

        &:first-child {
          @apply border-l-0;
        }
      }
    }
  }
</style>
