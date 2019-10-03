<template>
  <v-app>
    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>
        ORSoft - Tareas
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-navigation-drawer app v-model="drawer" temporary dark>
      <v-layout mt-4 column align-center>
        <v-flex>
          <v-avatar>
            <img src="https://yt3.ggpht.com/a/AGF-l79aE2GXk3xCB9eb_vTNEm3t5j1c-iXPQ1i_9g=s288-c-k-c0xffffffff-no-rj-mo" alt="avatar_user">
          </v-avatar>
        </v-flex>
        <v-flex>
          <p class="white--text headline mt-3">Omar Ramirez</p>
        </v-flex>
      </v-layout>
      <v-container grid-list-md>
        <v-layout column>
          <v-flex mx-3>
            <v-btn color="success" block :to="{name: 'home'}" exact>Home</v-btn>
            <v-btn mt-3 color="success" block :to="{name: 'tareas-crud'}">Tareas</v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </v-navigation-drawer>

    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      drawer: false
    }
  },
};
</script>
