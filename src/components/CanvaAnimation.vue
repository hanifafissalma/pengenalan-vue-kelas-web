<template>
  <center>
    <canvas ref="canvas" width="300" height="200"></canvas>
  </center>
</template>

<script setup>
  import { ref, onMounted, onUnmounted } from "vue";

  const canvas = ref(null);
  let animationId = null;

  onMounted(() => {
    const ctx = canvas.value.getContext("2d");
    let x = 150;
    let y = 100;

    const radius = 25;

    let dx = 2;
    let dy = 3;

    const width = canvas.value.width;
    const height = canvas.value.height;

    function animate() {
      ctx.clearRect(0, 0, width, height);
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fillStyle = "blue";
      ctx.fill();

      x += dx;
      y += dy;

      if (x + radius > width || x - radius < 0) {
        dx = -dx;
      }

      if (y + radius > height || y - radius < 0) {
        dy = -dy;
      }

      animationId = requestAnimationFrame(animate);
    }

    animate();
  });

  onUnmounted(() => {
    cancelAnimationFrame(animationId);
  });
</script>

<style>
  canvas {
    text-align: center;
  }
</style>
