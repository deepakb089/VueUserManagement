<template>
    <div>

        <div class="row">


                <Sidebar />


            <div class="col-md-9">

                <form action="">
                    <div class="form-group">
                        <label for="email">Name:</label>
                        <input type="email" class="form-control" id="name" v-model="name">
                    </div>
                    <div class="form-group">
                        <label for="email">Email address:</label>
                        <input type="email" class="form-control" id="email" v-model="email">
                    </div>
                    <div class="form-group">
                        <label for="pwd">Password:</label>
                        <input type="password" class="form-control" id="pwd" v-model="pwd">
                    </div>

                    <input type="button" class="btn btn-primary"
                           v-on:click="submit()"
                           value="Submit">



                </form>
            </div>

        </div>










    </div>
</template>

<script>

    import Sidebar from '../Sidebar'

    //const axios = require('axios');
    import fetch from 'node-fetch';


    import {usersApi} from '../../config'

    export default {
        name: "Create",
        components: {
            Sidebar
        },
        data: function () {
            return {
                name: '',
                email: '',
                pwd: ''

            }
        },

        mounted: function() {
            console.log("OK")
        },

        methods:  {

            submit: function () {
                var data = {
                    name: this.name,
                    email: this.email,
                    password: this.pwd
                }


                fetch(usersApi('users/register'), { method: 'POST', body: JSON.stringify(data),
                    headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin':'*' },

                    mode: 'cors'
                })
                    .then(res => res.json())
                    .then(json => {

                        if(json.status == 'error') {
                            alert('An error')
                        } else {
                          //  alert('success')

                            this.$router.push('List')

                        }

                    });


                // console.log(data);
                //
                // var config = {
                //     headers: {'Access-Control-Allow-Origin': '*'},
                //     crossDomain: true
                // };
                //
                // axios.post(usersApi('users/register'), data, config)
                //     .then((res) => {
                //         console.log(res)
                //     })
            }
        }
    }
</script>

<style scoped>

</style>