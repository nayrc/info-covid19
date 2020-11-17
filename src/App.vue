<template>
  <div id="app">
    <b-container class="bv-example-row">
      <Heading />
      <hr />
      <GlobalInfo />
      <hr />
      <IndonesiaInfo />
      <hr />
      <Country />
      <hr />
      <Footer />
    </b-container>
  </div>
</template>

<script>
import {
  Heading,
  GlobalInfo,
  IndonesiaInfo,
  Country,
  Footer,
} from "./components";
export default {
  title: "Cryan",
  name: "App",
  components: {
    Heading,
    GlobalInfo,
    IndonesiaInfo,
    Country,
    Footer,
  },
};
</script>

<style>
html {
  font-size: 62.5%;
}
body {
  font-family: "Poppins", sans-serif;
}
</style>
