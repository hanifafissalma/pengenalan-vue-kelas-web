<template>
    <div class="main-container">
        <div class="fluid-container">
            <br/><br/><br/><br/>
            <div class="section-contact">
                <fieldset>
                    <label>Bilangan 1:</label>
                    <input type="number" v-model.number="bilangan1" />
                </fieldset>
                <fieldset>
                    <label>Bilangan 2:</label>
                    <input type="number" v-model.number="bilangan2" />
                </fieldset>

                <fieldset>
                    <p>Hasil: {{ hasil }}</p>
                    <p>Hasil currency: {{formatCurrency(hasil)}}</p>
                </fieldset>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref, computed } from 'vue'

    const bilangan1 = ref(0)
    const bilangan2 = ref(0)

    const hasil = computed(() => bilangan1.value * bilangan2.value)
    const formatCurrency = () => {
        val.toLocaleString("id-ID", { style: "currency", currency: "IDR" })
    }

</script>
