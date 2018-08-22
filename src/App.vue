<template>
    <v-app>
        <v-navigation-drawer v-model="drawer" fixed right app>
            <v-subheader style="margin-bottom:-30px">SEARCH FOR AWESOMES</v-subheader>
            <v-text-field prepend-icon="search" single-line class="pa-3"></v-text-field>
            <v-divider></v-divider>
            <v-list dense>
                <v-subheader>CHOOSE YOUR AWESOMES</v-subheader>
                <v-list-group v-for="subject in Object.keys(AwesomeData)" :key="subject">
                    <v-list-tile slot="activator">
                        <v-icon class="hidden-xs-only pr-3">home</v-icon>
                        <v-list-tile-content>
                            <v-list-tile-title>{{ subject }}</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-list v-for="subitems in AwesomeData[subject]" :key="subitems.name" dense>
                        <v-list-tile @click="passRepo(subitems.repo)">
                            <v-icon>subdirectory_arrow_right</v-icon>
                            <v-list-tile-action>{{ subitems.name }}</v-list-tile-action>
                            <v-spacer></v-spacer>
                            <v-btn round small icon color="grey" @click="router.push('/e')">
                                <v-icon style="color:white">star</v-icon>
                            </v-btn>
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
            <router-view :repos="repos" />
        </v-content>
        <v-footer app>
            <span class="pa-2">BlakeJS &copy; 2018</span>
        </v-footer>
    </v-app>
</template>

<script>
    import AwesomeData from '../static/awesome.json'

    export default {
        data: () => ({
            AwesomeData,
            drawer: null,
            repos: '',
        }),
        methods: {
            passRepo(repo) {
                let repoSplit = repo.split('/');
                let maintainer = repoSplit[0];
                let repoName = repoSplit[1];
                fetch('https://api.github.com/repos/' + repo + '/readme')
                    .then(response => response.json())
                    .then(data => {
                        this.repos = data.download_url // sets repos prop to raw markdown link
                    })
                    .catch(error => console.error(error))
            }
        }
    }
</script>

<style>
body {
    overflow-x: hidden !important;
}
</style>