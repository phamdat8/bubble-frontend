<template>
    <div id="login" class="d-flex justify-content-center row">
        <div class="col-4 mt-5">
            <h1><b> Đăng nhập bubble</b></h1>
            <form class v-on:submit.prevent="submitForm">
                <div class="group">      
                    <input type="text" required v-model="form.username">
                    <span class="highlight"></span>
                    <span class="bar"></span>
                    <label>Tài khoản</label>
                </div>
                <div class="group">      
                    <input type="password" required v-model="form.password">
                    <span class="highlight"></span>
                    <span class="bar"></span>
                    <label>Mật khẩu</label>
                </div>
                
                <div class="text-center">
                    <button class="btn btn-outline-primary" type="submit"> Đăng nhập </button>
                </div>
            </form>
        </div>
        
    </div>
</template>
<script>
    import axios from 'axios';
    export default {
        name: 'Login',
        data(){
            return{
                form: {
                    username: '',
                    password: '',
                    
                }
            }
        },
        methods:{
        submitForm(){
            axios.post(this.$api+'/register', this.form)
                .then((res) => {
                    if(res.data.status == 'Success'){
                        this.$swal({
                            title: 'Tạo tài khoản thành công',
                            type: 'success',
                            icon: 'success'
                        });
                    }else{
                        this.$swal({
                            title: 'Tài khoản đã tồn tại',
                            type: 'success',
                            icon: 'error'
                        });
                    }
                })
                 .catch((error) => {
                    // error.response.status Check status code
                }).finally(() => {
                    //Perform action in always
                });
        }
    }
    }
</script>
<style>
    .group 			  { 
    position:relative; 
    margin-bottom:45px; 
    }
    input 				{
    font-size:18px;
    padding:10px 10px 10px 5px;
    display:block;
    width:100%;
    border:none;
    border-bottom:1px solid #757575;
    }
    input:focus 		{ outline:none; }

    /* LABEL ======================================= */
    label 				 {
    color:#999; 
    font-size:18px;
    font-weight:normal;
    position:absolute;
    pointer-events:none;
    left:5px;
    top:10px;
    transition:0.2s ease all; 
    -moz-transition:0.2s ease all; 
    -webkit-transition:0.2s ease all;
    }

    /* active state */
    input:focus ~ label, input:valid ~ label 		{
    top:-20px;
    font-size:20px;
    font-weight: bold;
    color: black;
    }

    /* BOTTOM BARS ================================= */
    .bar 	{ position:relative; display:block; width:100%; }
    .bar:before, .bar:after 	{
    content:'';
    height:2px; 
    width:0;
    bottom:1px; 
    position:absolute;
    background:#5264AE; 
    transition:0.2s ease all; 
    -moz-transition:0.2s ease all; 
    -webkit-transition:0.2s ease all;
    }
    .bar:before {
    left:50%;
    }
    .bar:after {
    right:50%; 
    }

    /* active state */
    input:focus ~ .bar:before, input:focus ~ .bar:after {
    width:50%;
    }

    /* HIGHLIGHTER ================================== */
    .highlight {
    position:absolute;
    height:60%; 
    width:100px; 
    top:25%; 
    left:0;
    pointer-events:none;
    opacity:0.5;
    }

    /* active state */
    input:focus ~ .highlight {
    -webkit-animation:inputHighlighter 0.3s ease;
    -moz-animation:inputHighlighter 0.3s ease;
    animation:inputHighlighter 0.3s ease;
    }

    /* ANIMATIONS ================ */
    @-webkit-keyframes inputHighlighter {
        from { background:#5264AE; }
    to 	{ width:0; background:transparent; }
    }
    @-moz-keyframes inputHighlighter {
        from { background:#5264AE; }
    to 	{ width:0; background:transparent; }
    }
    @keyframes inputHighlighter {
        from { background:#5264AE; }
    to 	{ width:0; background:transparent; }
    }
</style>