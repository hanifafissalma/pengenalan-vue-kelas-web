<template>
    <div class="card">
        <div class="title">{{ course?.title }}</div>
        <div class="content">
            <p>{{ course?.body }}</p>
            <button @click="goLive" target="_blank" class="button-go">
                Mulai Praktikum
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
    defineProps({ course: Object })

    const goLive = () => {
        window.open('https://ionic.io/ionicons', '_blank')
    }
</script>

<style scoped>
    .card {
        padding: 20px 30px;
        border: 1px solid black;
        margin: 4px;
        border-radius: 30px;
    }
    .title{
        font-size: 28px;
        font-weight: 800;
        margin-bottom: 5px;
    }
    .button-go {
        padding: 10px;
        background-color: aqua;
        color:black;
        text-align: center;
    }
</style>