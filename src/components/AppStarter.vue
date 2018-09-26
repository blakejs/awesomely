<template>
    <v-card v-if="!DownloadUrl">
        <div class="pt-3 hero-image">
            <img src="../assets/awesomely.png" alt="Awesomely">
        </div>
            <div class="text-xs-center pb-3">
                <h4>A Dashboard for making your Awesome GitHub Resources accessible and organized.</h4>
            </div>
            <v-divider></v-divider>
            <v-card-text>
                <h2>ABOUT</h2>
                <p>Awesomely was made to make the resources contained in a category of projects called "Awesome List" more accessible and organized.</p>
                <h2>FEATURES</h2>
                <ul>
                    <li>Easily find and save your favorite Awesome for later use.</li>
                    <li>Share your favorite Awesome with friends.</li>
                    <li>Conviently view the Awesome with a user-friendly interface.</li>
                </ul>
                <h2>THANKS</h2>
                <ul>
                    <li>
                        <a href="https://github.com/sindresorhus/awesome">Sindre Sorhus</a>
                    </li>
                    <li>
                        <a href="https://github.com/sindresorhus/awesome/graphs/contributors">Everyone who helped make Awesome List</a>
                    </li>
                    <li>
                        <a href="https://github.com/lockys/awesome.json">Awesome.json</a>
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
    data: () => ({
        show: true,
    }),
    computed: {
        ...mapState(['ItemModel', 'DownloadUrl', 'UserSaved']),
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
    content: '\f00c'; /* FontAwesome Unicode */
    font-family: FontAwesome;
    display: inline-block;
    margin-left: -1.3em; /* same as padding-left set on li */
    width: 1.3em; /* same as padding-left set on li */
}
</style>
