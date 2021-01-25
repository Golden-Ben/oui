<template>
  <v-layout class="mt-16" align-center justify-center>
    <v-flex xs12 sm8 md4>
      <v-card class="elevation-12">
        <v-toolbar dark color="teal darken-4">
          <v-toolbar-title>Login form</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <v-card-text>
          <v-form>
            <v-text-field
              prepend-icon=""
              class="form-control"
              v-model="formData.email"
              label="Email"
              type="text"
            ></v-text-field>
            <v-text-field
              id="password"
              class="form-control"
              prepend-icon=""
              v-model="formData.password"
              label="Password"
              type="password"
            ></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn dark="" color="teal darken-4" @click="signIn">Login</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: "SignIn",
  data() {
    return {
      formData: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    signIn() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.formData.email, this.formData.password)
        .then(user => {
          this.$router.replace("/");
        })
        .catch(e => {
          alert(e.message);
        });
    }
  },

  created() {}
};
</script>
