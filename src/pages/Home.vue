<template>
  <div id="home">
    <h1>Ui Mockup</h1>
    <div class="flex">
      <crud-component @display-data="displayData" class="w-3/5"></crud-component>
      <crud-display :selected-item="selectedItem" class="w-2/5"></crud-display>
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

    mounted (){
      console.log('Home page mounted');
    }

    displayData(row: TableRow) {
      this.selectedItem = row;
    }
    
  }

</script>

<style scoped lang="scss">
  .home {

  }
</style>
