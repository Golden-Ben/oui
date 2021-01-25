<template>
  <div id="app" class="container mx-13">
    <v-app id="inspire" class="mt-7 ml-5 container form-group ">
      <div v-if="!cap">
        <v-row>
          <v-col sm="10" offset-sm="1" md="9" offset-md="4">
            <v-row>
              <v-col sm="6" md="5">
                <h1 class="display-3 md-7 my-11">
                  Publiez votre profil, accrocher un projet!
                </h1>
                <form>
                  <v-text-field
                    v-model="name"
                    :counter="10"
                    label="Localisation"
                    required
                  ></v-text-field>
                  <v-text-field
                    v-model="email"
                    label="Domaine "
                    required
                  ></v-text-field>

                  <v-textarea
                    v-model="title"
                    label="Votre Stack"
                    counter
                    maxlength="120"
                    full-width
                    single-line
                    color="cyan darken"
                    loading
                  ></v-textarea>
                  <input type="file" @change="onFileSelected" />
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
        <v-col sm="6" md="4">
          <v-card
            class="ml-16 mb-10"
            height="280"
            width="85%"
            elevation="11"
            outlined
          >
            <v-card-title>
              <h3 class="mt-7 mb-2 mr-2 primary--text">Vous êtes à :</h3>
              <h3 class="mt-7">{{ name }}</h3>

              <h4 class="my-2 mr-2 primary--text">Dans le Domaine du :</h4>
              <h4 class="my-2">{{ email }}</h4>
              <h5 class="my-2 mr-2 primary--text ">Stack Techniques :</h5>
              <p class="my-2">{{ title }}</p>
            </v-card-title>
          </v-card>
        </v-col>
      </div>
    </v-app>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",

      title: "",

      checkbox: false,
      cap: false
    };
  },
  methods: {
    onFileSelected(event) {
      console.log(event);
    },
    sent() {
      this.cap = true;
    },
    clear() {
      this.name = "";
      this.email = "";

      this.title = "";
      this.checkbox = false;
    }
  }
};
</script>

<style>
#preview {
  margin: 30px 0;
  padding: 10px 20px;
  border: 1px dotted #ccc;
}
h3 {
  margin-top: 10px;
}
</style>
