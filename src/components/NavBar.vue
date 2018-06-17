<template>
    <nav class="navbar navbar-dark bg-primary  navbar-expand-lg">
                <router-link class="navbar-brand"  :to="{ name: 'galleries'}">Home</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
                <router-link class="nav-item nav-link" v-if="!isLoged"  :to="{ name: 'login'}">Login</router-link>
                <!--<router-link @click="logout()" class="nav-item nav-link" v-if="isLoged" :to="{ name: 'login'}">Logout</router-link>-->
                <a class="nav-item nav-link" v-if="isLoged" href="" @click="logout">logout</a>
                <router-link class="nav-item nav-link" v-if="!isLoged"  :to="{ name: 'register'}">Register</router-link>
                <router-link class="nav-item nav-link"  :to="{ name: 'galleries'}">Galleries</router-link>
                <router-link class="nav-item nav-link"  >My galleries</router-link>
                <!--<router-link class="nav-item nav-link"  :to="{ name: 'create-gallery'}">Add new gallery</router-link>-->
            </div>
            <!--<form class="form-inline my-2 my-lg-0">-->
                <!--<b-input class="form-control mr-sm-2" placeholder="Search galleries" aria-label="Search" @input="setSearchTermChange" />-->
            <!--</form>-->
        </div>
    </nav>
</template>

<script>

    import { mapMutations, mapGetters } from "vuex";
    import {auth} from "../services/Auth";

    export default {
        name: "NavBar",
        methods: {
            ...mapMutations([
                'setSearchTerm',
                'setIsAuthenticated'
            ]),
            setSearchTermChange(term){

                this.setSearchTermChange(term)
            },

            logout(){
                auth.logout();
                this.setIsAuthenticated(false);
            }
        },
        computed: {
            ...mapGetters({
                isLoged: "getIsAuthenticated"
            })
        }

    }
</script>

<style scoped>

</style>