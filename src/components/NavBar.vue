<template>
    <nav class="navbar navbar-dark bg-primary  navbar-expand-lg">
        <a class="navbar-brand" href="/">Home</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
                  <router-link class="nav-item nav-link" :to="{ name: 'login'}">Login</router-link>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        name: "NavBar"
    }
</script>

<style scoped>

</style>