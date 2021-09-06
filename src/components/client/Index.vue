<template>
    <div id="main">
    <Header />
    <div style="height:106px"></div>
    <div style="min-height: 800px"><router-view></router-view></div>
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