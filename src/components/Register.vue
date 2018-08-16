<template>
    <div class="container">
        <div class="row">
            <div class="col-md-6 offset-md-3">
                <div class="panel panel-default">
                    <h1 class="text-center">Register</h1>

                    <div class="panel-body">
                        <form class="form-horizontal" method="POST" action="">
                            <div class="form-group">
                                <label for="name" class="col-md-4 control-label">Name</label>

                                <div class="col-md-6">
                                    <input id="name" type="text" class="form-control"
                                           v-model="name"
                                           name="name" value="" required autofocus>


                                </div>
                            </div>

                            <div class="form-group">
                                <label for="email" class="col-md-4 control-label">E-Mail Address</label>

                                <div class="col-md-6">
                                    <input id="email"
                                           v-model="email"
                                           type="email" class="form-control" name="email" value="" required>


                                </div>
                            </div>

                            <div class="form-group">
                                <label for="password"
                                       v-model="password"
                                       class="col-md-4 control-label">Password</label>

                                <div class="col-md-6">
                                    <input id="password"
                                           v-model="password"
                                           type="password" class="form-control" name="password" required>


                                </div>
                            </div>

                            <div class="form-group">
                                <label for="password-confirm" class="col-md-4 control-label">Confirm Password</label>

                                <div class="col-md-6">
                                    <input id="password-confirm" type="password"
                                           v-model="password_confirmation"
                                           class="form-control" name="password_confirmation" required>
                                </div>
                            </div>

                            <div class="form-group">
                                <div class="col-md-6 col-md-offset-4">


                                    <input type="button" class="btn btn-primary" v-on:click="submit" value="Submit">

                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>

    import {
        usersApi
    } from "../config";

    import axios from 'axios'

    export default {
        name: "Register",
        data: {
            name: '123',
            email: '',
            password: '',
            password_confirmation: ''
        },
        methods: {
            submit: function () {
                axios.post(usersApi('users/register'), {
                    name: this.name,
                    email: this.email,
                    password: this.password,
                })
                    .then((res) => {
                        alert(res)
                    })
            },

            success: function () {

            },

            error: function () {

            }
        }
    }
</script>

<style scoped>

</style>