<template>
  <div id="app">
    <v-app id="inspire">
      <v-row class="mt-10">
        <v-col cols="16" sm="6" offset-sm="1" md="1" offset-md="2">
          <v-date-picker
            v-model="date2"
            :event-color="date => (date[9] % 2 ? 'red' : 'yellow')"
            :events="functionEvents"
          ></v-date-picker>
        </v-col>
        <v-col cols="16" sm="3" lg="3" offset-sm="10" md="4" offset-md="2">
          <v-text-field
            v-model="dateRangeText"
            label="Date range"
            prepend-icon="mdi-calendar"
            readonly
          ></v-text-field>
          <div class="mt-5">
            <v-icon color="red" small left>fas fa-circle</v-icon>

            motion design: {{ dates }}
          </div>
          <div class="mt-3">
            <v-icon color="yellow" small left>fas fa-circle</v-icon>

            logo creation : {{ dates }}
          </div>
        </v-col>
      </v-row>
    </v-app>
  </div>
</template>

<script>
export default {
  data: () => ({
    dates: ["2019-09-10", "2019-09-20"]
  }),

  methods: {
    functionEvents(date) {
      const [, , day] = date.split("-");
      if ([12, 17, 28].includes(parseInt(day, 10))) return true;
      if ([1, 19, 22].includes(parseInt(day, 5))) return ["red"];
      return false;
    }
  }
};
</script>

<style></style>
