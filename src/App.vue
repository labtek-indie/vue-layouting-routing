<template>
  <v-app >
      <!-- THIS IS NAVIGATION DRAWER -->
      <v-navigation-drawer temporary v-model="sideNav" absolute>
          <v-list>
              <v-list-tile
                v-for="item in menuItems"
                :key="item.title"
                :to="item.link"
                >
                  <v-list-tile-action>
                      <v-icon>{{ item.icon }}</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>{{ item.title }}</v-list-tile-content>
              </v-list-tile>
          </v-list>
      </v-navigation-drawer>

      <!-- THIS IS THE TOOLBAR STRUCTURE -->
      <v-toolbar>
          <!-- responsive drawer -->
          <v-toolbar-side-icon
            @click.native="sideNav = !sideNav"
            class="hidden-sm-and-up">
          </v-toolbar-side-icon>

          <!-- title -->
          <v-toolbar-title>
              <router-link to="/" tag="span" style="cursor: pointer">
                  Koralin Web App
              </router-link>
          </v-toolbar-title>
          <v-spacer></v-spacer>

          <!-- toolbar item -->
          <v-toolbar-item class="hidden-xs-only">
              <v-btn
                flat
                v-for="item in menuItems"
                :key="item.title"
                :to="item.link"
                >
                  <v-icon left>{{ item.icon}}</v-icon>
                  {{ item.title }}
              </v-btn>
          </v-toolbar-item>
      </v-toolbar>

      <!-- THIS IS MAIN  -->
      <main>
          <!-- page router -->
          <router-view>
          </router-view>
      </main>
  </v-app>
</template>


<script>
/* eslint-disable */
  export default {
    data () {
      return {
        sideNav: false,
        menuItems: [
            { icon: 'account_box', title: 'Profile', link: '/user'},
            { icon: 'assignment', title: 'Projects', link: '/projects'}
        ]
      }
    }
  }
</script>
