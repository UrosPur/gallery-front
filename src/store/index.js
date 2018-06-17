import Vue from "vue";
import Vuex from "vuex";

import {galleryService} from "../services/GalleryService";
import {auth} from "../services/Auth";

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        galleries: [],
        isAuthenticated: auth.isAuthenticated(),
        authUserId: ""

    },
    getters: {
        getGalleries(state) {

            return state.galleries;
        },
        getIsAuthenticated(state) {

            return state.isAuthenticated;
        },
        getAuthUserId(state) {

            return state.authUserId;
        }

    },
    mutations: {
        setGalleries(state, galleries) {
            state.galleries = galleries;
        },
        setIsAuthenticated(state, auth) {
            state.isAuthenticated = auth;
        },
        setAuthUserId(state, authUserId) {
            state.authUserId = authUserId;
        }
    },
    actions: {
        fetchGalleries(store) {
            galleryService.getAll().then(response => {

                store.commit('setGalleries', response.data);
            });
        }
    }


});