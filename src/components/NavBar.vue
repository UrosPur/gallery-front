<template>
    <nav class="navbar navbar-dark bg-primary  navbar-expand-lg">
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
                <router-link class="nav-item nav-link"  :to="{ name: 'galleries'}">All Galleries</router-link>
                <router-link class="nav-item nav-link"  v-if="isLoged" :to="{ name: 'my-gallery'}"  >My galleries</router-link>
                <router-link class="nav-item nav-link"  v-if="isLoged" :to="{ name: 'create-gallery'}"  >Create new Gallery</router-link>
            </div>
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
                'setIsAuthenticated'
            ]),

            logout(){
                auth.logout();
                this.setIsAuthenticated(false);
                this.$router.push({name: 'home'})

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