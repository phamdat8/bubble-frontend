<template>
    <div id="user-main">
        <div class="m-5 text-center">
            <div class="row border border-primary rounded m-5 p-5 pt-2 mt-2">
                <h1>Chủ đề</h1>
                <div class="col-12 topic-container m-2"  v-for="item in rel" :key="item.id">
                    <div class="row">
                        <div class="col-10">
                            <span class="topic-name">{{ item.name }}</span>
                            <small class="topic-process">Hoàn thành: {{ item.process }}/{{ item.total }}</small>
                        </div>
                        <div class="col-2 vertical-center">
                            <router-link :to="`/user/lesson/${item.id}`">
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
        name: 'UserTopic',
        data () {
            return {
                rel: null
            }
        },
        mounted () {
            axios
            .get(this.$api+'/topic/user.php'+'?user_id='+localStorage.user_id)
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
        min-height: 100%;  /* Fallback for browsers do NOT support vh unit */

        display: flex;
        align-items: center;
    }
</style>