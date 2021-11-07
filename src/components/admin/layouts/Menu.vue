<template>
    <div id="menu">
        <ul class="menu">
            <li class="menu-item"><router-link to="/admin/dashboard"> Dashboard </router-link></li>
            <li class="menu-item"><router-link to="/admin/user"> Tài khoản </router-link></li>
            <li class="menu-item"><router-link to="/admin/topic"> Chủ đề </router-link></li>
            <li class="menu-item"><router-link to="/admin/lesson"> Bài học </router-link></li>
            <li class="menu-item"><router-link to="/admin/question"> Câu hỏi </router-link></li>
            <li class="menu-item"><router-link to="/admin/document"> Tài liệu </router-link></li>
            <li class="menu-item"><router-link to="/logout"> Đăng xuất </router-link></li>
        </ul>
    </div>
</template>
<script>
    export default {
        name: 'Menu'
    }
</script>
<style>
    .menu{
        background-color: #212529;
        margin : 20px;
        padding:  20px;
        border-radius: 20px;
    }
    .menu-item{
        font-size: 30px;
        margin-bottom: 20px;

        
    }
    ul{
        list-style-type: none;
    }

    .menu li a {
        position: relative;
        margin-right: 10px;
        padding: 5px;
        font-weight: bold;
        font-size: 30px;
        text-decoration: none;
        color: #fff;
    }

    .menu li a::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 5px;
    background-color: #fff;
    border-radius: 10px;
    transition: .3s;
    }

    .menu li a:hover::before {
    width: 100%;
    background-color: white;
    }
    
    
</style>