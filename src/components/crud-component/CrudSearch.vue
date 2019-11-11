<template>
  <div id="crud-search" class="w-full">
      <input type="text" class="border border-theme-gray p-1 pl-2 pr-2 w-full" value="" placeholder="Spotlight Search" />
  </div>
</template>
<script lang="ts">
  import Vue from 'vue';
  import Component from 'vue-class-component';

  @Component({})
  export default class CrudSearchComponent extends Vue {}

</script>

<style scoped lang="scss">
  #crud-search {

  }
</style>
