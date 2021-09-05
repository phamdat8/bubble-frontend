<template>
    <div id="main">
    <Header />
    <div style="height:106px"></div>
    <router-view></router-view>
    <Footer />
    </div>
</template>
<script>
    import Header from '@/components/client/layouts/Header';
    import Footer from '@/components/client/layouts/Footer';
    export default {
        name: 'Index',
        components: {
            Header,
            Footer
        }
    }
</script>