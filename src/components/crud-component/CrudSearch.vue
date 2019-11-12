<template>
  <div id="crud-search" class="w-full">
      <input type="text" @keyup="passSearchToFilter($event.target.value)" class="border border-theme-gray p-1 pl-2 pr-2 w-full" value="" placeholder="Spotlight Search" />
  </div>
</template>
<script lang="ts">
  import Vue from 'vue';
  import Component from 'vue-class-component';
  import {Getter, Mutation} from "vuex-class";
  import {TableData, TableRow} from "@/store/types";

  @Component({})
  export default class CrudSearchComponent extends Vue {
    @Getter('tableData')
    tableData!: TableData;

    @Mutation('searchValue')
    setSearchValue!: (searchValue: string) => void;

    passSearchToFilter(value: any) {
      this.setSearchValue(value);
    }
  }

</script>

<style scoped lang="scss">
  #crud-search {

  }
</style>
