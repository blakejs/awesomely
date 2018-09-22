<template>
    <v-card class="mb-3" v-if="!GithubRepoLink">
        <div style="display:grid" class="pt-3">
            <img src="../assets/awesomely.png" alt="awesome" style="align-self:center;justify-self:center">
        </div>
        <div class="text-xs-center pb-3">
            <h4>A Dashboard for making your Awesome GitHub Resources accessible and organized.</h4>
        </div>
        <v-divider></v-divider>
        <v-card-text>
            <h2>Why?</h2>
            <p>Awesomely was made to make the resources contained in the github readme files of a category of projects called "Awesome List" (sometimes called Awesomes) more accessible.</p>
            <h2>What?</h2>
            <ul>
                <li>Easily save your favorite Awesome Lists for later use.</li>
                <li>Share your favorite Awesome List with friends.</li>
                <li>Conviently view the Awesome with a user-friendly interface.</li>
            </ul>
            <h2>Who?</h2>
            <span>Made with ☕ by blakejs</span>
        </v-card-text>
        <v-card-actions>
            <v-btn flat color="primary" href="https://github.com/blakejs/awesomely">Contribute</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
import { mapState } from 'vuex';

export default {
    data: () => ({
        show: true,
    }),
    computed: {
        ...mapState(['GithubRepoLink', 'GithubRepoName', 'GithubRepoURL']),
    },
};
</script>

