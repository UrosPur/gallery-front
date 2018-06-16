<template>
    <div class="container">
        <div class="card text-center w-100">
            <div class="card-header">
                <i>created by:</i> {{gallery.user.first_name}} {{gallery.user.first_name}}
            </div>
            <div class="card-body">
                <h5 class="card-title">{{gallery.name}}</h5>
                <p class="card-text">{{gallery.description}}</p>
                <!-- carousel start -->
                <b-carousel id="carousel1"
                            controls
                            indicators
                            :interval="4000"
                >
                    <b-carousel-slide v-for="(image, key) in gallery.images" :key="key" :img-src="image.url" style="width:100%; max-height:480px"/>
                </b-carousel>
                <!-- carousel end -->
            </div>
                <!--<div class="card-footer text-muted">-->
                    <!--<i>created at: </i>{{gallery.created_at | formatDate}}-->
                    <!--<button v-if="isOwner()" class="btn btn-sm btn-outline-dark float-right">Delete this gallery</button>-->
                <!--</div>-->
        </div>
    </div>
</template>

<script>
    import {galleryService} from "../services/GalleryService";

    export default {
        name: "SingleGallery",

        data() {
            return {
                gallery: []
            }
        },

        beforeRouteEnter (to, from, next) {
                    next((vm) => {
            galleryService.getSingleGallery(vm.$route.params.id)
                .then((response) => {
                        console.log(response.data.images[0])
                        vm.gallery = response.data
                    })
                })
        },


        }

</script>

<style scoped>

</style>