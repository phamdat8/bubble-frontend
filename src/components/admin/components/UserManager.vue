<template>
    <div id="user">
        <div class="data-name">
            Quản lý tài khoản
        </div>
        <table class="table table-dark mb-5">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Tên đăng nhập</th>
                <th scope="col">Tên</th>
                <th scope="col">Email</th>
                </tr>
            </thead>
            <tbody>
                <tr class="item" v-for="item in items" :key="item.id" v-on:click="getItem(item.id)">
                    <td> {{ item.id }} </td>
                    <td> {{ item.username }} </td>
                    <td> {{ item.name }} </td>
                    <td> {{item.email}} </td>
                </tr>
            </tbody>
        </table>
        <div v-show="picked === 'true'"  class="data-name">
            <div v-show="item.id == 0">
                Thêm tài khoản mới
            </div>
            <div v-show="item.id != 0">
                Chỉnh sửa tài khoản #{{item.id}}
            </div>
            <form enctype="multipart/form-data">
                <div class="row">
                    <div class="col-6 p-5">
                        <div class="group">      
                            <input type="text" v-model="item.username" required>
                            <span class="highlight"></span>
                            <span class="bar"></span>
                            <label>Tên đăng nhập</label>
                        </div>
                        <div class="group">      
                            <input type="text" v-model="item.name" required>
                            <span class="highlight"></span>
                            <span class="bar"></span>
                            <label>Tên</label>
                        </div>
                    </div>
                    <div class="col-6 p-5">
                        <div class="group">      
                            <input type="text" v-model="item.email" required>
                            <span class="highlight"></span>
                            <span class="bar"></span>
                            <label>Email</label>
                        </div>
                        <div>
                            <input type="file" id="file" ref="file" v-on:change='handleUpFile()'>
                        </div>
                    </div>
                </div>
                <div v-show="action == 'update'" class="text-center">
                    <button v-on:click="update()" class="btn btn-outline-success" type="button"> Cập nhật </button>
                    <button v-on:click="cancel()" class="btn btn-outline-warning" type="button"> Hủy thay đổi </button>
                    <button v-on:click="del()" class="btn btn-outline-danger" type="button"> Xóa tài khoản </button>
                </div>
                <div v-show="action == 'add'" class="text-center">
                    <button v-on:click="add()" class="btn btn-outline-success" type="submit"> Thêm tài khoản </button>
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
        name: 'UserManager',
        data (){
            return{
                items: null,
                item: {"id": 0, 'name': null, 'username': null, 'email': null, 'submit': null, 'file': null},
                picked: 'false',
                action: null,
            }
        },
        mounted () {
            let params = {};
            params["condition"] = "true";
            this.getData(params);
        },
        methods: {
            getItem: function($id){
                let params = {};
                params["id"] = $id;
                axios
                .get(this.$api+'/user/data.php', {params: params})
                .then(res => {
                    this.item = res.data.data[0];
                    this.picked = 'true';
                    this.action = 'update';
                })
            },

            update: function(){
                let params = new FormData();
                params.append('file', this.item.file);
                params.append('name', this.item.name);
                params.append('username', this.item.username);
                params.append('email', this.item.email);
                params.append('id', this.item.id);
                axios.post(this.$api+'/user/update.php', 
                    params, 
                    {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    }
                )
                .then(res => {
                    this.$notify({
                        title: res.data.title,
                        type: res.data.status,
                        text: res.data.message
                    });
                    let params = {};
                    params["condition"] = "true";
                    this.picked = 'false';
                    this.getData(params);
                })
            
                
            },
            getData: function (params) {
                debugger;
                axios.get(this.$api+'/user/list.php', {params: params})
                .then(res => {
                    this.items = res.data.data;
                })
            },
            cancel: function(){
                this.picked = 'false';
            },
            addForm: function(){
                this.item = {"id": 0, 'name': null, 'username': null, 'email': null, 'file': null};
                this.picked = 'true';
                this.action = 'add';
            },
            add: function() {
                let params = new FormData();
                params.append('file', this.item.file);
                params.append('name', this.item.name);
                params.append('username', this.item.username);
                params.append('email', this.item.email);
                axios.post(this.$api+'/user/add.php', 
                    params, 
                    {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    }
                )
                .then(res => {
                    this.$notify({
                        title: res.data.title,
                        type: res.data.status,
                        text: res.data.message
                    });
                    let params = {};
                    params["condition"] = "true";
                    this.picked = 'false';
                    this.getData(params);
                })
            },
            del: function(){
                let params = this.item;
                axios.get(this.$api+'/user/delete.php', {params: params})
                .then(res => {
                    this.$notify({
                        title: res.data.title,
                        type: res.data.status,
                        text: res.data.message
                    });
                    let params = {};
                    params["condition"] = "true";
                    this.picked = 'false';
                    this.getData(params);
                })
            },
            handleUpFile: function(){
                this.item.file = this.$refs.file.files[0];
                
            }
            
        }

    }


</script>
<style>

</style>