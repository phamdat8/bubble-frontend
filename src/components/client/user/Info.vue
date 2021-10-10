<template>
    <div id="user-info" class="m-4">
        <div class="row">
            <div class="col-3 text-center">
                <div class="img-info">
                    <img src="https://instagram.fsgn5-1.fna.fbcdn.net/v/t51.2885-19/s150x150/27576320_152591802212955_3203360697266208768_n.jpg?_nc_ht=instagram.fsgn5-1.fna.fbcdn.net&_nc_ohc=L6tFjMrPeOgAX-IRiBA&tn=xTc9ZdysLBeM3JTg&edm=ABfd0MgBAAAA&ccb=7-4&oh=1ea6a04b9c2e27300f2a22e6ed442be0&oe=6145E7E8&_nc_sid=7bff83" height="100%">
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
            }
        },
        mounted() {
            if (localStorage.getItem('reloaded')) {
                localStorage.removeItem('reloaded');
            } else {
                localStorage.setItem('reloaded', '1');
                location.reload();
            }
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