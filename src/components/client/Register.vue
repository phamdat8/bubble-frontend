<template>
    <div id="register" class="d-flex justify-content-center row">
        <div class="col-4">
            <form class v-on:submit.prevent="submitForm">
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
                </div>
            </form>
        </div>
        
    </div>
</template>
<script>
    //import axios from 'axios';

    export default {
        name: 'Register',
        data(){
            return{
                form: {
                    username: '',
                    
                }
            }
        },
    }
</script>
<style>

    
</style>