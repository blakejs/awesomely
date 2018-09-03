<template>
    <v-card class="mb-3" v-if="show">
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn circle icon @click="show = !show">
                <v-icon>close</v-icon>
            </v-btn>
        </v-card-actions>
        <v-card-media class="grey" height="50px">
        </v-card-media>
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
            <h2>Features</h2>
            <ul>
                <li>Easily save your favorite Awesome Lists for later use.</li>
                <li>Share </li>
            </ul>
        </v-card-text>
        <v-card-actions>
            <v-btn flat color="primary">hello</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
export default {
    data: () => ({
        show: true,
    }),
};
</script>

