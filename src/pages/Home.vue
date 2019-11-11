<template>
  <div id="home">
    <h1 class="mt-0 mb-4 font-bold text-xl uppercase leading-none">Ui Mockup</h1>
    <hr class="mb-4" />
    <div class="flex">
      <crud-component class="w-3/5 mr-4"></crud-component>
      <crud-display :selected-item="selectedItem" class="w-2/5 ml-4"></crud-display>
    </div>
  </div>
</template>
<script lang="ts">
  import Vue from 'vue';
  import Component from 'vue-class-component';
  import CrudComponent from "@/components/crud-component/CrudComponent.vue";
  import CrudDisplay from "@/components/crud-display-component/CrudDisplay.vue";
  import {TableRow} from "@/store/types";

  @Component({
      components: {CrudDisplay, CrudComponent}
  })
  export default class HomeComponent extends Vue {

    selectedItem: TableRow = {} as TableRow;
  }

</script>

<style scoped lang="scss">

</style>
