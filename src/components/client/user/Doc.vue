<template>
    <div id="document">
        <div class="border border-primary rounded p-5">
            <div class="m-4 p-4 post-box" v-for="doc in docs" v-bind:key="doc.id">
                <b><h2>{{doc.title}}</h2></b>
                <div class="m-3">{{doc.content}}</div>
                <hr/>
                <div class="m-3">
                    File đính kèm: <br/>
                    {{doc.file_name}} 
                    <a v-bind:href="doc.link">Xem</a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import axios from 'axios';
    export default {
        name: 'Doc',
        data() {
            return {
                docs: null,
                

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
                params.append('condition', 'true');
                axios.post(this.$api+'/document', params, this.config)
                .then(res => {
                    this.docs = res.data.data;
                    this.docs.forEach((doc, i) => {
                        this.docs[i].link = this.$file + '/docs/' + doc.file_name;
                    });
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
</style>
