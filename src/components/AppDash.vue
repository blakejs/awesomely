<template>
    <v-flex>
        <v-card v-if="this.$store.state.UserSaved.length === 0">
            <v-card-title primary-title>
                <div>
                    <h3 class="headline mb-0">Go star some stuff!!!</h3>
                    <div>description</div>
                </div>
            </v-card-title>
            <v-card-actions>
                <v-btn flat color="primary">text</v-btn>
                <v-btn flat color="primary">text</v-btn>
            </v-card-actions>
        </v-card>
        <div class="grid">
            <v-card v-for="items in getUserSaved" :key="items.name" width="100%">
                <v-card-title primary-title>
                    <div>
                        <h3 class="headline mb-0">{{ items.name }}</h3>
                    </div>
                </v-card-title>
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
        ...mapGetters(['getUserSaved']),
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
