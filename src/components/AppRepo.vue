<template>
    <v-card v-if="DownloadUrl">
        <v-card-title primary-title>
            <div>
                <h3 class="headline mb-0">{{ this.ItemModel.name }}</h3>
            </div>
            <v-spacer></v-spacer>
            <v-btn flat @click="SaveItems">
                Save
                <v-icon>bookmark_border</v-icon>
            </v-btn>
        </v-card-title>

        <v-card-actions>
            <v-btn flat small :href="ItemModel.url" class="mx-0 px-0">GitHub
                <v-icon style="padding-left:5px">fab fa-github-alt</v-icon>
            </v-btn>
            <v-btn flat small>Share
                <v-icon style="padding-left:5px">fa fa-share</v-icon>
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn flat icon small @click="show = !show">
                <v-icon>{{ show ? 'keyboard_arrow_up' : 'keyboard_arrow_down' }}</v-icon>
            </v-btn>
        </v-card-actions>
        <v-divider></v-divider>
        <v-slide-y-transition>
            <v-card-text v-show="show">
                <v-progress-linear :indeterminate="true" color="primary" v-if="loading"></v-progress-linear>
                <vue-markdown :html="true" :source="Readme" :toc="true" v-else></vue-markdown>
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
    }),
    components: {
        VueMarkdown,
    },
    methods: {
        SaveItems() {
            this.$store.dispatch('SET_SAVED', this.$store.state.ItemModel);
        },
    },
    watch: {
        ItemModel() {
            this.show = true;
            this.loading = true;
            this.$store.dispatch('fetchDownloadUrl', this.ItemModel.repo);
        },
        DownloadUrl() {
            this.$store
                .dispatch('fetchReadme', this.DownloadUrl)
                .then((this.loading = false));
        },
        deep: true,
    },
    computed: {
        ...mapState(['ItemModel', 'DownloadUrl', 'Readme']),
    },
};
</script>

<style>
.v-card {
    max-width: 100%;
    max-height: 100%;
    overflow: auto;
}

img {
    position: relative;
    max-width: 300px;
    max-height: 300px;
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
