<template>
    <div class="container">
        <div class="card text-center w-100">
            <div class="card-header">
                <i>created by:</i> {{gallery.user.first_name}} {{gallery.user.last_name}}
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
                    <b-carousel-slide class="slider-item" v-for="(image, key) in gallery.images" :key="key" :img-src="image.url" />
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
                        // console.log(response.data.user.first_name)
                        vm.gallery = response.data
                    })
                })
        },


        }

</script>

<style scoped>
    .slider-item{
        height: 500px;
    }

</style>