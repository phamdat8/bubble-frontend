<template>
    <div id="user-info" class="m-4">
        <div class="row">
            <div class="col-3 text-center">
                <div class="img-info">
                    <img v-bind:src="avatar" height="100%">
                </div>
            </div>
            <div class="col-9 p-3">
                <h4>{{ username }}</h4>
                <p><b>{{ name }}</b></p>
            </div>
        </div>   
    </div>
</template>
<script>
    export default {
        name: 'UserInfo',
        data(){
            return{
                username: localStorage.username,
                name: localStorage.name,
                avatar: null
            }
        },
        mounted() {
            if (localStorage.getItem('reloaded')) {
                localStorage.removeItem('reloaded');
            } else {
                localStorage.setItem('reloaded', '1');
                location.reload();
            }
            this.avatar = this.$file + '/users/' + localStorage.user_id + '.png';
        },
    }
</script>
<style>
    .img-info img{
        width:200px;
        height:200px;
        border-radius: 50%;
        border:2px solid black;
    }
</style>