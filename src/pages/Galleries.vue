<template>
    <div class="container">
        <h1>Galleries:</h1>
        <!--<div class="card mr-4 mt-4" v-for="gallery in allGalleries" :key="gallery.id">-->
            <!--{{ gallery.name }}-->
            <!--<img class="card-img-top contain" :src="gallery.images[0].imageUrl" alt="Card image cap">-->
            <!--<div class="card-body">-->
                <!--<router-link :to="{ name: 'show-galery', params:{id: gallery.id}}"><h5> class="card-title">{{gallery.name}}</h5></router-link>-->
                <!--<p class="card-text"><i>created by:</i> {{gallery.user.firstName}} {{gallery.user.lastName}}</p>-->
                <!--<p class="card-text"><i>created at:</i> {{gallery.created_at | formatDate}}</p>-->
            <!--</div>-->
        <!--</div>-->
    </div>
</template>
<script>

    import { mapGetters,mapActions } from "vuex";


    export default {
        name: "Galleries",
        methods:{
        ...mapActions(['fetchGalleries'])


        },
        created(){
            this.fetchGalleries();
        },
        data(){

            return{

            }

        },
        computed: {
            ...mapGetters({
                galleries: 'getGalleries',
                // currentTerm: "getSearchTerm",
                // currentUser: "getAuthUserId"
            }),
        }
    }
</script>

<style scoped>

</style>