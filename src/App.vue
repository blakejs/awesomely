<template>
    <v-app>
        <v-navigation-drawer v-model="drawer" fixed right app>
            <v-subheader style="margin-bottom:-40px">SEARCH AWESOMES</v-subheader>
            <v-text-field prepend-icon="search" single-line class="pa-3" style="margin-bottom:-20px"></v-text-field>
            <v-divider></v-divider>
            <v-list dense>
                <v-subheader>CHOOSE AWESOMES</v-subheader>
                <v-list-group v-for="subject in Object.keys(AwesomeData)" :key="subject">
                    <v-list-tile slot="activator">
                        <v-icon class="pr-1">home</v-icon>
                        <v-list-tile-content>
                            <v-list-tile-title>{{ subject }}</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-list v-for="items in AwesomeData[subject]" :key="items.name" dense>
                        <v-list-tile @click="passRepo(items.name, items.url, items.repo)">
                            <v-icon>subdirectory_arrow_right</v-icon>
                            <v-list-tile-action>{{ items.name }}</v-list-tile-action>
                        </v-list-tile>
                    </v-list>
                </v-list-group>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar app dense>
            <v-toolbar-title class="toolbar-title">awesomely</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        </v-toolbar>
        <v-content class="content">
            <router-view />
        </v-content>
        <v-footer app>
            <span class="pa-2">BlakeJS &copy; 2018</span>
        </v-footer>
    </v-app>
</template>

<script>
import { mapState } from 'vuex';

export default {
    data: () => ({
        drawer: null,
        repo: '',
    }),
    methods: {
        passRepo(name, url, repo) {
            this.$store.commit('SET_REPONAME', name);
            this.$store.commit('SET_REPOURL', url);
            fetch('https://api.github.com/repos/' + repo + '/readme')
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    this.$store.commit('SET_REPOLINK', data.download_url);
                })
                .catch(error => console.error(error));
        },
    },
    computed: {
        ...mapState(['AwesomeData']),
    },
};
</script>

<style scoped>
.content {
    background-color: #fc60a850;
}
.toolbar-title {
    font-weight: bold;
}
</style>
