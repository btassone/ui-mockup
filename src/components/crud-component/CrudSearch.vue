<template>
  <div id="crud-search">
      <input type="text" value="" placeholder="Spotlight Search" />
  </div>
</template>
<script lang="ts">
  import Vue from 'vue';
  import Component from 'vue-class-component';

  @Component({})
  export default class CrudSearchComponent extends Vue {

    mounted (){
      console.log('Crud search component mounted');
    }
    
  }

</script>

<style scoped lang="scss">
  #crud-search {

  }
</style>
