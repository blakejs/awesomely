<template>
    <v-flex>
        <div class="shruggin v-card" v-if="this.$store.state.SavedItems.length === 0">
            <img src="../assets/shruggin.svg" width="40%">
            <div class="title text-xs-center">Go star you some stuff partner!</div>
        </div>
        <div class="grid">
            <v-card v-for="items in savedItems" :key="items.name">
                <v-card-title primary-title>
                    <div style="align-self:start">
                        <h3 class="headline">{{ items.name }}</h3>
                        <h5 class="subheading">{{ items.cate }}</h5>
                    </div>
                </v-card-title>
                <v-card-actions>
                    <v-btn flat small :href="items.url" class="mx-0 px-0">GitHub
                        <v-icon style="padding-left:5px">fab fa-github-alt</v-icon>
                    </v-btn>
                    <v-btn flat small @click="model = items" to="/" class="mx-0 px-0">View
                        <v-icon style="padding-left:5px">fa fa-eye</v-icon>
                    </v-btn>
                    <v-spacer></v-spacer>
                    <v-btn flat icon @click="model = items">
                        <v-icon>delete</v-icon>
                    </v-btn>
                </v-card-actions>
            </v-card>
        </div>
    </v-flex>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    data: () => ({
        show: true,
        model: null,
    }),
    watch: {
        model() {
            this.$store.commit('SET_UNSAVE_ITEM', this.model);
        },
    },
    computed: {
        ...mapGetters(['savedItems']),
    },
};
</script>

<style scoped>
.v-card {
    display: grid;
    grid-template-rows: 1fr 50px;
}

.shruggin {
    display: grid;
    justify-items: center;
}

.grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
    grid-auto-rows: minmax(200px, auto);
    grid-gap: 1em;
}
</style>
