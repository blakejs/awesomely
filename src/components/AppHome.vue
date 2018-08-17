<template>
	<v-container fluid class="px-3">
		<v-layout justify-center align-center row>
			<v-flex md9>
				<v-card>
					<v-card-media src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="100px" />
					<v-card-title primary-title>
						<div>
							<div class="headline">Making your resources more convenient</div>
							<span class="grey--text">Explore thousands of resources in a convenient manner.</span>
						</div>
					</v-card-title>

					<v-card-actions>
						<v-btn flat @click="getReadme">Share</v-btn>
						<v-btn flat>Explore</v-btn>
						<v-spacer></v-spacer>
						<v-btn icon @click="show = !show">
							<v-icon>{{ show ? 'keyboard_arrow_up' : 'keyboard_arrow_down' }}</v-icon>
						</v-btn>
					</v-card-actions>

					<v-slide-y-transition>
						<v-card-text v-show="show">
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
			html: true,
			readme: '',
		}),
		props: ['repo'],
		components: {
			VueMarkdown
		},
		methods: {
			getReadme() {
				fetch(repo)
					.then(response => {
						return response.text()
					})
					.then(data => {
						this.readme = data
					}),
					error => {
						console.log(error)
					}
			}
		}
	}
</script>

<style>
</style>