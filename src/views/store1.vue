<template>
  <v-container mb-12>
    <v-row>
      <v-col sm="10" offset-sm="1" md="8" offset-md="2">
        <h1 class="display-3 my-10 text-center">
          Les meilleurs en illustration!
        </h1>
      </v-col>
    </v-row>

    <v-row>
      <v-col sm="6" offset-sm="10" md="12" offset-md="0">
        <v-row>
          <v-col sm="1" md="4">
            <v-card
              outlined
              class="mx-auto"
              color="#33637a"
              dark
              max-width="500"
            >
              <v-list-item class="grow">
                <v-list-item-avatar size="150" color="grey darken-3">
                  <v-img
                    class="elevation-6"
                    @click="one"
                    lazy-src="https://www.linkpicture.com/q/wah.jpg"
                    src=" https://www.upwork.com/profile-portraits/c1_0LvvA05-i-I-kb7uQOgwVvqkskdTYUwLmuxwGNmq1GAjZfct43teVpLBNf9hpXz"
                  ></v-img>
                </v-list-item-avatar>

                <span class="mr-1  display-1 mb-16 subheading"></span>
                <v-row align="center">
                  <span class="ml-16 title font-weight"
                    ><h3 class="mr-2">5</h3></span
                  >
                  <v-icon class="ml-5 mr-1" left>fas fa-star </v-icon>
                  <v-icon class="mr-1" left>fas fa-star </v-icon>
                  <v-icon class="mr-1" left>fas fa-star </v-icon>
                  <v-icon class="mr-1" left>fas fa-star </v-icon>
                  <v-icon class="mr-1" left>fas fa-star </v-icon>
                  <span class="mt-2 ml-13  font-weight">(90 jobs)</span>

                  <v-row align="top" justify="start"> </v-row>
                </v-row>
              </v-list-item>

              <v-card-title>
                <span class="mr-16 ml-9 title font-weight">Dmitriy K.</span>
                <span class="ml-6 title font-weight"
                  ><h3 class="mt-1 ml-5">illustration design</h3></span
                >
              </v-card-title>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn flat to="/PrivateChat">Contact</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col sm="6" md="4">
            <v-card
              outlined
              class="mx-auto"
              color="#33637a"
              dark
              max-width="500"
            >
              <v-list-item class="grow">
                <v-list-item-avatar size="150" color="grey darken-3">
                  <v-img
                    class="elevation-6"
                    src="https://www.upwork.com/profile-portraits/c1vh3y_hvJepkuyNXBeJfzUpFUgJSVhyL6EBvwUN0iy-Ecmd4UikU3rJBR2M-5cRA1"
                  ></v-img>
                </v-list-item-avatar>

                <span class="mr-1  display-1 mb-16 subheading"></span>
                <v-row align="center">
                  <span class="ml-16 title font-weight"
                    ><h3 class="mr-2">5</h3></span
                  >
                  <v-icon class="ml-5 mr-1" left>fas fa-star </v-icon>
                  <v-icon class="mr-1" left>fas fa-star </v-icon>
                  <v-icon class="mr-1" left>fas fa-star </v-icon>
                  <v-icon class="mr-1" left>fas fa-star </v-icon>
                  <v-icon class="mr-1" left>fas fa-star </v-icon>
                  <span class="mt-2 ml-13  font-weight">(79 jobs)</span>

                  <v-row align="top" justify="start"> </v-row>
                </v-row>
              </v-list-item>

              <v-card-title>
                <span class="mr-16 ml-9 title font-weight">Paul B.</span>
                <span class="ml-6 title font-weight"
                  ><h3 class="mt-1 ml-5">illustration design</h3></span
                >
              </v-card-title>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn flat to="/PrivateChat">Contact</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col sm="6" md="4">
            <v-card
              outlined
              class="mx-auto"
              color="#33637a"
              dark
              max-width="500"
            >
              <v-list-item class="grow">
                <v-list-item-avatar size="150" color="grey darken-3">
                  <v-img
                    class="elevation-6"
                    src="https://www.upwork.com/profile-portraits/c1IW3Cae8cCfL2eCMcrACLK3QYmZbuJ79Ef8bkP_w3swwtQpReWB7oR5q9u4b9oR5q"
                  ></v-img>
                </v-list-item-avatar>

                <span class="mr-1  display-1 mb-16 subheading"></span>
                <v-row align="center">
                  <span class="ml-16 title font-weight"
                    ><h3 class="mr-2">4.4</h3></span
                  >
                  <v-icon class="ml-5 mr-1" left>fas fa-star </v-icon>
                  <v-icon class="mr-1" left>fas fa-star </v-icon>
                  <v-icon class="mr-1" left>fas fa-star </v-icon>
                  <v-icon class="mr-1" left>fas fa-star </v-icon>

                  <span class="mt-2 ml-13  font-weight">(50 jobs)</span>

                  <v-row align="top" justify="start"> </v-row>
                </v-row>
              </v-list-item>

              <v-card-title>
                <span class="mr-16 ml-9 title font-weight">Emma K.</span>
                <span class="ml-6 title font-weight"
                  ><h3 class="mt-1 ml-5">illustration design</h3></span
                >
              </v-card-title>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn flat to="/PrivateChat">Contact</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
module.exports = {
  methods: {
    one() {
      return this.$router.push("/test");
    }
  },
  data() {}
};
</script>
