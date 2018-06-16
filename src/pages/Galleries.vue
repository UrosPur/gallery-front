<template>
    <div class="container">
            <h1>Galleries:</h1>
        <div class="row">
            <div class=" card mr-4 mt-4" v-for="(gallery, key) in allGalleries" :key="key">
                <img class="card-img-top contain" :src="gallery.images[0].url" alt="Card image cap">
                <div class="card-body">
                    <router-link :to="{ name: 'single-gallery', params:{id: gallery.id}}"><h5 class="card-title">
                        {{gallery.name}}</h5></router-link>
                    <p class="card-text"><i>created by:</i> {{gallery.user.firstName}} {{gallery.user.lastName}}</p>
                    <p class="card-text"><i>created at:</i> {{gallery.created_at}}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

    import {mapGetters, mapActions} from "vuex";


    export default {
        name: "Galleries",
        methods: {
            ...mapActions(['fetchGalleries']),


        },
        created() {
            this.fetchGalleries();
        },
        data() {

            return {}

        },
        computed: {
            ...mapGetters({
                galleries: 'getGalleries',
                // currentTerm: "getSearchTerms",
                // currentUser: "getAuthUserId"
            }),
            allGalleries() {
                return this.galleries
            },

        }
    }
</script>

<style scoped>
    .card-img-top {
        width: 250px;
        height: 250px;
    }
</style>