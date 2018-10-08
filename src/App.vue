<template>
    <v-app>
        <v-navigation-drawer v-model="drawer" fixed right app>
            <v-toolbar dense color="white">
                <v-autocomplete v-model="model" :search-input.sync="search" :items="items" color="white" item-text="name" placeholder="Search awesomely" append-icon="search" hide-selected return-object />
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
            <button class="home" @click="$router.push('/')">
                <v-toolbar-title class="font-weight-bolder">awesomely</v-toolbar-title>
            </button>
            <v-spacer></v-spacer>
            <button class="home" @click="$router.push('/dash')">
                <v-toolbar-title class="font-weight-bolder">dashboard</v-toolbar-title>
            </button>
            <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        </v-toolbar>
        <v-content class="mb-4">
            <router-view />
        </v-content>
        <v-footer absolute class="justify-center">
            <span>
                Made with ❤ by
                <a href="http://blakejs.com">BlakeJS</a>
            </span>
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
    }),
    computed: {
        ...mapState(['AwesomeData']),
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
    background-color: #fc60a850;
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
</style>
