import Vue from 'vue';
import Vuex from 'vuex';
import AwesomeData from '../../static/awesome.json';
import VuexPersist from 'vuex-persist';

Vue.use(Vuex);

const vuexLocalStorage = new VuexPersist({
    key: 'vuex',
    storage: window.localStorage,
})

export const store = new Vuex.Store({
    plugins: [vuexLocalStorage.plugin],
    state: {
        AwesomeData,
        ItemModel: {},
        DownloadUrl: '',
        Readme: '',
        SavedItems: [],
        Loading: null,
    },
    getters: {
        itemModel: state => {
            return state.ItemModel
        },
        savedItems: state => {
            return state.SavedItems;
        }
    },
    mutations: {
        SET_ITEM_MODEL: (state, payload) => {
            state.ItemModel = payload;
        },
        SET_DOWNLOAD_URL: (state, payload) => {
            state.DownloadUrl = payload;
        },
        SET_SAVE_ITEM: (state, payload) => {
            if (!state.SavedItems.find(item => item.repo === payload.repo)) {
                state.SavedItems.push(payload);
            }
        },
        SET_UNSAVE_ITEM: (state, payload) => {
            state.SavedItems = state.SavedItems.filter(items => items !== payload)
        },
        SET_README: (state, payload) => {
            state.Readme = payload;
        },
    },
    actions: {
        fetchDownloadUrl: ({
            commit
        }, payload) => {
            return new Promise(resolve => {
                fetch('https://api.github.com/repos/' + payload + '/readme')
                    .then(response => {
                        return response.json();
                    })
                    .then(data => {
                        commit('SET_DOWNLOAD_URL', data.download_url);
                        resolve();
                    })
                    .catch(error => {
                        return error.statusText;
                    });
            });
        },
        fetchReadme: ({
            commit
        }, payload) => {
            return new Promise(resolve => {
                fetch(payload)
                    .then(response => {
                        return response.text();
                    })
                    .then(data => {
                        commit('SET_README', data);
                        resolve()
                    })
                    .catch(error => {
                        return error.statusText
                    })
            });
        }
    },
});
