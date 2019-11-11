<template>
  <div id="app">
    <home></home>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Home from "@/pages/Home.vue";
import { Action } from 'vuex-class';

@Component({
  components: {
    Home
  },
})
export default class App extends Vue {
  @Action('fetchData')
  fetchData!: () => void;

  mounted() {
    this.fetchData();
  }
}
</script>

<style lang="scss">

</style>
