<template>
    <div class="main-content">
        <div class="fluid-container">
            <TheWelcome />
        </div>
        {{tutor.nama.slice(2,5) }}
        <div class="fluid-container">
            <div class="section-services" id="services">
                <div class="table-wrapper">
                    <table class="fl-table">
                        <thead>
                            <tr>
                                <th>Nama</th>
                                <th>NIM</th>
                                <th>Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(mhs, index) in students" :key="index">
                                <td>{{ mhs.nama }}</td>
                                <td>{{ mhs.nim }}</td>
                                <td>
                                    <button class="btn-detail" @click="goToDetail(mhs.nim)">
                                        Detail
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import TheWelcome from '@/components/TheWelcome.vue'
    import { useRouter } from 'vue-router'

    const router = useRouter()

    const tutor = {
        nama: "Hanifa Fissalma",
        alamat: "Jakarta",
        no_telp: "087886735414",
        email: "fissalmahanifa@gmail.com"
    }

    const students = [
        {
            nama: "TEDI FAUZI",
            nim: "043343035"
        },
        {
            nama: "MUTIARA DIVA ALINDA",
            nim: "048721035"
        },
        {
            nama: "ARROCHMAN ARDIANSAH",
            nim: "049509394"
        },
        {
            nama: "JUONE RIZKI HERIYANTO SAMOSIR",
            nim: "049540646"
        },
        {
            nama: "MUHAMAD WAHYU KADENGKANG",
            nim: "049627753"
        },
        {
            nama: "NABYLA RAYHANA GUNADI",
            nim: "049662242"
        },
        {
            nama: "MUHAMMAD ZAINUL",
            nim: "049822121"
        },
        {
            nama: "MELKY ARIANTO",
            nim: "050697935"
        },
        {
            nama: "MIRNA",
            nim: "050699691"
        },
        {
            nama: "FATHUR RAHMAN",
            nim: "051211762"
        },
        {
            nama: "HARDI RAHMAT",
            nim: "051700172"
        },
        {
            nama: "NABILA FADILAH",
            nim: "051890033"
        },
        {
            nama: "ANNISA ULHUSNA",
            nim: "051960383"
        },
        {
            nama: "ZIDAN ALFIANSAH",
            nim: "052041205"
        },
        {
            nama: "D. SYAFA'ATUL ANBIYA",
            nim: "052100892"
        },
        {
            nama: "MUHAMMAD HUSNI MUBAROK",
            nim: "052356305"
        },
        {
            nama: "MUHAMMAD HAYKAL MUZAKKIR",
            nim: "052437357"
        },
        {
            nama: "RIKY SYIFARANDANI",
            nim: "053276669"
        },
        {
            nama: "MUKHAMMAD IQBALLUDIN AL HUDA",
            nim: "053414234"
        },
        {
            nama: "SARAH PRIMANDINI",
            nim: "043012098"
        }
    ]

    const goToDetail = (nim) => {
        router.push({ name: 'detail', params: { nim } })
    }
</script>