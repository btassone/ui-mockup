<template>
  <div id="crud-add">
      <add-icon class="add-icon block cursor-pointer"></add-icon>
  </div>
</template>
<script lang="ts">
  import Vue from 'vue';
  import Component from 'vue-class-component';
  import AddIcon from '../../assets/svg/plus.svg';

  @Component({
      components: {
          AddIcon
      }
  })
  export default class CrudComponentAddComponent extends Vue {

    mounted (){
      console.log('Crud add component mounted');
    }
    
  }

</script>

<style scoped lang="scss">
  .add-icon {
    &:hover {
      path {
        fill: green;
      }
    }

    path {
      transition: all 0.3s ease;
      fill: #000;
    }
  }
</style>
