<template>
  <div>
    <v-offline @detected-condition="amIOnline"></v-offline>
    <router-view></router-view>
    <v-dialog v-model="isOnline" persistent max-width="20%">
      <v-card class="text-center pa-5">
        <v-card-text class="mt-5">
          <h3>You Are OffLine!!</h3>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import VOffline from "v-offline";

export default {
  name: "App",

  components: {
    VOffline
  },

  data: () => ({
    drawer: null,
    isOnline: false
  }),

  methods: {
    amIOnline(e) {
      this.checkOnline(e)
    },
    checkOnline(status) {
      console.log(status)
      this.isOnline = !status
    }
  },
};
</script>
