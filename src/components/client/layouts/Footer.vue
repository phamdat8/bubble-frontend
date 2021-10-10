<template>
    <div id="footer">
        <nav class="navbar navbar-fixed-bottom bg-pink row p-5">
                <div class="col-4">
                    <h2 class="m-0"><b>Danh mục</b></h2>
                    <div class=" mt-0">
                        <router-link to=""><h5>Trang chủ</h5></router-link>
                        <h5>Đăng nhập</h5>
                        <h5>Đăng ký</h5>
                        <h5>Tài liệu</h5>
                        <h5>Bài viết</h5>
                    </div>
                </div>
                <div class="col-4">
                    <h2><b>Giới thiệu</b></h2>
                    <div class=" mt-0">
                        <router-link to=""><h5>Trang chủ</h5></router-link>
                        <h5>Đăng nhập</h5>
                        <h5>Đăng ký</h5>
                        <h5>Tài liệu</h5>
                        <h5>Bài viết</h5>
                    </div>
                </div>
                <div class="col-4">
                    <h2><b>Hỗ trợ và liên hệ</b></h2>
                    <div class=" mt-0">
                        <router-link to=""><h5>Trang chủ</h5></router-link>
                        <h5>Đăng nhập</h5>
                        <h5>Đăng ký</h5>
                        <h5>Tài liệu</h5>
                        <h5>Bài viết</h5>
                    </div>
                </div>
        </nav>
    </div>
</template>
<script>
    export default {
        name: 'Footer',
        
    }
</script>
<style>
h5{
    margin: 8px !important;
    color: black;
    font-weight: bold;
}
h5:hover{
    text-decoration: underline;
}


</style>