<template>
    <v-container fluid>
        <v-layout column wrap>
            <app-dash></app-dash>
        </v-layout>
    </v-container>
</template>

<script>
import appDash from '../components/AppDash';

export default {
    components: {
        appDash,
    },
};
</script>

<style>
</style>
