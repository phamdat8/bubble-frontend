<template>
    <div id="topic">
        <div class="data-name">
            Quản lý chủ đề
        </div>
        <table class="table table-dark mb-5">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Tên chủ đề</th>
                </tr>
            </thead>
            <tbody>
                <tr class="item" v-for="item in items" :key="item.id" v-on:click="getItem(item.id)">
                    <td> {{ item.id }} </td>
                    <td> {{ item.name }} </td>
                </tr>
            </tbody>
        </table>
        <div v-show="picked === 'true'"  class="data-name">
            <div v-show="item.id == 0">
                Thêm chủ đề
            </div>
            <div v-show="item.id != 0">
                Chỉnh sửa chủ đề #{{item.id}}
            </div>
            <form enctype="multipart/form-data">
                <div class="row">
                    <div class="col-6 p-5">
                        <div class="group">      
                            <input type="text" v-model="item.name" required>
                            <span class="highlight"></span>
                            <span class="bar"></span>
                            <label>Tên chủ đề</label>
                        </div>
                    </div>
                    <div class="col-6 p-5">
                    </div>
                </div>
                <div v-show="action == 'update'" class="text-center">
                    <button v-on:click="update()" class="btn btn-outline-success" type="button"> Cập nhật </button>
                    <button v-on:click="cancel()" class="btn btn-outline-warning" type="button"> Hủy thay đổi </button>
                    <button v-on:click="del()" class="btn btn-outline-danger" type="button"> Xóa chủ đề </button>
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
                item: {"id": 0, 'name': null},
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
                axios.post(this.$api+'/topic', params, this.config)
                .then(res => {
                    this.items = res.data.data;
                })
            },
            getItem: function(id){
                let params = new FormData();
                params.append('condition', 'id ='+ id);
                params.append('action', 'getdata');
                axios.post(this.$api+'/topic', params, this.config)
                .then(res => {
                    this.item = res.data.data[0];
                    this.picked = 'true';
                    this.action = 'update';
                })
            },

            update: function(){
                let params = new FormData();
                params.append('id', this.item.id);
                params.append('name', this.item.name);
                params.append('action', 'update');
                axios.post(this.$api+'/topic', params, this.config)
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
                params.append('name', this.item.name);
                params.append('action', 'create');
                axios.post(this.$api+'/topic', params, this.config)
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
                 axios.post(this.$api+'/topic', params, this.config)
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
        
        }
    }
</script>