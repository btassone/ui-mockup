<template>
  <div id="crud-component">
    <h1 class="font-bold mb-3 text-lg">Access Levels</h1>
    <hr class="mb-3" />
    <div>
      <crud-header></crud-header>
      <crud-table></crud-table>
    </div>
  </div>
</template>
<script lang="ts">
  import Vue from 'vue';
  import Component from 'vue-class-component';
  import CrudHeader from '@/components/crud-component/CrudHeader.vue';
  import CrudTable from '@/components/crud-component/CrudTable.vue';

  @Component({
    components: {CrudTable, CrudHeader}
  })
  export default class CrudComponentComponent extends Vue {}

</script>

<style scoped lang="scss">
  #crud-component {

  }
</style>
