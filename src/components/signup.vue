<template>
  <v-layout class="mt-16" align-center justify-center>
    <v-flex xs12 sm8 md4>
      <v-card class="elevation-12">
        <v-toolbar dark color="teal darken-4">
          <v-toolbar-title>Signup form</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <v-card-text>
          <v-form>
            <v-text-field
              prepend-icon=""
              class="form-control"
              v-model="formData.text"
              label="Name"
              type="text"
              placeholder="Name"
            ></v-text-field>
            <v-text-field
              prepend-icon=""
              class="form-control"
              v-model="formData.email"
              label="Email"
              type="email"
              placeholder="email"
            ></v-text-field>

            <v-text-field
              id="password"
              class="form-control"
              v-model="formData.password"
              label="Password"
              type="password"
              placeholder="password"
            ></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn dark="" color="teal darken-4" type="submit" @click="signUp"
            >Signup</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: "Signup",
  data() {
    return {
      formData: {
        name: "",
        email: "",
        password: ""
      }
    };
  },
  methods: {
    signUp() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(
          this.formData.email,
          this.formData.password
        )
        .then(user => {
          this.$router.replace("/");
        })
        .catch(e => {
          alert("oops" + e.message);
        });
    }
  },

  created() {}
};
</script>
