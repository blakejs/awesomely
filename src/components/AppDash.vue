<template>
    <div>
        <v-card v-if="this.$store.state.UserSaved.length === 0">
            Go star some stuff!!!
        </v-card>
        <v-card v-for="items in getUserSaved" :key="items.name">
            {{ items.name }}
        </v-card>
    </div>
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
</style>
