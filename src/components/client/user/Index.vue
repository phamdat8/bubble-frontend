<template>
    <div id="user" class="bg-white">
        <div class="container bg-white">
            <div class="row text-center text-nav">
                <div class="col-3 nav-text"><router-link to="/user">TRANG CHÍNH</router-link></div>
                <div class="col-3 nav-text"><router-link to="/user/info">CÁ NHÂN</router-link></div>
                <div class="col-3 nav-text"><router-link to="/user/topic">BÀI HỌC</router-link></div>
                <div class="col-3 nav-text"><router-link to="/user/topic">HỎI-ĐÁP</router-link></div>
            </div>
            <router-view></router-view>
        </div>

    </div>
</template>
<script>
  export default {
        name: 'User'
    }
</script>
<style>
    .nav-text{
        font-size: 25px;
        font-weight: bold;
    }
</style>