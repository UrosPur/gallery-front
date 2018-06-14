<template>

    <div class="col-6 form-login">

        <div class="text-center mb-5">
            <h2>Register</h2>
            <!--<p class="welcome">If you already have an account please-->
            <!--<router-link :to="{ name: 'login'}">Login</router-link>-->
            <!--</p>-->
        </div>

        <div v-if="errors">{{ errors }}</div>


        <form @submit.prevent="register()">
            <div class="form-group row">
                <label for="first_name" class="col-4 col-form-label">First Name</label>
                <div class="col-8">
                    <input v-model="first_name" id="first_name" name="first_name" placeholder="first name" type="text"
                           class="form-control here">
                </div>
            </div>
            <div class="form-group row">
                <label for="last_name" class="col-4 col-form-label">First Name</label>
                <div class="col-8">
                    <input v-model="last_name" id="last_name" name="last_name" placeholder="last name" type="text"
                           class="form-control here">
                </div>
            </div>
            <div class="form-group row">
                <label for="email" class="col-4 col-form-label">Email</label>
                <div class="col-8">
                    <input v-model="email" id="email" name="email" placeholder="add email" type="text"
                           class="form-control here">
                </div>
            </div>
            <div class="form-group row">
                <label for="password" class="col-4 col-form-label">Password</label>
                <div class="col-8">
                    <input v-model="password" id="password" name="password" placeholder="add password" type="password"
                           class="form-control here">
                </div>
            </div>

            <div class="form-group row">
                <label for="password_confirmation" class="col-4 col-form-label">Confirm password</label>
                <div class="col-8">
                    <input v-model="password_confirmation" id="password_confirmation" name="password_confirmation"
                           placeholder="confirm password" type="password"
                           class="form-control here">
                </div>
            </div>

            <div class="form-group">
                <div class="offset-4 col-8">
                    <label for="checkbox" class="ol-form-label">Accepted terms and conditions</label>
                    <input v-model="terms" class="checkbox" id="checkbox" type="checkbox" name="checkbox" value="1">
                </div>
            </div>

            <div class="form-group row">
                <div class="offset-4 col-8">
                    <button name="submit" type="submit" class="btn btn-primary">Submit</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>

    import {auth} from "../services/Auth";

    export default {
        name: "Register",

        data() {

            return {
                first_name: '',
                last_name: '',
                email: '',
                password: '',
                password_confirmation: '',
                terms:'',
                errors: ''
            }
        },
        methods: {

            register() {

                auth.register(
                    this.first_name,
                    this.last_name,
                    this.email,
                    this.password,
                    this.password_confirmation,
                    this.terms
                )
                    .then(() => {
                        // console.log(200)
                        this.$router.push({name: 'galleries'})
                    })
                    .catch(error => {
                        // console.log(250)
                        this.errors = error.response.data;
                    });

            }

        }
    }
</script>

<style scoped>

    .form-login {
        margin-top: 30px;
    }

    .welcome {
        text-align: right;
        display: inline;
    }

    .checkbox {
        float: left;
        position: relative;
        top: 5px;
        margin-right: 5px;
    }

</style>