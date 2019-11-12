<template>
  <div id="app" class="flex justify-center items-center h-screen">
    <home class="w-full"></home>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Home from "@/pages/Home.vue";
import { Action, Getter, Mutation } from 'vuex-class';
import { TableData, TableRow } from '@/store/types';

@Component({
  components: {
    Home
  },
})
export default class App extends Vue {
  @Action('fetchData')
  fetchData!: () => void;

  @Mutation('selectedItem')
  setSelectedItem!: (selectedItem: TableRow) => void;

  @Getter('tableData')
  getTableData!: TableData;

  mounted() {
    this.fetchData();

    // Set a default selected item
    this.setSelectedItem(this.getTableData.rows[0]);
  }
}
</script>

<style lang="scss">
  #home {
    max-width: 80%;
  }
</style>
