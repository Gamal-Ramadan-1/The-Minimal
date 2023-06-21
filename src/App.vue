<script setup>
import NavBar from '@/components/NavBar/NavBar.vue'
import Footer from '@/components/Footer/Footer.vue';
import Up from '@/components/Button-UP/Up.vue';

</script>


<template>
  <NavBar />
  <router-view></router-view>
  <Footer />
  <Up />
</template>

<style scoped></style>
