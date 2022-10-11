<template>
    <v-app :dark="dark">
        <v-navigation-drawer v-model="drawer" fixed right app>
            <v-toolbar dense>
                <v-autocomplete v-model="model" :search-input.sync="search" :items="items" 
                  item-text="name" placeholder="Search awesomely" append-icon="search" 
                  hide-selected return-object />
            </v-toolbar>
            <v-list dense class="mb-5">
                <v-subheader>Awesomes</v-subheader>
                <v-list-group v-for="subject in Object.keys(AwesomeData)" :key="subject">
                    <v-list-tile slot="activator">
                        <v-icon class="pr-1">home</v-icon>
                        <v-list-tile-content>
                            <v-list-tile-title>{{ subject }}</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-list v-for="items in AwesomeData[subject]" :key="items.name" dense>
                        <v-list-tile @click="model = items" to="/">
                            <v-icon>subdirectory_arrow_right</v-icon>
                            <v-list-tile-action>{{ items.name }}</v-list-tile-action>
                        </v-list-tile>
                    </v-list>
                </v-list-group>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar app dense>
            <button class="home" @click="$router.push('/')" v-if="this.$store.state.DownloadUrl == 0">
                <v-toolbar-title class="font-weight-bolder">Awesomely</v-toolbar-title>
            </button>
            <button class="home" @click="$router.push('/dash')" v-else>
                <v-toolbar-title class="font-weight-bolder">Dashboard</v-toolbar-title>
            </button>
            <v-spacer></v-spacer>
            <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        </v-toolbar>
        <v-content class="mb-4">
            <router-view />
        </v-content>
        <v-footer absolute class="flex justify-space-between">
            <div>
              <span class="pl-2">
                Made with ❤ by <a href="https://blakejs.com">BlakeJS</a>
              </span>
            </div>
            <div class="pr-2">
              <v-btn flat @click="dark = !dark">
                <v-icon>{{ dark ? 'light_mode' : 'dark_mode' }}</v-icon>
              </v-btn>
            </div>
        </v-footer>
    </v-app>
</template>

<script>
import { mapState } from 'vuex';
import AwesomeData from '../static/awesome.json';

export default {
    data: () => ({
        items: Object.values(AwesomeData).flat(),
        drawer: null,
        search: null,
        model: null,
        dark: true
    }),
    computed: {
        ...mapState(['AwesomeData', 'itemModel']),
    },
    watch: {
        model() {
            this.$store.commit('SET_ITEM_MODEL', this.model);
            this.$router.push('/');
        },
    },
};
</script>

<style scoped>
.v-content {
    background-color: #f0f0f050;
}
.v-autocomplete {
    margin-bottom: -15px !important;
}
.v-subheader {
    text-decoration: underline;
}
.home {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    outline: none;
}
.v-footer .v-btn {
  max-height: 30px;
  margin: 0;
}
</style>
