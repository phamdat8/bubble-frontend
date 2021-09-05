<template>
  <div id="main">
    <Header />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
    import Header from '@/components/admin/layouts/Header';
    import Footer from '@/components/admin/layouts/Footer';
    export default {
        name: 'app'
    }
</script>