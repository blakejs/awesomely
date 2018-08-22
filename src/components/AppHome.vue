<template>
    <v-container fluid class="px-3">
        <v-layout justify-center align-center row>
            <v-flex md9>
                <v-card style="max-width: 100%;max-height: 100%;overflow: auto">
                    <v-card-title primary-title>
                        <div>
                            <div class="headline">Making your resources more convenient</div>
                            <span class="grey--text">Explore thousands of resources in a convenient manner.</span>
                        </div>
                    </v-card-title>

                    <v-card-actions>
                        <v-btn flat>Get Started</v-btn>
                        <v-btn flat>Share</v-btn>
                        <v-spacer></v-spacer>
                        <v-btn icon @click="show = !show">
                            <v-icon>{{ show ? 'keyboard_arrow_up' : 'keyboard_arrow_down' }}</v-icon>
                        </v-btn>
                    </v-card-actions>

                    <v-slide-y-transition>
                        <v-card-text v-show="show">
                            <v-progress-linear :indeterminate="true" color="primary" v-if="loading"></v-progress-linear>
                            <vue-markdown :html="true" :source="readme"></vue-markdown>
                        </v-card-text>
                    </v-slide-y-transition>
                </v-card>
            </v-flex>
        </v-layout>

    </v-container>
</template>

<script>
	import VueMarkdown from 'vue-markdown'
	import AwesomeData from '../../static/awesome.json'

	export default {
		data: () => ({
			AwesomeData,
			show: false,
			loading: false,
			html: true,
			readme: '',
		}),
		props: ['repos'],
		components: {
			VueMarkdown
		},
		methods: {
			getReadme() {
				this.readme = '';
				this.loading = true;
				fetch(this.repos)
					.then(response => {
						return response.text()
					})
					.then(data => {
						this.readme = data;
						this.loading = false
					}),
					error => {
						console.log(error)
					}
			}
		},
		watch: {
			repos(val, oldval) {
				this.show = true;
				this.getReadme();
			},
			deep: true
		}
	}
</script>

<style>
</style>