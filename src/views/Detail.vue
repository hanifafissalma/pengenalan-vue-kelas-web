<template>
    <div class="main-content text-center">
        <div class="fluid-container">
            <br /><br /><br /><br />
            <div class="section-contact">
                <h2>Detail Mahasiswa</h2>
                <p><strong>NIM:</strong> {{ nim }}</p>

                <router-link to="/" class="btn-back">Kembali</router-link>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { useRoute } from 'vue-router'

    const route = useRoute()
    const nim = route.params.nim
</script>