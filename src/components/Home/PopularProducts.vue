<template>
  <div id="app">
    <v-app class="grey lighten-4" id="inspire">
      <v-container>
        <v-row class="mt-n16 mx-0 ">
          <v-col class=" my-n6 mx-0">
            <h1 class="display-3 text-center mb-16">
              Trouvez des talents de qualité
            </h1>
          </v-col>
        </v-row>
        <v-row class="mt-5 mx-0 ">
          <v-col xs12 sm6 md4 lg3>
            <v-row>
              <v-col sm="6" md="4">
                <v-card
                  class="ml-16 mb-10"
                  height="270"
                  width="70%"
                  elevation="11"
                  outlined
                >
                  <v-card-action>
                    <v-img
                      src="https://www.upwork.com/static/assets/Brontes/72ba228/img/development-desktop.29e32ce.svg"
                    ></v-img>
                    <v-btn
                      flat
                      to="store"
                      class="center mt-3 font-weight-bold"
                      small
                      text
                      block
                    >
                      <h5 class="mt-8">Web Design</h5>
                    </v-btn>
                  </v-card-action>
                </v-card>
              </v-col>

              <v-col sm="6" md="4">
                <v-card
                  class="ml-15 mb-10"
                  height="270"
                  width="70%"
                  elevation="9"
                  outlined
                >
                  <v-card-action>
                    <v-img
                      src="https://www.upwork.com/static/assets/Brontes/72ba228/img/design-creative-desktop.109353b.svg"
                    ></v-img>
                    <v-btn
                      flat
                      to="store1"
                      class="center mt-3 font-weight-bold"
                      text
                      block
                    >
                      <h5 class="mt-8">Art & Illustration</h5>
                    </v-btn>
                  </v-card-action>
                </v-card>
              </v-col>

              <v-col sm="6" md="4">
                <v-card
                  class="ml-16 mb-10"
                  height="270"
                  width="70%"
                  elevation="11"
                  outlined
                >
                  <v-card-action>
                    <v-img
                      src="https://www.upwork.com/static/assets/Brontes/72ba228/img/customer-service-desktop.22b35df.svg"
                    ></v-img>
                    <v-btn
                      flat
                      to="store"
                      class="center mt-3 font-weight-bold"
                      small
                      text
                      block
                    >
                      <h5 class="mt-8">Animation</h5>
                    </v-btn>
                  </v-card-action>
                </v-card>
              </v-col>

              <v-col sm="6" md="4">
                <v-card
                  class="ml-16 mb-10"
                  height="270"
                  width="70%"
                  elevation="11"
                  outlined
                >
                  <v-card-action>
                    <v-img
                      src="https://www.upwork.com/static/assets/Brontes/72ba228/img/data-science-desktop.b430512.svg"
                    ></v-img>
                    <v-btn
                      flat
                      to="store"
                      class="center mt-3 font-weight-bold"
                      small
                      text
                      block
                    >
                      <h5 class="mt-8">Motion Graphics Design</h5>
                    </v-btn>
                  </v-card-action>
                </v-card>
              </v-col>

              <v-col sm="6" md="4">
                <v-card
                  class="ml-16 mb-10"
                  height="270"
                  width="70%"
                  elevation="11"
                  outlined
                >
                  <v-card-action>
                    <v-img
                      src="https://www.upwork.com/static/assets/Brontes/72ba228/img/admin-support-desktop.ff2e0d4.svg"
                    ></v-img>
                    <v-btn
                      flat
                      to="store"
                      class="center mt-3 font-weight-bold"
                      small
                      text
                      block
                    >
                      <h5 class="mt-8">Presentation Design</h5>
                    </v-btn>
                  </v-card-action>
                </v-card>
              </v-col>

              <v-col sm="6" md="4">
                <v-card
                  class="ml-16 mb-10"
                  height="270"
                  width="70%"
                  elevation="11"
                  outlined
                >
                  <v-card-action>
                    <v-img
                      src="https://www.upwork.com/static/assets/Brontes/72ba228/img/engineering-architecture-desktop.85b023c.svg"
                    ></v-img>
                    <v-btn
                      flat
                      to="store"
                      class="center mt-3 font-weight-bold"
                      small
                      text
                      block
                    >
                      <h5 class="mt-8">Physical Design</h5>
                    </v-btn>
                  </v-card-action>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>

      <v-container class="mt-15 grey lighten-3 ">
        <v-col>
          <h1 class="display-3 text-center my-7 grey lighten-3">
            Guide d'utilisation
          </h1>
        </v-col>
      </v-container>

      <v-container class="grey lighten-3">
        <v-layout row wrap>
          <v-flex xs12 sm6 md4 lg3 v-for="person in team" :key="person.title">
            <v-col>
              <v-card class="mx-9 grey lighten-3 " height="50" width="80%" flat>
                <v-card-action>
                  <img height="150" width="90%" :src="person.link" alt="" />

                  <v-card-text
                    height="90"
                    width="90%"
                    outlined
                    class="center"
                    color="warning"
                  >
                    <h3
                      data-qa="title-h4"
                      class="h4 hiw-title mb-5 mt-auto mt-xl-20"
                    >
                      <div class="subtitle-2 accent--text">
                        <h4>{{ person.title }}</h4>
                      </div>
                      <span></span>
                    </h3>

                    <h4 class="title hiw-text  d-none d-lg-block m-0">
                      {{ person.texte }}
                    </h4>

                    <p
                      data-qa="subtitle-mobile"
                      class="hiw-text d-lg-none m-0 pl-20 pl-md-0"
                    ></p>
                  </v-card-text>
                </v-card-action>
              </v-card>
            </v-col>
          </v-flex>
        </v-layout>
      </v-container>
    </v-app>
  </div>
</template>

<script>
import VueResponsiveImage from "vue-responsive-image";
import { methods } from "../../views/store.vue";

export default {
  // la declarer le compoent

  data() {
    return {
      itemsPerPage: 4,
      items: [
        {
          name: "Ice cream sandwich",
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          sodium: 129,
          calcium: "8%",
          iron: "1%"
        },
        {
          name: "Eclair",
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          sodium: 337,
          calcium: "6%",
          iron: "7%"
        },
        {
          name: "Cupcake",
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          sodium: 413,
          calcium: "3%",
          iron: "8%"
        }
      ],
      team: [
        {
          link:
            "https://www.upwork.com/static/assets/Brontes/72ba228/img/find.9449b48.svg",
          title: "1. Publiez un emploi",
          texte:
            "Parlez nous de votre projet. On vous met en relation avec les meilleurs talents et agences du monde entier ou près de chez vous."
        },
        {
          link:
            "https://www.upwork.com/static/assets/Brontes/72ba228/img/hire.f1d0563.svg",
          title: "2. Choisissez libement",
          texte:
            "Obtenez des propositions dans les 24 heures. Comparez les offres et les travaux antérieurs. Interviewez vos favoris et engagez la meilleure personne."
        },
        {
          link:
            "https://www.upwork.com/static/assets/Brontes/72ba228/img/work.e0cdb7b.svg",
          title: "3. Collaborez facilement",
          texte:
            "Discuter ou passer un appel vidéo, partager des fichiers et suivre les jalons du projet depuis votre ordinateur ou votre mobile."
        },
        {
          link:
            "https://www.upwork.com/static/assets/Brontes/72ba228/img/pay.8951f52.svg",
          title: "4. Paiement simplifié",
          texte:
            "Payez à l'heure ou à un prix fixe et recevez des factures. Payez pour le travail que vous autorisez."
        }
      ]
    };
  }
};
</script>
