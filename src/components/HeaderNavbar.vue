<template>
    <header class="site-header">
        <div :class="['navbar-default navbar-fixed-top', { scrolled: isScrolled }]">
            <div class="fluid-container">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" @click="toggleMenu">
                        <i class="fa fa-bars"></i>
                    </button>
                    <router-link class="navbar-brand" to="/">UNIVERSITAS TERBUKA</router-link>
                </div>
                <div :class="['navbar-collapse', { collapse: !isOpen }]">
                    <ul class="nav navbar-nav navbar-right">
                        <li><router-link class="link-contact" to="/contact">Kontak</router-link></li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
</template>

<script setup>
    import { ref, onMounted, onUnmounted } from 'vue'

    const isOpen = ref(false)
    const isScrolled = ref(false)
    const toggleMenu = () => (isOpen.value = !isOpen.value)
    const handleScroll = () => {
        isScrolled.value = window.scrollY > 1
    }

    onMounted(() => {
        window.addEventListener('scroll', handleScroll)
    })

    onUnmounted(() => {
        window.removeEventListener('scroll', handleScroll)
    })
</script>
