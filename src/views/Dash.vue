<template>
    <v-container fluid class="px-3">
        <v-layout justify-center align-center row>
            <v-flex md4 xs12>
                <app-dash></app-dash>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import AppDash from '../components/AppDash';

export default {
    components: {
        'app-dash': AppDash,
    },
};
</script>

<style>
</style>
