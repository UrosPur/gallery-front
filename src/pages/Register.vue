<template>

    <div class="col-6 form-login">

        <div class="text-center mb-5">
            <h2>Register</h2>
            <p class="welcome">If you already have an account please
                <router-link :to="{ name: 'login'}">Login</router-link>
            </p>
        </div>

        <div v-if="message">{{ message }}</div>


        <form @submit.prevent="register()">
            <div class="form-group row">
                <label for="first_name" class="col-4 col-form-label">First Name</label>
                <div class="col-8">
                    <input v-model="first_name" id="first_name" name="first_name" placeholder="first name" type="text"
                           class="form-control here">
                </div>
            </div>
            <div class="alert-danger" v-if="firstNameMessage">{{ firstNameMessage[0] }}</div>
            <div class="form-group row">
                <label for="last_name" class="col-4 col-form-label">First Name</label>
                <div class="col-8">
                    <input v-model="last_name" id="last_name" name="last_name" placeholder="last name" type="text"
                           class="form-control here">
                </div>
            </div>
            <div class="alert-danger" v-if="lastNameMessage">{{ lastNameMessage[0] }}</div>
            <div class="form-group row">
                <label for="email" class="col-4 col-form-label">Email</label>
                <div class="col-8">
                    <input v-model="email" id="email" name="email" placeholder="add email" type="text"
                           class="form-control here">
                </div>
            </div>
            <div class="alert-danger" v-if="emailMessage">{{ emailMessage[0] }}</div>
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
            <div class="alert-danger" v-if="passwordMessage">{{ passwordMessage[0] }}</div>

            <div class="form-group">
                <div class="offset-4 col-8">
                    <label for="checkbox" class="ol-form-label">I accept terms and conditions</label>
                    <input v-model="terms" class="checkbox" id="checkbox" type="checkbox" name="checkbox" value="1">
                </div>
            </div>
            <div class="alert-danger" v-if="termMessage"> Terms must me accepted</div>

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
    import {mapMutations} from 'vuex'

    export default {
        name: "Register",

        data() {

            return {
                first_name: '',
                last_name: '',
                email: '',
                password: '',
                password_confirmation: '',
                terms: '',
                errors: '',
                message: '',
                firstNameMessage: '',
                lastNameMessage: '',
                emailMessage: '',
                passwordMessage: '',
                termMessage: ''
            }
        },
        methods: {

            ...mapMutations([
                'setIsAuthenticated',
            ]),

            register() {

                auth.register(
                    this.first_name,
                    this.last_name,
                    this.email,
                    this.password,
                    this.password_confirmation,
                    this.terms
                )
                    .then((response) => {
                        console.log(response)
                        auth.login(this.email, this.password)
                            .then((resposne) => {

                                this.$router.push({name: 'galleries'})
                                this.setIsAuthenticated(true);

                            })

                    })
                    .catch(errors => {
                        this.errors = errors.response.data.errors;
                        this.firstNameMessage = errors.response.data.errors.first_name;
                        this.lastNameMessage = errors.response.data.errors.last_name;
                        this.emailMessage = errors.response.data.errors.email;
                        this.passwordMessage = errors.response.data.errors.password;
                        this.termMessage = errors.response.data.errors.terms;
                        this.message = errors.response.data.message;
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