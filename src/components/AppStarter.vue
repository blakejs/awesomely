<template>
    <v-card class="mb-3" v-if="!GithubRepoLink">
        <div style="display:grid">
            <img src="../assets/awesome.svg" alt="awesome" style="align-self:center;justify-self:center">
        </div>
        <v-card-title primary-title>
            <div>
                <h3 class="headline mb-0">Welcome to Awesomely</h3>
                <div>A Dashboard for organizing and quickly accessing Awesome Github Lists.</div>
                <iframe src="https://ghbtns.com/github-btn.html?user=blakejs&repo=Awesomely&type=star&count=true" frameborder="0" scrolling="0" width="170px" height="20px"></iframe>
                <p>
                    <img src="https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg" alt="awesome badge." />
                </p>
            </div>
        </v-card-title>
        <v-card-text>
            <h2>Why?</h2>
            <span>Awesomely was made to make the resources contained in the github readme files of a category of projects called "Awesome List" (sometimes called Awesomes) more accessible.</span>
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

