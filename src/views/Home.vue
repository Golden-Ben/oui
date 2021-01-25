<template>
  <v-app>
    <v-content>
      <hea-der></hea-der>
      <popular-products></popular-products>
    </v-content>
  </v-app>
</template>

<script>
import Header from "@/components/Home/Header";
import Footer from "@/components/Home/Footer";
import PopularProducts from "@/components/Home/PopularProducts";
export default {
  components: {
    "foo-ter": Footer,
    "hea-der": Header,
    "popular-products": PopularProducts
  },
  data() {
    return {};
  }
};
</script>
