<template>
    <v-container fluid>
        <v-layout column wrap>
            <app-dash></app-dash>
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
