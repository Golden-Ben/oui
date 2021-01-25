<template>
  <div id="app">
    <v-app id="inspire">
      <v-img
        lazy-src="https://i.ibb.co/w4F7grf/this.png"
        max-height="75%"
        max-width="100%"
        src="https://i.postimg.cc/PJxbbMbp/this.png"
      >
        <v-row>
          <v-container class="mt-16 ml-5">
            <h1
              class="ml-3 mt-7 green--text display-4 font-weight-regular.font-italic"
            >
              Talents demandés <br />
              sur demande.<br />
            </h1>
            <p
              class=" ml-3 white--text display-1 mt-9 font-weight-regular.font-italic"
            >
              Recrutez en toute confiance des professionnels<br />
              confirmés en utilisant Framespace.
            </p>
          </v-container>
        </v-row>
        <v-row class=" ml-5 mt-4">
          <v-container class="mt-7 ml-5">
            <v-btn x-large elevation="8" to="/signup" color="green" dark>
              Get started
            </v-btn>

            <v-btn x-large elevation="7" class="ml-6" color="white" red>
              watch demo
            </v-btn>
          </v-container>
        </v-row>

        <h4 class="mr-16 mt-16 white--text text-end">
          Joey.B | Top Rated Web Designer
        </h4>
      </v-img>
    </v-app>
  </div>
</template>

<script>
export default {
  data: () => ({
    length: 3,
    onboarding: 0
  }),

  methods: {
    next() {
      this.onboarding =
        this.onboarding + 1 === this.length ? 0 : this.onboarding + 1;
    },
    prev() {
      this.onboarding =
        this.onboarding - 1 < 0 ? this.length - 1 : this.onboarding - 1;
    }
  }
  // la declarer le component
};
</script>
