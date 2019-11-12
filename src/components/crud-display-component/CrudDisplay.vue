<template>
  <div id="crud-display">

    <h1 class="font-bold mb-3 text-lg">Access Name</h1>
    <hr class="mb-3" />

    <div class="table w-full">

      <!-- Access Level -->
      <div class="table-row">
        <div class="table-cell w-1/5 align-top">
          <label for="access-level">Name:</label>
        </div>

        <div class="table-cell w-4/5">
          <input type="text"
             id="access-level"
             class="border border-theme-gray p-1 pl-2 pr-2"
             @change="mutateValue($event.target.value, 'accessLevel')"
             @keyup="mutateValue($event.target.value, 'accessLevel')"
             @focusout="mutateValue($event.target.value, 'accessLevel')"
             :value="selectedItem.accessLevel"
          />
        </div>
      </div>

      <!-- Description -->
      <div class="table-row">
        <div class="table-cell w-1/5 align-top">
          <label for="description">Description:</label>
        </div>

        <div class="table-cell w-4/5 align-top">
          <textarea
              id="description"
              v-model="selectedItem.description"
              class="w-full h-20 border border-theme-gray p-2"
              @keyup="mutateValue($event.target.value, 'description')"
          ></textarea>
        </div>
      </div>

      <!-- Reader Type -->
      <div class="table-row">
        <div class="table-cell w-1/5 align-top">
          <label for="reader-type">Reader Type:</label>
        </div>

        <div class="table-cell w-4/5">
          <select
              id="reader-type"
              class="border border-theme-gray p-2 w-full"
              @change="mutateValue($event.target.value, 'readerType')">
            <option
                v-for="(readerType, index) in readerTypes"
                :key="index" :value="readerType.name"
                :selected="selectedItem.readerType === readerType.name ? 'selected' : ''">
              {{ readerType.name }}
            </option>
          </select>
        </div>
      </div>

      <!-- Reader -->
      <div class="table-row">
        <div class="table-cell w-1/5 align-top">
          <label for="reader">Reader:</label>
        </div>

        <div class="table-cell w-4/5">
          <select
              id="reader"
              class="border border-theme-gray p-2 w-full"
              @change="mutateValue($event.target.value, 'reader')">
            <option
                v-for="(reader, index) in readers" :key="index" :value="reader.name"
                :selected="selectedItem.reader === reader.name ? 'selected' : ''">
              {{ reader.name }}
            </option>
          </select>
        </div>
      </div>

    </div>
  </div>
</template>
<script lang="ts">
  import Vue from 'vue';
  import Component from 'vue-class-component';
  import { Getter, Mutation } from "vuex-class";
  import { AccessLevel, Reader, ReaderType, TableRow } from "@/store/types";

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
