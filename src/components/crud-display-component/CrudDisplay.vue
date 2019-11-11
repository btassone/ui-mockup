<template>
  <div id="crud-display">
    <h1 class="font-bold mb-3 text-lg">Access Name</h1>
    <hr class="mb-3" />
    <div class="table w-full">
      <div class="table-row">
        <div class="table-cell w-1/5 align-top">
          Name:
        </div>
        <div class="table-cell w-4/5">
          <input type="text"
                 class="border border-theme-gray p-1 pl-2 pr-2"
                 @change="mutateValue($event.target.value, 'accessLevel')"
                 @keyup="mutateValue($event.target.value, 'accessLevel')"
                 @focusout="mutateValue($event.target.value, 'accessLevel')"
                 :value="selectedItem.accessLevel"
          />
        </div>
      </div>
      <div class="table-row">
        <div class="table-cell w-1/5 align-top">
          Description:
        </div>
        <div class="table-cell w-4/5 align-top">
          <textarea v-model="selectedItem.description" class="w-full h-20 border border-theme-gray p-2" @keyup="mutateValue($event.target.value, 'description')"></textarea>
        </div>
      </div>
      <div class="table-row">
        <div class="table-cell w-1/5 align-top">
          Reader Type:
        </div>
        <div class="table-cell w-4/5">
          <select class="border border-theme-gray p-2 w-full" @change="mutateValue($event.target.value, 'readerType')">
            <option v-for="(readerType, index) in readerTypes" :key="index" :value="readerType.name" :selected="selectedItem.readerType === readerType.name ? 'selected' : ''">{{ readerType.name }}</option>
          </select>
        </div>
      </div>
      <div class="table-row">
        <div class="table-cell w-1/5 align-top">
          Reader:
        </div>
        <div class="table-cell w-4/5">
          <select class="border border-theme-gray p-2 w-full" @change="mutateValue($event.target.value, 'reader')">
            <option v-for="(reader, index) in readers" :key="index" :value="reader.name" :selected="selectedItem.reader === reader.name ? 'selected' : ''">{{ reader.name }}</option>
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

    @Mutation('readerType')
    setReaderType!: (data: any) => void;

    mutateValue(value: any, prop: string) {
      (this.selectedItem as any)[prop] = value;
    }

    changeAccessLevelName(accessLevelName: string) {
      console.log(accessLevelName);
    }
  }

</script>

<style scoped lang="scss">
  #crud-display {
    .table-row {
      .table-cell {
        @apply pb-3;

        &:first-child {
          @apply font-bold;
          min-width: 100px;
        }
        &:last-child {
          @apply pl-3;
        }
      }

      &:last-child {
        .table-cell {
          @apply pb-0;
        }
      }
    }
  }
</style>
