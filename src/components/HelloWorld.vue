<template>
  <v-app>
    <v-app-bar app color="white accent-4" dark>
      <v-toolbar-title class="text-center black--text">
        <strong>ToDoApp</strong>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <v-tooltip left>
        <template v-slot:activator="{ on }">
          <v-btn icon color="black" v-on="on" class="mr-2" @click="changeRTL">
            <v-icon>mdi-heart</v-icon>
          </v-btn>
        </template>
        <span>{{direction == 'ltr' ? 'LTR' : 'RTL'}}</span>
      </v-tooltip>
      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-btn icon color="black" v-on="on" class="mr-2" href="https://github.com/gopalakrishnan94" target="_blank">
            <v-icon>mdi-github</v-icon>
          </v-btn>
        </template>
        <span>gopalakrishnan94</span>
      </v-tooltip>
    </v-app-bar>

    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>

    <v-footer color="primary" padless app>
      <v-row justify="center" no-gutters>
        <v-col class="secondary lighten-5 py-2 text-center black--text" cols="12">
          <v-btn text href="https://github.com/gopalakrishnan94" target="_blank"><strong>&copy;&nbsp; WORK BY GOPALA KRISHNAN {{ new Date().getFullYear() }}</strong></v-btn>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<style>
.slideInUp {
  -webkit-animation-name: slideInUp;
  animation-name: slideInUp;
  -webkit-animation-duration: 1.89s;
  animation-duration: 1.89s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

.fadeInOut {
  opacity: 0;
  animation: fadeInOut 1.1s both;
}

@-webkit-keyframes slideInUp {
  0% {
    -webkit-transform: translateY(100%);
    transform: translateY(100%);
    visibility: visible;
  }

  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}
@keyframes slideInUp {
  0% {
    -webkit-transform: translateY(100%);
    transform: translateY(100%);
    visibility: visible;
  }

  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}
@keyframes fadeInOut {
  0% {
    opacity: 1;
    transform: translateY(0px);
  }
  50% {
    opacity: 0;
    transform: translateY(40px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}
</style>

<script>

export default {
  name: "HelloWorld",

  data: () => ({
    drawer: null,
    direction: "ltr",
    items: [],
    item: "",
  }),

  methods: {
    changeRTL() {
      if (this.direction == "ltr") {
        this.$vuetify.rtl = true;
        this.direction = "rtl";
      } else {
        this.$vuetify.rtl = false;
        this.direction = "ltr";
      }
    },
  }
};
</script>
