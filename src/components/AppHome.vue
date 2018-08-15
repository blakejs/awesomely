<template>
  <v-container fluid class="px-3">
    <v-layout justify-center align-center row>
      <v-flex md9>
        <v-card>
          <v-card-media src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px">
          </v-card-media>

          <v-card-title primary-title>
            <div>
              <div class="headline">Making your resources more convenient</div>
              <span class="grey--text">Explore thousands of resources in a convenient manner.</span>
            </div>
          </v-card-title>

          <v-card-actions>
            <v-btn flat>Share</v-btn>
            <v-btn flat color="purple">Explore</v-btn>
            <v-spacer></v-spacer>
            <v-btn icon @click="show = !show">
              <v-icon>{{ show ? 'keyboard_arrow_up' : 'keyboard_arrow_down' }}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-slide-y-transition>
            <v-card-text v-show="show">
              I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
            </v-card-text>
          </v-slide-y-transition>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      show: false
    })
  }
</script>

<style>
</style>
