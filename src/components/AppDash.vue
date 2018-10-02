<template>
    <v-flex>
        <div v-if="this.$store.state.SavedItems.length === 0" style="display:grid;justify-items:center">
            <img src="../assets/shruggin.svg" width="40%">
            <div class="title text-xs-center">Go star you some stuff partner!</div>
        </div>
        <div class="grid">
            <v-card v-for="items in getSavedItems" :key="items.name" style="display:grid;grid-template-rows: 1fr 50px;">
                <v-card-title primary-title>
                    <div style="align-self:start">
                        <h3 class="headline">{{ items.name }}</h3>
                        <h5 class="subheading">{{ items.cate }}</h5>
                    </div>
                </v-card-title>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn flat icon>
                        <v-icon>delete
                        </v-icon>
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
    }),
    computed: {
        ...mapGetters(['getSavedItems']),
    },
};
</script>

<style>
.grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
    grid-auto-rows: minmax(200px, auto);
    grid-gap: 1em;
}
</style>
