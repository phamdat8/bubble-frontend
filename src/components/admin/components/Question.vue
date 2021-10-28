<template>
    <div id="topic">
        <div class="data-name">
            Quản lý bài học
        </div>
        <div v-show="picked === 'true'"  class="data-name">
            <div v-show="item.id == 0">
                Thêm câu hỏi
            </div>
            <div v-show="item.id != 0">
                Chỉnh sửa câu hỏi #{{item.id}}
            </div>
            <form enctype="multipart/form-data">
                <div class="row text-left">
                    <div class="col-12 p-5">
                        <div class="group">      
                            <input type="text" v-model="item.content" required>
                            <span class="highlight"></span>
                            <span class="bar"></span>
                            <label>Nội dung</label>
                        </div>
                    </div>
                    <div class="col-12 p-5 pt-0">
                        <div class="group">
                            <select v-model="item.lesson_id">
                                <option value="0" disabled>Chọn bài học</option>
                                <option v-for="lesson in lessons" v-bind:key="lesson.id" v-bind:value="lesson.id">{{ lesson.name }}</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-12 p-5 pt-0 border border-white rounded">
                        <h3>Câu trả lời:</h3>
                        <div class="row">
                            <h4>Đúng:</h4>
                            <div class="row">
                                <div class="col-9">
                                    <input type="text" class="form-control m-4" v-model="right_answer.content">
                                </div>
                            </div>
                            <h4>Sai</h4>
                            <div class="row" v-for="answer in wrong_answers" v-bind:key="answer.id" v-bind:id="answer.id">
                                <div class="col-9">
                                    <input  type="text" class="form-control m-4" v-model="answer.content">
                                </div>
                                <div class="col-3">
                                    <button v-on:click="delAnswer(answer.id)" class="btn btn-outline-danger m-4">-</button>
                                </div>
                            </div>
                            <div v-show="wrong_answers.length < 3">
                                <button v-on:click="addAnswer()" class="btn btn-outline-success">+</button>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div v-show="action == 'update'" class="text-center">
                    <button v-on:click="update()" class="btn btn-outline-success" type="button"> Cập nhật </button>
                    <button v-on:click="cancel()" class="btn btn-outline-warning" type="button"> Hủy thay đổi </button>
                    <button v-on:click="del()" class="btn btn-outline-danger" type="button"> Xóa câu hỏi </button>
                </div>
                <div v-show="action == 'add'" class="text-center">
                    <button v-on:click="add()" class="btn btn-outline-success" type="button"> Thêm câu hỏi </button>
                    <button v-on:click="cancel()" class="btn btn-outline-warning" type="button"> Hủy thay đổi </button>
                </div>
            </form>
        </div>
        <div v-show="picked == 'false'">
            <button v-on:click="addForm()" class="btn btn-outline-success">+</button>
        </div>
        <table class="table table-dark mb-5">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nội dung</th>
                    <th scope="col">Bài học</th>
                </tr>
            </thead>
            <tbody>
                <tr class="item" v-for="item in questions" :key="item.id" v-on:click="getItem(item.id)">
                    <td> {{ item.id }} </td>
                    <td> {{ item.content }} </td>
                    <td> {{ item.name }} </td>
                </tr>
            </tbody>
        </table>
        
    </div>
</template>
<script>

    import axios from 'axios';
    export default {
        name: 'Question',
        data (){
            return{
                questions: null,
                answers_num: 0,
                lessons: null,
                right_answer: {'content': null},
                wrong_answers: [],
                item: {"id": 0, 'content': null, 'name': null, lesson_id: 0},
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
                axios.post(this.$api+'/question', params, this.config)
                .then(res => {
                    this.questions = res.data.data;
                })
                axios.post(this.$api+'/lesson', params, this.config)
                .then(res => {
                    this.lessons = res.data.data;
                })
                ;
            },
            getItem: function(id){
                let params = new FormData();
                params.append('condition', 'q.id ='+ id);
                params.append('action', 'getdata');
                axios.post(this.$api+'/question', params, this.config)
                .then(res => {
                    this.item = res.data.data[0];
                    this.picked = 'true';
                    this.action = 'update';
                })
                params.append('condition', 'q.id ='+ id + ' and is_correct = true');
                axios.post(this.$api+'/answer', params, this.config)
                .then(res => {
                    this.right_answer = res.data.data[0];
                })
                params.append('condition', 'q.id ='+ id + ' and is_correct = false');
                axios.post(this.$api+'/answer', params, this.config)
                .then(res => {
                    this.wrong_answers = res.data.data;
                })
            },

            update: function(){
                let params = new FormData();
                let wrong = '';
                this.wrong_answers.forEach(e => {
                    wrong = wrong + e.content + '-';
                });
                params.append('id', this.item.id);
                params.append('content', this.item.content);
                params.append('lesson_id', this.item.lesson_id);
                params.append('right', this.right_answer.content);
                params.append('wrong', wrong);
                params.append('action', 'update');
                axios.post(this.$api+'/question', params, this.config)
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
                this.item = {"id": 0, 'name': null, 'topic_id': 0};
                this.picked = 'true';
                this.action = 'add';
            },
            delAnswer: function(id){
                var i = 0;
                while (i < this.wrong_answers.length) {
                    if (this.wrong_answers[i].id === id) {
                        this.wrong_answers.splice(i, 1);
                    } else {
                        ++i;
                    }
                }
            },
            addAnswer: function(){
                let ans = {'content': null, 'id': Math.floor(Math.random() * 1000)};
                this.wrong_answers.push(ans);
            },
            add: function() {
                if(this.item.lesson_id == 0){
                    this.$notify({
                        title: 'Thất bại',
                        type: 'error',
                        text: 'Chọn chủ đề trước'
                    });
                    return;
                }
                let params = new FormData();
                let wrong = '';
                this.wrong_answers.forEach(e => {
                    wrong = wrong + e.content + '-';
                });
                params.append('id', this.item.id);
                params.append('content', this.item.content);
                params.append('lesson_id', this.item.lesson_id);
                params.append('right', this.right_answer.content);
                params.append('wrong', wrong);
                params.append('action', 'create');
                axios.post(this.$api+'/question', params, this.config)
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
                axios.post(this.$api+'/question', params, this.config)
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
<style>
    .data-name{
        text-align: left;
    }
    
</style>