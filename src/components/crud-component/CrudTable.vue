<template>
  <div id="crud-table">
    <div class="table w-full">
      <div class="table-row">
        <div class="table-cell capitalize" v-for="(heading, index) in tableData.columnHeadings" :key="index">
          {{formatColumnHeading(heading)}}
        </div>
      </div>
      <div class="table-row" @click="displayData(row)" v-for="(row, index) in tableData.rows" :key="index">
        <div class="table-cell">{{ row.name }}</div>
        <div class="table-cell">{{ row.readerType }}</div>
        <div class="table-cell">{{ row.reader }}</div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import Vue from 'vue';
  import Component from 'vue-class-component';
  import { Getter } from 'vuex-class';
  import {AccessLevel, TableData, TableRow} from '@/store/types';

  @Component({})
  export default class CrudTableComponent extends Vue {
    @Getter('tableData')
    tableData!: TableData;

    displayData(row: TableRow) {
      this.$emit('display-data', row);
    }

    formatColumnHeading(heading: string) {
      let matched = heading.split(/(?=[A-Z])/);

      return matched !== null ? matched.join(" ") : heading;
    }
  }

</script>

<style scoped lang="scss">
  #crud-table {
  }
</style>
