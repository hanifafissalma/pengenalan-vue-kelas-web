<template>
    <div class="fluid-container">
        <HeaderNavbar />
        <router-view />
    </div>
</template>

<script setup>
  import HeaderNavbar from './components/HeaderNavbar.vue'
</script>