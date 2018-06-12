<template>
    <div class="col-6 form-login">

        <h2 class="welcome">Welcome to login page</h2>

        <form @submit.prevent="login()">
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
                <div class="offset-4 col-8">
                    <button name="submit" type="submit" class="btn btn-primary">Submit</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: "Login",

        data() {

            return {
                email: '',
                password: ''
            }
        },
    }
</script>

<style scoped>

    .form-login {
        margin-top: 30px;
    }


    .welcome {
        text-align: right;
    }

</style>