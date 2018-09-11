import Vue from 'vue';
import Vuex from 'vuex';
import AwesomeData from '../../static/awesome.json';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        AwesomeData,
        GithubRepoLink: '',
        GithubRepoName: '',
        GithubRepoURL: '',
    },
    getters: {},
    mutations: {
        SET_REPONAME: (state, payload) => {
            state.GithubRepoName = payload
        },
        SET_REPOURL: (state, payload) => {
            state.GithubRepoURL = payload
        },
        SET_REPOLINK: (state, payload) => {
            state.GithubRepoLink = payload
        }
    },
    actions: {},
});
