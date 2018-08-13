<template>
  <v-container fluid class="px-0">
    <v-layout row align-center justify-center>
      <v-flex lg8>
        <v-slide-y-transition mode="out-in">
          <blockquote style="text-decoration: underline">
            First, solve the problem. Then, write the code.
          </blockquote>
        </v-slide-y-transition>
        <v-list>
          <v-subheader>CHOOSE YOUR AWESOMES</v-subheader>
          <v-list-group v-for="subject in Object.keys(AwesomeData)" :key="subject">
            <v-list-tile slot="activator">
              <v-icon v-text="icon" class="hidden-xs-only pr-3"></v-icon>
              <v-list-tile-content>
                <v-list-tile-title>{{ subject }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list v-for="(subitems) in AwesomeData[subject]" :key="subitems.name" dense>
              <v-list-tile :href="subitems.url">
                <v-icon v-text="subicon"></v-icon>
                <v-list-tile-action>{{ subitems.name }}</v-list-tile-action>
              </v-list-tile>
            </v-list>
          </v-list-group>
        </v-list>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import AwesomeData from '../../static/awesome.json'

export default {
  data() {
    return {
      AwesomeData,
      icon: 'home',
      subicon: 'subdirectory_arrow_right'
    }
  },
  methods: {
    select: function() {
      window.open = this.subitems.url;
    }
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
body {
    overflow-x: hidden !important;
}
</style>
