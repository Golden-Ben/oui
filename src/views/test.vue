<template>
  <v-app>
    <v-navigation-drawer
      color="grey lighten-5"
      floating
      class="pa-4"
      app
      permanent
      v-model="drawer"
    >
      <v-list nav dense class="mt-16">
        <v-list-item-group v-model="group" active-class="#E7596F--text">
          <v-btn
            large
            elevation="3"
            class="large my-5 "
            flat
            v-on:click="about"
          >
            <v-list-item-icon>
              <v-icon>fas fa-address-card</v-icon>
            </v-list-item-icon>

            <v-list-item-title>
              A propos
            </v-list-item-title>
          </v-btn>

          <v-btn class="large my-5" elevation="3" large flat v-on:click="dispo">
            <v-list-item-icon>
              <v-icon>fas fa-calendar-alt</v-icon>
            </v-list-item-icon>

            <v-list-item-title>
              Projets
            </v-list-item-title>
          </v-btn>

          <v-btn class="large my-5" elevation="3" large flat v-on:click="top">
            <v-list-item-icon>
              <v-icon>mdi-check-decagram</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Top Post</v-list-item-title>
          </v-btn>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-navigation
      color="grey lighten-5"
      floating
      class="pa-4"
      app
      permanent
      v-model="drawer"
    >
      <v-layout class="pa-1">
        <div>
          <v-img
            width="130px"
            lazy-src="../assets/instagram_logo.png"
            src="../assets/instagram_logo.png"
          ></v-img>
        </div>
      </v-layout>
      <v-layout class="my-10">
        <v-flex>
          <v-layout>
            <v-flex text-center>
              <!-- <v-card class="text-center" width="70" style="border-radius: 50%" outlined> -->
              <v-avatar class="outlined" size="170">
                <v-avatar size="160">
                  <v-img
                    lazy-src="https://scontent-cdt1-1.xx.fbcdn.net/v/t1.0-9/80741496_2890145187703523_5671904605319987200_n.jpg?_nc_cat=103&ccb=2&_nc_sid=09cbfe&_nc_ohc=KUceMAk2YDQAX-Sj7D6&_nc_ht=scontent-cdt1-1.xx&oh=dc7ce44b79bb119026311a1d7998ceb5&oe=602DF150"
                    src="https://scontent-cdt1-1.xx.fbcdn.net/v/t1.0-9/80741496_2890145187703523_5671904605319987200_n.jpg?_nc_cat=103&ccb=2&_nc_sid=09cbfe&_nc_ohc=KUceMAk2YDQAX-Sj7D6&_nc_ht=scontent-cdt1-1.xx&oh=dc7ce44b79bb119026311a1d7998ceb5&oe=602DF150"
                  />
                </v-avatar>
              </v-avatar>

              <!-- </v-card> -->

              <div class="mt-4 title">Mohamed Ben</div>

              <v-icon class="ml-5 mr-1" left>fas fa-star </v-icon>
              <v-icon class="mr-1" left>fas fa-star </v-icon>
              <v-icon class="mr-1" left>fas fa-star </v-icon>
              <v-icon class="mr-1" left>fas fa-star </v-icon>
              <v-icon class="mr-1" left> far fa-star</v-icon>

              <div class="display-3 mt-3 subtitle-2 grey--text">
                <h4>
                  <v-icon class="mr-2 " left> fas fa-map-marker-alt </v-icon
                  >Lyon
                </h4>
                <v-btn class="mt-3" color="primary" flat v-on:click="msg"
                  ><v-icon class="mr-3" left>fas fa-file-signature </v-icon
                  >Contact</v-btn
                >
              </div>
              <div class="my-7 mx-10 " v-if="submitted">
                <v-layout>
                  <v-flex>
                    <div class="subtitle-2 "><h4>Job Success</h4></div>
                    <div class="subtitle-2 grey--text"><h4>80%</h4></div>
                  </v-flex>
                  <v-flex>
                    <div class="subtitle-2"><h4>Salaire</h4></div>
                    <div class="subtitle-2 grey--text">
                      <h4>£40.00/hr</h4>
                    </div>
                  </v-flex>
                </v-layout>
              </div>
            </v-flex>
          </v-layout>
          <div v-if="submitte">
            <div id="app">
              <v-app id="inspire">
                <v-row class="mt-10">
                  <v-col cols="16" sm="6" offset-sm="1" md="3" offset-md="1">
                    <v-date-picker
                      v-model="date2"
                      :event-color="date => (date[9] % 2 ? 'red' : 'yellow')"
                      :events="functionEvents"
                    ></v-date-picker>
                  </v-col>
                  <v-col
                    cols="16"
                    sm="3"
                    lg="3"
                    offset-sm="10"
                    md="4"
                    offset-md="2"
                  >
                    <h4>
                      <v-icon color="primary" left>mdi-calendar</v-icon>

                      Projets à venir :
                    </h4>
                    <div class="mt-5">
                      <h4>
                        <v-icon color="red" left>fas fa-circle</v-icon>

                        motion design
                      </h4>
                    </div>
                    <div class="mt-3">
                      <h4>
                        <v-icon color="yellow " left>fas fa-circle</v-icon>

                        logo creation
                      </h4>
                    </div>
                  </v-col>
                </v-row>
              </v-app>
            </div>
          </div>
          <div v-if="submit">
            <v-container class="pa-10">
              <stories-section />
            </v-container>
          </div>

          <div id="app" class="container mx-13">
            <div v-if="sub">
              <v-row>
                <v-col sm="10" offset-sm="1" md="9" offset-md="4">
                  <v-row>
                    <v-col sm="6" md="5">
                      <form>
                        <v-text-field
                          v-model="name"
                          :counter="10"
                          label="Nom"
                          required
                        ></v-text-field>
                        <v-text-field
                          v-model="email"
                          label="email"
                          required
                        ></v-text-field>

                        <v-textarea
                          v-model="title"
                          label="Description du projet"
                          counter
                          maxlength="120"
                          full-width
                          single-line
                          color="cyan darken"
                          loading
                        ></v-textarea>
                        <v-checkbox
                          v-model="checkbox"
                          label="Do you agree?"
                          required
                        ></v-checkbox>

                        <v-btn class="mr-4" @click="sent">
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
            </div>

            <div id="preview" v-if="cap">
              <v-col sm="10" offset-sm="1" md="9" offset-md="3">
                <v-row class="ml-16">
                  <v-col sm="6" md="5">
                    <h1 class="display-3 md-9 my-11  text-center">
                      <v-icon class="mr-2" x-large left
                        >fas fa-paper-plane
                      </v-icon>
                      Envoye
                    </h1>
                    <v-card
                      class="ml-16 mb-10"
                      height="280"
                      width="85%"
                      elevation="11"
                      outlined
                    >
                      <v-card-title>
                        <h3 class="my-2 mr-2 primary--text">Vous êtes :</h3>
                        <h3 class="my-2">{{ name }}</h3>
                        <h4 class="my-2 mr-2 primary--text">
                          Votre email :
                        </h4>
                        <h4 class="my-2">{{ email }}</h4>
                        <h5 class="my-2 mr-2 primary--text ">
                          Votre message :
                        </h5>
                        <p class="my-2">{{ title }}</p>
                      </v-card-title>
                    </v-card>
                  </v-col>
                </v-row>
              </v-col>
            </div>
          </div>
          <div v-if="submitted">
            <v-layout class="mt-6">
              <div class="heading 1 "><h3>Mohammed Ben</h3></div>
            </v-layout>
            <v-layout>
              <v-flex>
                <v-layout>
                  <div class="subtitle-2 mr-3"><h4>88</h4></div>
                  <div class="subtitle-2 ml-1 grey--text">
                    <h4>projects</h4>
                  </div>
                </v-layout>
              </v-flex>
              <v-flex>
                <v-layout>
                  <div class="subtitle-2"></div>
                  <div class="subtitle-2 ml-1 grey--text"></div>
                </v-layout>
              </v-flex>
            </v-layout>
            <v-layout class="mt-4 headline grey--text">
              Mohamed est un développeur indépendant basé à Lyon, toujours
              intéressé en apprenant de nouvelles technologies et projets!

              <br />
              A déménagé aux États-Unis il y a 7 ans pour l'université et
              travaille maintenant comme designer web à plein temps et aider les
              gens à atteindre <br />
              leurs objectifs grâce à l'entrepreneuriat!
            </v-layout>
            <v-layout class="mt-5">
              <v-flex>
                <div class="subtitle-2"><h4>Locations</h4></div>
                <div class="headline grey--text">
                  Vie à Lyon, France
                </div>
              </v-flex>
            </v-layout>

            <v-layout class="mt-5">
              <v-flex>
                <div class="subtitle-2"><h4>Profession</h4></div>
                <div class="headline grey--text">Developer</div>
              </v-flex>
            </v-layout>
            <div class="title mt-7 mb-7"><h4>Projets remarquables :</h4></div>
            <v-layout>
              <v-card height="300" width="20%" class="mx-16">
                <v-img
                  height="300"
                  width="100%"
                  src="https://uxdesignmastery.com/wp-content/uploads/2019/05/Travel-App-Cover.png"
                  class="white--text align-end"
                >
                  <v-card-title class="mt-15">Portfolio</v-card-title></v-img
                >
              </v-card>

              <v-card height="300" width="20%">
                <v-img
                  height="300"
                  width="100%"
                  src="https://i.pinimg.com/originals/9a/4a/01/9a4a01838bbbdcfdb8dd5b0c7d5510c1.jpg"
                  class="white--text align-end"
                  ><v-card-title class="mt-15">Header</v-card-title></v-img
                >
              </v-card>
            </v-layout>
          </div>
        </v-flex>
      </v-layout>
    </v-navigation>
  </v-app>
</template>

<script>
import StoriesSection from "../components/StoriesSection";

export default {
  components: {
    StoriesSection
  },
  data() {
    return {
      submitted: false,
      submitte: false,
      submit: false,
      sub: false,
      su: false,
      cap: false,
      name: "",
      email: "",

      title: "",

      checkbox: false
    };
  },
  methods: {
    sent() {
      this.cap = true;
      this.sub = false;
    },
    clear() {
      this.name = "";
      this.email = "";

      this.title = "";
      this.checkbox = false;
    },
    about() {
      this.submitte = false;
      this.submit = false;
      this.submitted = true;
      this.su = false;
      this.sub = false;

      this.cap = false;
    },

    dispo() {
      this.submitted = false;
      this.submit = false;
      this.submitte = true;
      this.su = false;
      this.cap = false;
    },
    top() {
      this.submit = true;
      this.submitte = false;
      this.submitted = false;
      this.su = false;
      this.sub = false;
      this.cap = false;
    },
    msg() {
      this.sub = true;
      this.submit = false;
      this.submitte = false;
      this.submitted = false;
      this.su = false;
      this.cap = false;
    },
    val() {
      this.su = true;
      this.sub = false;
      this.submit = false;
      this.submitte = false;
      this.submitted = false;

      this.cap = false;
    },

    functionEvents(date) {
      const [, , day] = date.split("-");
      if ([12, 17, 28].includes(parseInt(day, 10))) return true;
      if ([1, 19, 22].includes(parseInt(day, 5))) return ["red"];
      return false;
    }
  }
};
</script>

<style>
.v-avatar.outlined {
  border: 2px solid #116906;
  background-color: transparent;
  border-radius: 50%;
  height: 100px;
  width: 100px;
}
</style>
