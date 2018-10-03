<template>
    <v-container fluid class="px-3">
        <v-layout justify-center align-center row>
            <v-flex md11>
                <app-starter></app-starter>
                <app-repo></app-repo>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import appStarter from '../components/AppStarter';
import appRepo from '../components/AppRepo';

export default {
    components: {
        appStarter,
        appRepo,
    },
};
</script>
