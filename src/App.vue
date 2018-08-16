<template>
  <div id="app">



    <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active" v-if="!isLoggedIn">
            <router-link :to="{ name: 'Home' }" class="nav-link" >Home</router-link>
          </li>
          <li class="nav-item" v-if="!isLoggedIn">
            <router-link :to="{ name: 'Login' }" class="nav-link" >Login</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/register" class="nav-link">Register</router-link>
          </li>

          <li class="nav-item" v-if="isLoggedIn">
            <a href="javascript:void(0)" class="nav-link" @click="logout()">Logout</a>
          </li>


          <li class="nav-item dropdown" v-if="isLoggedIn">
            <a class="nav-link dropdown-toggle" href="https://example.com" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Users management</a>
            <div class="dropdown-menu" aria-labelledby="dropdown01">
              <router-link to="/users/list" class="dropdown-item">List</router-link>

            </div>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>

    <main role="main" class="">

      <router-view></router-view>

    </main><!-- /.container -->










  </div>
</template>

<script>
    export default {
        name: 'app',
        data: function () {
            return {
                loggedIn: false
            }
        },
        computed: {
            isLoggedIn: function () {
                return this.$store.state.loggedIn
            }
        },

        methods: {
            logout: function () {
                this.$store.commit('logout')
                this.$router.push('/')
            }
        }
    }
</script>

<style>
  body {
    padding-top: 5rem;
  }
  .starter-template {
    padding: 3rem 1.5rem;
    text-align: center;
  }
</style>