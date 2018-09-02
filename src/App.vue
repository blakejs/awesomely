<template>
    <v-app>
        <v-navigation-drawer v-model="drawer" fixed right app>
            <v-subheader style="margin-bottom:-40px">SEARCH FOR AWESOMES</v-subheader>
            <v-text-field prepend-icon="search" single-line class="pa-3"></v-text-field>
            <v-divider></v-divider>
            <v-list dense>
                <v-subheader>CHOOSE AN AWESOME LIST</v-subheader>
                <v-list-group v-for="subject in Object.keys(AwesomeData)" :key="subject">
                    <v-list-tile slot="activator">
                        <v-icon class="pr-1">home</v-icon>
                        <v-list-tile-content>
                            <v-list-tile-title>{{ subject }}</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-list v-for="items in AwesomeData[subject]" :key="items.name" dense>
                        <v-list-tile @click="passRepo(items.repo)">
                            <v-icon>subdirectory_arrow_right</v-icon>
                            <v-list-tile-action>{{ items.name }}</v-list-tile-action>
                        </v-list-tile>
                    </v-list>
                </v-list-group>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar app>
            <v-toolbar-title>Awesomely</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        </v-toolbar>
        <v-content>
            <router-view />
        </v-content>
        <v-footer app>
            <span class="pa-2">BlakeJS &copy; 2018</span>
        </v-footer>
    </v-app>
</template>

<script>
export default {
    data: () => ({
        drawer: null,
        repo: '',
    }),
    methods: {
        passRepo(repo) {
            fetch('https://api.github.com/repos/' + repo + '/readme')
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    this.$store.commit('SET_REPOLINK', data.download_url);
                })
                .catch(e => console.error(e));
        },
    },
    computed: {
        AwesomeData() {
            return this.$store.state.AwesomeData;
        },
    },
};
</script>
