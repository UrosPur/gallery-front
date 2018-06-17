<template>
    <div class="container">
        <div class="card text-center w-100">
            <div class="card-header">
                <div class="alert-danger" v-if="error">You can not delete this gallery</div>
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
                    <b-carousel-slide class="slider-item" v-for="(image, key) in gallery.images" :key="key"
                                      :img-src="image.url"/>
                </b-carousel>
                <!-- carousel end -->
            </div>

            <a class="btn-danger"
               v-confirm="{ok: deleteGallery, cancel: doNothing, message: 'You will delete this gallery. Are you sure?'}">
                delete
            </a>


            <!--<button v-if="$route.params.id = gallery.user.id">edit</button>-->
        </div>

        <b-list-group v-for="(comment, key) in comments" :key="key">
            <b-list-group-item>Comment Text: {{ comment.text }}
                Created at: {{ comment.created_at }}
            </b-list-group-item>
        </b-list-group>

    </div>
</template>

<script>
    import {galleryService} from "../services/GalleryService";

    export default {
        name: "SingleGallery",

        data() {
            return {
                gallery: [],
                comments: [],
                error: ""
            }
        },

        beforeRouteEnter(to, from, next) {
            next((vm) => {
                galleryService.getSingleGallery(vm.$route.params.id)
                    .then((response) => {
                        vm.gallery = response.data
                        vm.comments = response.data.comments
                    })
            })
        },
        methods: {


            deleteGallery() {
                galleryService.deleteGallery(this.gallery.id)
                    .then((response) => {

                        this.$router.push({name: 'my-gallery'})
                    }).catch((error) => {

                    this.error = error.response.data.message

                })

            },

            doNothing() {

            },

        }

    }

</script>

<style scoped>
    .slider-item {
        height: 500px;
    }

</style>