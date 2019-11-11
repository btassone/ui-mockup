<template>
  <div id="crud-display">
    <h1 class="font-bold mb-3 text-lg">Access Name</h1>
    <hr class="mb-3" />
    <div class="table">
      <div class="table-row">
        <div class="table-cell align-top">
          Name:
        </div>
        <div class="table-cell">
          <input type="text"
                 @change="mutateAccessLevel($event.target.value, 'accessLevel', 'name')"
                 @keyup="mutateAccessLevel($event.target.value, 'accessLevel', 'name')"
                 @focusout="mutateAccessLevel($event.target.value, 'accessLevel', 'name')"
                 :value="selectedItem.accessLevel.name"
          />
        </div>
      </div>
      <div class="table-row">
        <div class="table-cell align-top">
          Description:
        </div>
        <div class="table-cell align-top">
          <textarea v-model="selectedItem.description" @keyup="mutateAccessLevel($event.target.value, 'accessLevel', 'description')"></textarea>
        </div>
      </div>
      <div class="table-row">
        <div class="table-cell align-top">
          Reader Type:
        </div>
        <div class="table-cell">
          <select class="border border-theme-gray">
            <option v-for="(readerType, index) in readerTypes" :key="index" :value="readerType.id" :selected="selectedItem.readerType.id === readerType.id ? 'selected' : ''">{{ readerType.name }}</option>
          </select>
        </div>
      </div>
      <div class="table-row">
        <div class="table-cell align-top">
          Reader:
        </div>
        <div class="table-cell">
          <select class="border border-theme-gray">
            <option v-for="(reader, index) in readers" :key="index" :value="reader.id" :selected="selectedItem.reader.id === reader.id ? 'selected' : ''">{{ reader.name }}</option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import Vue from 'vue';
  import Component from 'vue-class-component';
  import {Getter, Mutation} from "vuex-class";
  import {AccessLevel, Reader, ReaderType, TableData, TableRow} from "@/store/types";
  import {Prop} from "vue-property-decorator";

  @Component({})
  export default class CrudDisplayComponent extends Vue {

    @Getter('selectedItem')
    selectedItem!: TableRow;

    @Getter('readers')
    readers!: Reader[];

    @Getter('readerTypes')
    readerTypes!: ReaderType[];

    @Mutation('accessLevel')
    setAccessLevel!: (accessLevel: AccessLevel) => void;

    mutateAccessLevel(value: any, type: string, prop: string) {
      (this.selectedItem as any)[type][prop] = value;

      console.log(this.selectedItem.accessLevel.name);
      this.setAccessLevel(this.selectedItem.accessLevel);
    }

    changeAccessLevelName(accessLevelName: string) {
      console.log(accessLevelName);
    }
  }

</script>

<style scoped lang="scss">
  #crud-display {
    .table-row {
      .table-cell:last-child {
        @apply pl-3;
      }
    }
  }
</style>
