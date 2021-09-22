<template>
    <div id="user" class="bg-dark">
        <div class="container bg-white">
            <div class="row text-center text-nav">
                <div class="col-3"><router-link to="/user">TRANG CHÍNH</router-link></div>
                <div class="col-3"><router-link to="/user/info">CÁ NHÂN</router-link></div>
                <div class="col-3"><router-link to="/">BÀI HỌC</router-link></div>
                <div class="col-3"><router-link to="/">HỎI-ĐÁP</router-link></div>
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
</style>