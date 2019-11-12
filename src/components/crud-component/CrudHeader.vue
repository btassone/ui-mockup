<template>
  <div id="crud-header" class="flex items-center mb-4">
      <crud-add></crud-add>
      <crud-search class="ml-3"></crud-search>
  </div>
</template>
<script lang="ts">
  import Vue from 'vue';
  import Component from 'vue-class-component';
  import CrudSearch from '@/components/crud-component/CrudSearch.vue';
  import CrudAdd from '@/components/crud-component/CrudAdd.vue';

  @Component({
      components: {CrudAdd, CrudSearch}
  })
  export default class CrudHeaderComponent extends Vue {}

</script>

<style scoped lang="scss">
  #crud-header {

  }
</style>
