<template>
  <div id="crud-component">
    <h1>Access Levels</h1>
    <div>
      <crud-header></crud-header>
      <crud-table @display-data="displayData" :columns="tableColumns"></crud-table>
    </div>
  </div>
</template>
<script lang="ts">
  import Vue from 'vue';
  import Component from 'vue-class-component';
  import CrudHeader from "@/components/crud-component/CrudHeader.vue";
  import CrudTable from "@/components/crud-component/CrudTable.vue";
  import {TableRow} from "@/store/types";

  @Component({
    components: {CrudTable, CrudHeader}
  })
  export default class CrudComponentComponent extends Vue {

    tableColumns: string[] = ['Name', 'Reader Type', 'Reader(s)'];

    mounted (){
      console.log('Crud component mounted');
    }

    displayData(row: TableRow) {
      this.$emit('display-data', row);
    }
    
  }

</script>

<style scoped lang="scss">
  #crud-component {

  }
</style>
