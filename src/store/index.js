import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import Cookies from 'js-cookie';
import AwesomeData from '../../static/awesome.json';

Vue.use(Vuex);

export const store = new Vuex.Store({
    plugins: [
        createPersistedState({
            storage: {
                getItem: key => Cookies.get(key),
                setItem: (key, value) =>
                    Cookies.set(key, value, {
                        expires: 3,
                        secure: true,
                    }),
                removeItem: key => Cookies.remove(key),
            },
        }),
    ],
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
        SET_SAVED: (state, payload) => {
            if (!state.SavedItems.find(item => item.repo === payload.repo)) {
                state.SavedItems.push(payload);
            }
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
