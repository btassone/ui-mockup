<template>
  <div id="crud-header">
      <crud-add></crud-add>
      <crud-search></crud-search>
  </div>
</template>
<script lang="ts">
  import Vue from 'vue';
  import Component from 'vue-class-component';
  import CrudSearch from "@/components/crud-component/CrudSearch.vue";
  import CrudAdd from "@/components/crud-component/CrudAdd.vue";

  @Component({
      components: {CrudAdd, CrudSearch}
  })
  export default class CrudHeaderComponent extends Vue {

    mounted (){
      console.log('Crud header component mounted');
    }
    
  }

</script>

<style scoped lang="scss">
  #crud-header {

  }
</style>
