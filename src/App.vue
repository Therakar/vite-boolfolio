<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import AppFooter from "./components/AppFooter.vue";
export default {
  components: {
    AppHeader,
    AppMain,
    AppFooter
  },
};
</script>

<template>
  <body>
    <AppHeader />
    <AppMain />
    <AppFooter />
  </body>
</template>

<style lang="scss">
  @import "./style/global.scss";
  body{
    background-color: #0D1117;
  }
</style>
