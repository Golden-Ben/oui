<template>
  <v-app>
    <v-content>
      <Hello-World></Hello-World>

      <router-view></router-view>
    </v-content>
    <foo-ter></foo-ter>
  </v-app>
</template>

<script>
import signin from "@/components/signin";
import signup from "@/components/signup";
import Home from "@/views/Home";
import Navbar from "@/components/Navbar";
import Footer from "./components/Home/Footer";

export default {
  components: {
    "sign-in": signin,
    "sign-up": signup,
    "Ho-me": Home,
    "Hello-World": Navbar,
    "foo-ter": Footer
  }
};
</script>
