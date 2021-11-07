<template>
    <div id="topic">
        <div class="data-name">
            Quản lý tài liệu
        </div>
        <table class="table table-dark mb-5">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Tiêu đề</th>
                    <th scope="col">File đính kèm</th>
                    <th scope="col">Ngày đăng</th>
                </tr>
            </thead>
            <tbody>
                <tr class="item" v-for="item in items" :key="item.id" v-on:click="getItem(item.id)">
                    <td> {{ item.id }} </td>
                    <td> {{ item.title }} </td>
                    <td> {{ item.file_name }} </td>
                    <td> {{ item.created_at }} </td>
                </tr>
            </tbody>
        </table>
        <div v-show="picked === 'true'"  class="data-name">
            <div v-show="item.id == 0">
                Thêm tài liệu
            </div>
            <div v-show="item.id != 0">
                Chỉnh sửa tài liệu #{{item.id}}
            </div>
            <form enctype="multipart/form-data">
                <div class="row">
                    <div class="col-6 p-5">
                        <div class="group">      
                            <input type="text" v-model="item.title" required>
                            <span class="highlight"></span>
                            <span class="bar"></span>
                            <label>Tiêu đề</label>
                        </div>
                        <div class="group">      
                            <input type="text" v-model="item.content" required>
                            <span class="highlight"></span>
                            <span class="bar"></span>
                            <label>Nội dung</label>
                        </div>
                    </div>
                    <div class="col-6 p-5">
                        <div>
                            <input type="file" id="file" ref="file" v-on:change='handleUpFile()'>
                        </div>
                    </div>
                </div>
                <div v-show="action == 'update'" class="text-center">
                    <button v-on:click="update()" class="btn btn-outline-success" type="button"> Cập nhật </button>
                    <button v-on:click="cancel()" class="btn btn-outline-warning" type="button"> Hủy thay đổi </button>
                    <button v-on:click="del()" class="btn btn-outline-danger" type="button"> Xóa tài liệu </button>
                </div>
                <div v-show="action == 'add'" class="text-center">
                    <button v-on:click="add()" class="btn btn-outline-success" type="button"> Thêm chủ đề </button>
                    <button v-on:click="cancel()" class="btn btn-outline-warning" type="button"> Hủy thay đổi </button>
                </div>
            </form>
        </div>
        <div v-show="picked == 'false'">
            <button v-on:click="addForm()" class="btn btn-outline-success">+</button>
        </div>
    </div>
</template>
<script>
    import axios from 'axios';
    export default {
        name: 'Topic',
        data (){
            return{
                items: null,
                item: {"id": 0, 'title': null, 'content': null, 'file': null},
                picked: 'false',
                action: null,
                config: null,
            }
        },
        mounted () {
            this.config =  {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
            this.getData();
        },
        methods: {
            getData: function () {
                let params = new FormData();
                params.append('condition', 'true');
                params.append('action', 'getdata');
                axios.post(this.$api+'/document', params, this.config)
                .then(res => {
                    this.items = res.data.data;
                })
            },
            getItem: function(id){
                let params = new FormData();
                params.append('condition', 'id ='+ id);
                params.append('action', 'getdata');
                axios.post(this.$api+'/document', params, this.config)
                .then(res => {
                    this.item = res.data.data[0];
                    this.picked = 'true';
                    this.action = 'update';
                })
            },

            update: function(){
                let params = new FormData();
                params.append('id', this.item.id);
                params.append('title', this.item.title);
                params.append('content', this.item.content);
                params.append('file', this.item.file);
                params.append('action', 'update');
                axios.post(this.$api+'/document', params, this.config)
                .then(res => {
                    this.$notify({
                        title: res.data.title,
                        type: res.data.status,
                        text: res.data.message
                    });
                    this.picked = 'false';
                    this.getData();
                })
            
                
            },
            
            cancel: function(){
                this.picked = 'false';
            },
            addForm: function(){
                this.item = {"id": 0, 'name': null};
                this.picked = 'true';
                this.action = 'add';
            },
            add: function() {
                let params = new FormData();
                params.append('title', this.item.title);
                params.append('content', this.item.content);
                params.append('file', this.item.file);
                params.append('action', 'create');
                axios.post(this.$api+'/document', params, this.config)
                .then(res => {
                    this.$notify({
                        title: res.data.title,
                        type: res.data.status,
                        text: res.data.message
                    });
                    this.picked = 'false';
                    this.getData();
                })
            },
            del: function(){
                let params = new FormData();
                params.append('id', this.item.id);
                params.append('action', 'delete');
                 axios.post(this.$api+'/document', params, this.config)
                .then(res => {
                    this.$notify({
                        title: res.data.title,
                        type: res.data.status,
                        text: res.data.message
                    });
                    this.picked = 'false';
                    this.getData();
                })
            },
            handleUpFile: function(){
                this.item.file = this.$refs.file.files[0];
                
            }
        
        }
    }
</script>