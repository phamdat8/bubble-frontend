<template>
    <div id="header">
        <nav class="navbar navbar-dark bg-dark">
            <ul class="navbar-nav">
                <li class="nav-item active">
                    <h1><a class="nav-link" href="#">Bubble</a></h1>
                </li>
            </ul>

            <div class="dropdown">
                <img class="dropdown-toggle img-nav" v-bind:src="avatar" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><router-link class="dropdown-item" to="/">Trang chính</router-link></li>
                    <li><router-link class="dropdown-item" to="/admin/dashboard">Dashboard</router-link></li>
                    <li><router-link class="dropdown-item" to="/logout">Đăng xuất</router-link></li>
                </ul>
            </div>
        </nav>
    </div>
</template>
<script>
    export default {
        name: 'Header',
        data (){
            return{
                avatar: null,
            }
        },
        mounted() {
            this.avatar = this.$file + '/users/' + localStorage.user_id + '.png';
        },
    }
</script>
<style>
    .img-nav{
        height: 50px;
        width: 50px;
        margin-right: 30px;
        border-radius: 50%;
    }
    .dropdown{
        padding-left: 100px;
    }
</style>