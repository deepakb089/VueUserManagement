<template>
    <div class="row">

        <Sidebar/>

        <div class="col-md-10">

            <table class="table">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>

                <tr v-for="user in users">
                    <td>{{user.name}}</td>
                    <td>{{user.email}}</td>
                    <td>

                        <input type="button"
                               class="btn"
                               value="Edit" v-on:click="update(user.id)">
                        <input type="button"
                               class="btn btn-danger"
                               value="Delete" v-on:click="remove(user.id)" />


                    </td>
                </tr>


                </tbody>
            </table>

        </div>

    </div>
</template>

<script>

    import Sidebar from '../Sidebar'
    import fetch from 'node-fetch';
import {usersApi} from "../../config";

    export default {
        name: "List",
        components: {
            Sidebar
        },
        data: function() {
            return {
                users: []
            }
        },
        methods: {
            refreshList: function () {
                fetch(usersApi('users'))
                    .then(res => res.json())
                    .then(res => {
                        //console.log(res)
                        this.users = res.list
                    })
            },
            remove: function (id) {
                fetch(usersApi('users/remove/' + id), {
                    //method: 'DELETE'
                }).then(() => {
                    this.refreshList();
                })
            },
            update: function (id) {
                this.$router.push('/users/edit/'+id)
            }
        },
        mounted: function () {
            this.refreshList();
        }
    }
</script>

<style scoped>

</style>