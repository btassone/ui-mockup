<template>
  <div id="app" class="flex justify-center items-center h-screen">
    <home class="w-full"></home>
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
  #home {
    max-width: 80%;
  }
</style>
