<template>
  <div id="app" class="container mx-13">
    <div v-if="camcam">
      <v-app id="inspire" class="mt-7 ml-5 container form-group ">
        <v-row>
          <v-col sm="10" offset-sm="1" md="9" offset-md="4">
            <v-row>
              <v-col sm="6" md="5">
                <h1 class="display-3 md-7 my-11">
                  Trouver un freelancer maintenant !
                </h1>
                <form>
                  <v-text-field
                    v-model="name"
                    :counter="10"
                    label="Que cherchez-vous ?"
                    required
                  ></v-text-field>
                  <v-text-field
                    v-model="email"
                    label="Où le cherchez-vous ?"
                    required
                  ></v-text-field>

                  <v-select
                    v-model="select"
                    :items="items"
                    label="Quelle categorie?"
                    required
                  ></v-select>

                  <v-checkbox
                    v-model="checkbox"
                    label="Do you agree?"
                    required
                  ></v-checkbox>

                  <v-btn class="mr-4" @click="addMovie">
                    submit
                  </v-btn>

                  <v-btn @click="clear">
                    clear
                  </v-btn>
                </form>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-app>
    </div>
    <div v-if="ad">
      <div v-if="select == 'Web Design'">
        <v-container m class="grey lighten-4">
          <v-row>
            <v-col sm="10" offset-sm="1" md="8" offset-md="2">
              <h1 class="display-3 my-10 text-center">
                Les meilleurs en web design!
              </h1>
            </v-col>
          </v-row>

          <v-row>
            <v-col sm="16" offset-sm="1" md="12" offset-md="0">
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
                          src=" https://scontent-cdt1-1.xx.fbcdn.net/v/t1.0-9/80741496_2890145187703523_5671904605319987200_n.jpg?_nc_cat=103&ccb=2&_nc_sid=09cbfe&_nc_ohc=KUceMAk2YDQAX-Sj7D6&_nc_ht=scontent-cdt1-1.xx&oh=dc7ce44b79bb119026311a1d7998ceb5&oe=602DF150"
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
                        <span class="ml-13  font-weight"
                          ><v-icon class="mr-2 " left small=""
                            >fas fa-map-marker-alt </v-icon
                          >LYON</span
                        >

                        <v-row align="top" justify="start"> </v-row>
                      </v-row>
                    </v-list-item>

                    <v-card-title>
                      <span class="mr-16 ml-9 title font-weight"
                        >Mohammed B.</span
                      >
                      <span class="ml-6 title font-weight"
                        ><h3 class="mt-1 ml-5">
                          web designer
                        </h3></span
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
                          src="https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-9/119654388_101043928424753_2551386304948660667_o.jpg?_nc_cat=111&ccb=2&_nc_sid=09cbfe&_nc_ohc=qu9oa47vkzoAX8AgPJy&_nc_ht=scontent-cdg2-1.xx&oh=98275b3122fb9177861e270c2b9b1a39&oe=602EB4CF"
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
                        <span class="ml-13  font-weight"
                          ><v-icon class="mr-2 " left small=""
                            >fas fa-map-marker-alt </v-icon
                          >LYON</span
                        >

                        <v-row align="top" justify="start"> </v-row>
                      </v-row>
                    </v-list-item>

                    <v-card-title>
                      <span class="mr-16 ml-9 title font-weight"
                        >Daniel T.</span
                      >
                      <span class="ml-6 title font-weight"
                        ><h3 class="mt-1 ml-5">
                          web designer
                        </h3></span
                      >
                    </v-card-title>

                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn flat to="/PrivateChat">Contact</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-col>
                <v-col sm="8" md="4">
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
                          src="https://www.upwork.com/profile-portraits/c1uF5gjvypDRaG1uTJ4L9Vcx1tXRiqGMT87OXfKOzAniZUQLKCgDlQ0zqOZIzSkRGl"
                        ></v-img>
                      </v-list-item-avatar>

                      <span class="mr-1  display-1 mb-16 subheading"></span>
                      <v-row align="center">
                        <span class="ml-16 title font-weight"
                          ><h3 class="mr-2">3.8</h3></span
                        >
                        <v-icon class="ml-5 mr-1" left>fas fa-star </v-icon>
                        <v-icon class="mr-1" left>fas fa-star </v-icon>
                        <v-icon class="mr-1" left>fas fa-star </v-icon>
                        <v-icon class="mr-1" left>fas fa-star </v-icon>

                        <span class="ml-13  font-weight"
                          ><v-icon class="mr-2 " left small=""
                            >fas fa-map-marker-alt </v-icon
                          >LYON</span
                        >

                        <v-row align="top" justify="start"> </v-row>
                      </v-row>
                    </v-list-item>

                    <v-card-title>
                      <span class="mr-16 ml-9 title font-weight">Joey B.</span>
                      <span class="ml-6 title font-weight"
                        ><h3 class="mt-1 ml-5">
                          web designer
                        </h3></span
                      >
                    </v-card-title>

                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn flat to="/PrivateChat">Contact</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-col>
                <v-col sm="8" md="4" class="mt-11">
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
                          src="https://www.upwork.com/profile-portraits/c14xLu93Bk5gACEDeaofbqcSVtmyHcYsBUd6pE0-eZ69fXzCu8U9D8J_YMJsq7nhHZ"
                        ></v-img>
                      </v-list-item-avatar>

                      <span class="mr-1  display-1 mb-16 subheading"></span>
                      <v-row align="center">
                        <span class="ml-16 title font-weight"
                          ><h3 class="mr-2">3.2</h3></span
                        >
                        <v-icon class="ml-5 mr-1" left>fas fa-star </v-icon>
                        <v-icon class="mr-1" left>fas fa-star </v-icon>
                        <v-icon class="mr-1" left>fas fa-star </v-icon>
                        <v-icon class="mr-1" left>fas fa-star </v-icon>

                        <span class="ml-13  font-weight"
                          ><v-icon class="mr-2 " left small=""
                            >fas fa-map-marker-alt </v-icon
                          >LYON</span
                        >

                        <v-row align="top" justify="start"> </v-row>
                      </v-row>
                    </v-list-item>

                    <v-card-title>
                      <span class="mr-16 ml-9 title font-weight"
                        >Monica S.</span
                      >
                      <span class="ml-6 title font-weight"
                        ><h3 class="mt-1 ml-5">
                          web designer
                        </h3></span
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
      </div>
      <div v-if="select == 'Art & Illustration'">
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
                        <span class="ml-13  font-weight"
                          ><v-icon class="mr-2 " left small=""
                            >fas fa-map-marker-alt </v-icon
                          >PARIS</span
                        >

                        <v-row align="top" justify="start"> </v-row>
                      </v-row>
                    </v-list-item>

                    <v-card-title>
                      <span class="mr-16 ml-9 title font-weight"
                        >Dmitriy K.</span
                      >
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
                        <span class="ml-13  font-weight"
                          ><v-icon class="mr-2 " left small=""
                            >fas fa-map-marker-alt </v-icon
                          >PARIS</span
                        >

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

                        <span class="ml-13  font-weight"
                          ><v-icon class="mr-2 " left small=""
                            >fas fa-map-marker-alt </v-icon
                          >PARIS</span
                        >

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
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      ad: false,
      camcam: true,
      select: null,
      items: [
        "Web Design",
        "Art & Illustration",
        "Animation",
        "Motion Design",
        "Presentation Design",
        "Physical Design"
      ],
      checkbox: false
    };
  },

  methods: {
    addMovie() {
      this.ad = true;
      this.camcam = false;
    },
    clear() {
      this.name = "";
      this.email = "";
      this.select = null;
      this.checkbox = false;
      this.select;
    }
  }
};
</script>
