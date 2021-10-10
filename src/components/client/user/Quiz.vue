<template>
    <div id="quiz">
        <div class="m-5 text-center">
            <div class="row border border-primary rounded m-5 p-5 pt-2 mt-2">
                <h1><b>{{ name }}</b></h1>
                
                <hr/>
                <div v-for="(question, index) in questions" :key="question.content">
                    <!-- Hide all questions, show only the one with index === to current question index -->
                    <div v-show="index === questionIndex">
                        <h2><b>{{ question.content }}</b></h2>
                        <div class="row">
                            <div v-for="answer in question.answers" :key="answer.id" class="col-6 p-1">
                                <button class="quiz-ans-btn" v-bind:id="answer.id" v-on:click="pick(answer.is_correct, answer.id)">{{ answer.content }}</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-show="questionIndex === total" class="mt-5 mb-5">
                    <h1>Hoàn thành</h1>
                    <h3>Điểm của bạn: {{questionTrue}}/{{total}}</h3>
                    <button class="btn btn-outline-success" v-on:click="back">Trở về</button>
                </div>
                <hr/>
                <div class="row head-box">
                    <div class="col-6 icon">
                        <i class="fas fa-check text-success"></i>{{questionTrue}}
                        <i class="fas fa-times text-danger"></i>{{questionFalse}}
                    </div>
                    <div v-show="questionIndex < total" class="col-6 cur">Câu hiện tại: {{questionIndex+1}}/{{total}}</div>
                </div>
            </div>
        </div>
        
    </div>
</template>
<script>
    const delay = millis => new Promise((resolve, reject) => {
        setTimeout(_ => resolve(), millis)
    });
    import axios from 'axios';
    export default {
        name: 'Quiz',
        data() {
            return {
                questions: null,
                name: null,
                questionIndex: 0,
                questionTrue: 0,
                questionFalse: 0,
                total: null
            }
        },
        methods: {
            pick: async function(rel, id) {
                document.getElementById(id).style.background = "red";
                var data = this.questions[this.questionIndex].answers;
                data.map((answer)=>{
                    if(answer.is_correct == 1){
                        document.getElementById(answer.id).style.background = "green";
                    }
                })
                await delay(500);
                if(rel == 1){
                    this.questionTrue++;
                }else{
                    this.questionFalse++;
                }
                this.questionIndex++;
            },
            back: function(){
                let params = {};
                params["user_id"] = localStorage.user_id;
                params["lesson_id"] = this.$route.params.id;
                params["score"] = this.questionTrue/this.total;
                debugger;
                axios
                .post(this.$api+'/process', params)
                .then(res => {
                    debugger;
                     this.$notify({
                        title: res.data.title,
                        type: res.data.status,
                        text: res.data.message
                    });
                })
                history.back();
            }
        },
        mounted () {
            let params = {};
            params["lesson_id"] = this.$route.params.id;
            axios
            .get(this.$api+'/quiz/user.php', {params: params})
            .then(res => {
                this.questions = res.data.data;
                this.name = res.data.message;
                this.total = res.data.data.length;
            })
        }
    }
</script>
<style>
    .quiz-ans-btn {
	    font-size: 20px;
        color: #fff;
        width: 85%;
        font-weight: bold;
        min-height: 75px;
        padding: 5px;
        background-color: #ff6395;
        border: 1px solid rgba(0, 0, 0, 0.075);
        border-radius: 50px;
        outline: none;
        letter-spacing: .05em;
        transition: all 0.5s;
        margin: 8px;
        white-space: normal;
    }
        .quiz-ans-btn:hover { color: #fff; background-color: #ff3f7d; }
        .btn.quiz-ans-btn:active, .btn.quiz-ans-btn:focus { color: #fff; background-color: #ff3f7d; }
        .quiz-ans-btn.correct {
        background-color: #29a329;
        }
        .quiz-ans-btn.incorrect {
        background-color: #e60000;
    }
    .head-box{
        font-weight: bold;
        font-size: 25px;

    }
    .icon{
        text-align: left !important;
    }
    .cur{
        text-align: right !important;
    }
    
</style>