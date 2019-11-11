<template>
  <div id="crud-table">
    <div class="table w-full">
      <div class="table-row">
        <div class="table-cell font-bold border-b pb-1 border-theme-dark" v-for="(heading, index) in tableData.columnHeadings" :key="index">
          {{formatColumnHeading(heading)}}
        </div>
      </div>
      <div class="table-row" @click="setSelectedItem(row, $event.target)" v-for="(row, index) in tableData.rows" :key="index">
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
  import {Getter, Mutation} from 'vuex-class';
  import {AccessLevel, TableData, TableRow} from '@/store/types';

  @Component({})
  export default class CrudTableComponent extends Vue {
    @Getter('tableData')
    tableData!: TableData;

    @Mutation('selectedItem')
    selectedItem!: (selectedItem: TableRow) => void;

    selectedRowElement!: HTMLDivElement;

    setSelectedItem(row: TableRow, target: EventTarget) {
      if (this.selectedRowElement !== null && this.selectedRowElement) {
        this.selectedRowElement.classList.toggle("selected");
      }

      this.selectedRowElement = (target as HTMLDivElement).parentElement! as HTMLDivElement;
      this.selectedRowElement.classList.toggle("selected");

      this.selectedItem(row);
    }

    formatColumnHeading(heading: string) {
      let matched = heading.split(/(?=[A-Z])/);

      return matched !== null ? matched.join(" ") : heading;
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
