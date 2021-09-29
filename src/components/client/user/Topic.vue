<template>
    <div id="user-main">
        <div class="m-5 text-center">
            <div class="row border border-primary rounded m-5 p-5 pt-2 mt-2">
                <h1>Chủ đề</h1>
                <h1>{{info}}</h1>
                <div class="col-12 topic-container m-2">
                    <div class="row">
                        <div class="col-10">
                            <span class="topic-name">Ôn thi Toeic</span>
                            <small class="topic-process">Hoàn thành: 6/10</small>
                            Nâng cao kiến thức để hoàn thành các câu hỏi toeic
                        </div>
                        <div class="col-2 vertical-center">
                            <button class="btn btn-outline-primary">Làm bài</button>
                        </div>
                    </div>
                </div>
                <div class="col-12 topic-container m-2">
                    <div class="row">
                        <div class="col-10">
                            <span class="topic-name">Ôn thi Toeic</span>
                            <small class="topic-process">Hoàn thành: 6/10</small>
                            Nâng cao kiến thức để hoàn thành các câu hỏi toeic
                        </div>
                        <div class="col-2 vertical-center">
                            <button class="btn btn-outline-primary">Làm bài</button>
                        </div>
                    </div>
                </div>
                <div class="col-12 topic-container m-2">
                    <div class="row">
                        <div class="col-10">
                            <span class="topic-name">Ôn thi Toeic</span>
                            <small class="topic-process">Hoàn thành: 6/10</small>
                            Nâng cao kiến thức để hoàn thành các câu hỏi toeic
                        </div>
                        <div class="col-2 vertical-center">
                            <button class="btn btn-outline-primary">Làm bài</button>
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
        name: 'UserTopic',
        data () {
            return {
                info: null
            }
        },
        mounted () {
            axios
            .get('https://api.coindesk.com/v1/bpi/currentprice.json')
            .then(response => (this.info = response))
        }
    }
</script>
<style scoped>
    .topic-container{
        text-align: left;
        padding: 20px;
        border-radius: 30px;
        border: 2px solid #ff6395;
    }
    .topic-name{
        display: block;
        font-weight: bold;
        font-size: 25px;
    }
    .topic-process{
        display: block;
        font-size: 18px;
    }
    .vertical-center {
        min-height: 100%;  /* Fallback for browsers do NOT support vh unit */

        display: flex;
        align-items: center;
    }
</style>