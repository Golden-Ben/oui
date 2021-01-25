<template>
  <div>
    <v-app-bar>
      <v-img
        @click="methodName"
        lazy-src="https://www.linkpicture.com/q/wah.jpg"
        max-height="100%"
        max-width="19%"
        src="https://www.linkpicture.com/q/wah.jpg"
      ></v-img>

      <v-menu :nudge-width="100">
        <template v-slot:activator="{ on }">
          <v-toolbar-title v-on="on">
            <v-btn
              flat
              to="hire"
              class="mb-4 center mt-3 font-weight-bold"
              large
              text
            >
              <h5 class=" center mt-3 font-weight-bold">
                <v-icon left>fas fa-crosshairs</v-icon> Recruté
              </h5>
            </v-btn>
            <v-btn
              flat
              to="gethired"
              class="mb-4 center mt-3 font-weight-bold"
              large
              text
            >
              <h5 class=" center mt-3 font-weight-bold">
                <v-icon left>fas fa-check-double</v-icon>Etre Recruté
              </h5>
            </v-btn>
          </v-toolbar-title>
        </template>
      </v-menu>

      <v-spacer></v-spacer>

      <span class="hidden-sm-and-up">
        <v-btn @click.stop="drawer = !drawer">
          Menu
        </v-btn>
      </span>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn to="/" text>
          <h5 class=" center mt-3 font-weight-bold">
            <v-icon left>fa-home</v-icon> Home
          </h5>
        </v-btn>

        <v-btn to="/signin" text>
          <h5 class=" center mt-3 font-weight-bold">
            <v-icon left>fas fa-sign-in-alt</v-icon>
            Sign in
          </h5>
        </v-btn>

        <v-btn to="/signup" text>
          <h5 class=" center mt-3 font-weight-bold">
            <v-icon left>fas fa-registered </v-icon>
            Sign up
          </h5>
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary right>
      <v-list>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.link"
          link
        >
          <v-list-item-icon>
            <v-icon small>fa-{{ item.icon }}</v-icon>
          </v-list-item-icon>

          {{ item.title }}

          >
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
module.exports = {
  methods: {
    methodName() {
      return this.$router.push("/#");
    }
  },
  data() {
    return {
      items: [
        { title: "Home", link: "/", icon: "home" },
        { title: "Register", link: "/signup", icon: "fas fa-registered" },
        { title: "LOGIN", link: "/signin", icon: "fas fa-sign-in-alt" }
      ]
    };
  }
};
</script>
