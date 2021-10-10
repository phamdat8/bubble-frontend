<template>
</template>

<script>
  export default {
    name: 'logout',
    mounted() {
      localStorage.login = false,
      this.$router.push("/");
    },
  }
</script>