<template>
    <v-card>
        <v-card-title primary-title>
            <div>
                <div class="headline">REPO TITLE</div>
                <span class="grey--text">REPO DESC</span>
            </div>
            <v-spacer></v-spacer>
            <v-btn round small icon color="grey">
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
                <vue-markdown :html="true" :source="readme" :toc="true" v-else></vue-markdown>
            </v-card-text>
        </v-slide-y-transition>
    </v-card>
</template>

<script>
import VueMarkdown from 'vue-markdown';
import { mapState } from 'vuex';

export default {
    data: () => ({
        show: false,
        loading: false,
        readme: '',
        repoLink: '',
    }),
    components: {
        VueMarkdown,
    },
    methods: {
        getReadme() {
            this.loading = true;
            fetch(this.$store.state.GithubRepoLink)
                .then(response => {
                    return response.text();
                })
                .then(data => {
                    this.readme = data;
                    this.loading = false;
                })
                .catch(e => console.error(e));
        },
    },
    watch: {
        GithubRepoLink(val, oldval) {
            this.show = true;
            this.getReadme();
        },
        deep: true,
    },
    computed: {
        ...mapState(['GithubRepoLink']),
    },
};
</script>

<style scoped>
v-card {
    max-width: 100%;
    max-height: 100%;
    overflow: auto;
}

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
