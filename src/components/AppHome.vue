<template>
    <v-container fluid class="px-3">
        <v-layout justify-center align-center row>
            <v-flex md9>
                <v-card class="mb-3" v-if="this.repos == false">
                    <v-card-media src="/src/assets/logo.png" height="200px">
                    </v-card-media>
                    <v-card-title primary-title>
                        <div>
                            <h3 class="headline mb-0">Welcome to Awesomely</h3>
                            <div>A Dashboard for organizing Awesome Github Lists.<br>To begin, choose an Awesome from the sidebar</div>
                        </div>
                    </v-card-title>
                    <v-card-actions>
                        <v-btn flat color="primary">text</v-btn>
                        <v-btn flat color="primary">text</v-btn>
                    </v-card-actions>
                </v-card>
                <v-card style="max-width: 100%;max-height: 100%;overflow: auto" v-else>
                    <v-card-title primary-title>
                        <div>
                            <div class="headline">REPO TITLE</div>
                            <span class="grey--text">REPO DESC</span>
                        </div>
                        <v-spacer></v-spacer>
                        <v-btn round small icon color="grey" @click="router.push('/e')">
                            <v-icon style="color:white">star</v-icon>
                        </v-btn>
                    </v-card-title>

                    <v-card-actions>
                        <v-btn flat>Visit GitHub</v-btn>
                        <v-btn flat>Share</v-btn>
                        <v-spacer></v-spacer>
                        <v-btn icon @click="show = !show">
                            <v-icon>{{ show ? 'keyboard_arrow_up' : 'keyboard_arrow_down' }}</v-icon>
                        </v-btn>
                    </v-card-actions>

                    <v-slide-y-transition>
                        <v-card-text v-show="show">
                            <v-progress-linear :indeterminate="true" color="primary" v-if="loading"></v-progress-linear>
                            <vue-markdown :html="true" :source="readme" :toc="true" :postrender="fixBrokenImages()"></vue-markdown>
                        </v-card-text>
                    </v-slide-y-transition>
                </v-card>
            </v-flex>
        </v-layout>

    </v-container>
</template>

<script>
    import VueMarkdown from 'vue-markdown'

    export default {
        data: () => ({
            show: false,
            loading: false,
            html: true,
            readme: '',
        }),
        props: ['repos'],
        components: {
            VueMarkdown
        },
        methods: {
            getReadme() {
                this.loading = true;
                fetch(this.repos)
                    .then(response => {
                        return response.text()
                    })
                    .then(data => {
                        this.readme = data;
                        this.loading = false;
                    })
                    .catch(e => console.error(e))
            },
            fixBrokenImages() {
                document.addEventListener("DOMContentLoaded", function (event) {
                    document.querySelectorAll('img').forEach(function (img) {
                        img.onerror = function () {
                this.style.display = 'none';
            };
        })
    });
            }
        },
        watch: {
            repos(val, oldval) {
                this.show = true;
                this.getReadme();
            },
            deep: true
        }
    }

</script>

<style>
img {
    position: relative;
}

img:after {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 120%;
    height: 120%;
    background-color: #fff;
    font-family: 'Helvetica';
    font-weight: 300;
    line-height: 2;
    text-align: center;
    content: attr(alt);
}
</style>
