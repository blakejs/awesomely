<template>
    <v-card v-if="!ItemModel.repo">
        <div class="pt-3 hero-image">
            <img src="../assets/awesomely.png" alt="Awesomely">
        </div>
        <div class="text-xs-center pa-3">
            <h4>A Dashboard for making your AWESOME GitHub resources accessible and organized.</h4>
        </div>
        <v-divider></v-divider>
        <v-card-text>
            <h2>ABOUT</h2>
            <p><strong>Awesomely</strong> is a web application where you can easily find the complete AWESOME List, save and keep your favorite Awesomes on your own dashboard, and go directly into each official Awesome GitHub repository.<br>

            <h3>What is the AWESOME List?</h3>
The Awesome List a repository on GitHub where you can find countless links Awesome GitHub repositories. This list includes repos for resources on programming languages, gaming, development enviroments, cyber security, hardware, and many others!<br><br>

            <h3>What makes a resource Awesome?</h3>
The Awesome Manifesto - From the creator of the Awesome List on what makes an Awesome List - "Research if the stuff you are including is actually awesome. Only put stuff on the list that you or another contributor can personally recommend. You should rather leave stuff out than include too much. After all, it is a curation, not a collection.</p>
            <h2>FEATURES</h2>
            <ul>
                <li>Easily find and save your favorite AWESOME for later use.</li>
                <li>Share your favorite AWESOME GitHub repositories with friends.</li>
                <li>Conviently view the AWESOME with a user-friendly interface.</li>
            </ul>
            <h2>THANKS</h2>
            <ul>
                <li>
                    <a href="https://github.com/sindresorhus/awesome">Sindre Sorhus</a>
                </li>
                <li>
                    <a href="https://github.com/sindresorhus/awesome/graphs/contributors">Everyone who helped make AWESOME List</a>
                </li>
                <li>
                    <a href="https://github.com/lockys/awesome.json">AWESOME.json</a>
                </li>
            </ul>
        </v-card-text>
        <v-card-actions>
            <v-btn flat color="primary" href="https://github.com/blakejs/awesomely">
                <v-icon>star</v-icon>Star
            </v-btn>
            <v-btn flat color="primary" href="https://github.com/blakejs/awesomely#contributing">
                <v-icon>build</v-icon>Contribute
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
import { mapState } from 'vuex';

export default {
    computed: {
        ...mapState(['ItemModel']),
    },
};
</script>

<style scoped>
.hero-image {
    display: grid;
    align-items: center;
    justify-content: center;
}
ul {
    list-style: none;
    padding-right: 10px;
}
li {
    padding-left: 1.3em;
}
li:before {
    content: '✓';
    display: inline-block;
    margin-left: -1.3em; /* same as padding-left set on li */
    width: 1.3em; /* same as padding-left set on li */
}
</style>
