<template>
  <div id="crud-display">
      <div class="table">
        <div class="table-row">
          <div class="table-cell align-top">
            Name:
          </div>
          <div class="table-cell">
            <input type="text" :value="selectedItem.name" />
          </div>
        </div>
        <div class="table-row">
          <div class="table-cell align-top">
            Reader Type:
          </div>
          <div class="table-cell">
            <textarea v-model="selectedItem.readerType"></textarea>
          </div>
        </div>
        <div class="table-row">
          <div class="table-cell align-top">
            Reader:
          </div>
          <select>
            <option v-for="(reader, index) in readers" :key="index" :value="reader.id" :selected="selectedItem.reader === reader.name ? 'selected' : ''">{{ reader.name }}</option>
          </select>
        </div>
      </div>
  </div>
</template>
<script lang="ts">
  import Vue from 'vue';
  import Component from 'vue-class-component';
  import {Getter} from "vuex-class";
  import {Reader, TableData, TableRow} from "@/store/types";
  import {Prop} from "vue-property-decorator";

  @Component({})
  export default class CrudDisplayComponent extends Vue {

    @Prop({ default: () => ({}) })
    selectedItem!: TableRow;

    @Getter('readers')
    readers!: Reader[];

    mounted (){
      console.log('Crud display component mounted');
    }
    
  }

</script>

<style scoped lang="scss">
  .crud-display-component {

  }
</style>
