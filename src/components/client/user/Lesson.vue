<template>
    <div id="user-lesson-list">
        <div class="m-5 text-center">
            <div class="row border border-primary rounded m-5 p-5 pt-2 mt-2">
                <h1>Bài học</h1>
                <div class="col-12 topic-container m-2"  v-for="item in rel" :key="item.id">
                    <div class="row">
                        <div class="col-10">
                            <span class="topic-name">{{ item.name }}</span>
                            <div v-if="item.complete == true" class="com">Đã hoàn thành</div>
                            <div v-else class="non-com">Chưa hoàn thành</div>
                        </div>
                        <div class="col-2 vertical-center">
                            <router-link :to="`/user/quiz/${item.id}`">
                                <button class="btn btn-outline-primary">Làm bài</button>
                            </router-link>
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
        name: 'UserLesson',
        data () {
            return {
                rel: null
            }
        },
        mounted () {
            let params = {};
            params["user_id"] = localStorage.user_id;
            params["topic_id"] = this.$route.params.id;
            axios
            .get(this.$api+'/lesson/user.php', {params: params})
            .then(res => {
               this.rel = res.data.data
            })
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
        min-height: 100%;

        display: flex;
        align-items: center;
    }
    .com{
        color: green;
        font-weight: bold;
        margin-left: 30px;
    }
    .non-com{
        color: blue;
        font-weight: bold;
        margin-left: 30px;
    }
</style>