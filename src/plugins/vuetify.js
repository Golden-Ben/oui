import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#E6510",
        secondary: "#26323",
        accent: "#79554",
        error: "#FF572",
        info: "#CDDC3",
        success: "#4CAF5",
        warning: "#00968"
      }
    }
  }
});
