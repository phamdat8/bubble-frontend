<template>
    <div id="user-main">
        <button type="button" class="btn btn-outline-success" data-bs-toggle="modal" data-bs-target="#myModal">
        Đăng bài
        </button>
        
        


        <!-- The Modal -->
        <div class="modal modal-dialog" id="myModal">
            <div class="modal-dialog">
                <div class="modal-content">

                <!-- Modal Header -->
                    <div class="modal-header">
                        <h4 class="modal-title">bài viết mới</h4>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>

                    <!-- Modal body -->
                    <div class="modal-body">
                        <div class="mb-6">
                            Nội dung
                            <textarea name="" id="" cols="43" rows="5" v-model="item.content"></textarea>
                            Đính kèm<br/>
                            <input type="file" id="file" ref="file" v-on:change='handleUpFile()'>
                        </div>
                            
                        
                    </div>

                    <!-- Modal footer -->
                    <div class="modal-footer">
                        <button v-on:click="add()" class="btn btn-outline-success" type="submit"> Đăng bài</button>
                        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                    </div>

                </div>
            </div>
        </div>
        <div>
            <div class="border border-primary rounded p-5">
                <div class="m-4 p-4 post-box" v-for="post in posts" v-bind:key="post.id">
                    <div class="user row">
                        <img v-bind:src="post.user_img" height="100%">
                        <div class="user-name col mt-2">
                            {{post.user_name}}<br/>
                            {{post.created_at}}
                        </div>
                    </div>
                    <hr/>
                    <div class="post">
                        {{post.content}}
                        <br/>
                        <img v-show="post.have_img == 1" v-bind:src="post.post_img" height="100%">
                    </div>
                    <hr/>
                    <div class="comment-box">
                        <div class="comment" v-for="comment in post.comments" v-bind:key="comment.id">
                            <div class="user row">
                                <img v-bind:src="comment.user_img" height="100%">
                                <div class=" col mt-3">
                                    <b>{{comment.name}}</b>:<i>{{comment.content}}</i>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-9">
                                <input type="text" v-model="comment" class="form-control mt-2 col-9">
                            </div>
                            <button v-on:click="post_comment(post.id)" class="btn btn-outline-primary col-2 mt-2 mb-0">Bình luận</button>
                        </div>
                        
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</template>
<script>
    import axios from 'axios';
    export default {
        name: 'UserMain',
        data() {
            return {
                posts: null,
                item: {content: null, file: null, },
                comment: '',

            }
        },
        mounted() {
                this.config =  {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }
                this.getData();
            },
        methods: {
            getData: function() {
                let params = new FormData();
                params.append('action', 'getdata');
                axios.post(this.$api+'/post', params, this.config)
                .then(res => {

                    this.posts = res.data.data;
                    this.posts.forEach((e, i) => {
                        if(e.have_img == 1){
                            this.posts[i].post_img = this.$file + '/posts/' + e.id + '.png';
                        }
                        this.posts[i].user_img = this.$file + '/users/' + e.user_id + '.png';
                        e.comments.forEach((cmt, j) =>{
                            this.posts[i].comments[j].user_img = this.$file + '/users/' + cmt.user_id + '.png';
                        })
                    });
                }) 
            },
            handleUpFile: function(){
                this.item.file = this.$refs.file.files[0];
            },
            add: function() {
                let params = new FormData();
                params.append('content', this.item.content);
                params.append('file', this.item.file);
                params.append('user_id', localStorage.user_id);
                params.append('action', 'create');
                axios.post(this.$api+'/post', params, this.config)
                .then(res => {
                    this.$notify({
                        title: res.data.title,
                        type: res.data.status,
                        text: res.data.message
                    });
                    document.location.reload();
                })
            },
            post_comment: function(post_id) {
                let params = new FormData();
                params.append('action', 'comment');
                params.append('content', this.comment);
                params.append('user_id', localStorage.user_id);
                params.append('post_id', post_id);
                axios.post(this.$api+'/post', params, this.config)
                .then(res => {
                    this.posts.forEach((e, i)=>{
                        if(e.id == post_id){
                            let new_comment = {
                                content: this.comment,
                                name: localStorage.name,
                                user_img: this.$file + '/users/' + localStorage.user_id + '.png',
                            }
                            
                            this.posts[i].comments.push(new_comment);
                        }
                    })
                    this.comment = "";
                })
            }
        }
    }
    

</script>
<style>
    .post-box{
        background-color: #FFC0C7;
        border-radius: 20px;

    }
    .user img{
        width:50px;
        height:50px;
        border-radius: 50%;
        border:2px solid black;
        padding: 0px;
    }
    .post img{
        width:80%;
        display: block;
        border:2px solid black;
        padding: 0px;
        margin:100px;
        margin-top: 20px;
        margin-bottom: 20px
    }
    .user-name{
        font-size: 20px;
        font-weight: bold;
    }
    .comment-box{
        margin-left: 50px;
    }
</style>