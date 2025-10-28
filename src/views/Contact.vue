<template>
    <div class="fluid-container">
        <main class="main-content">
            <div class="fluid-container">
                <br /><br /><br /><br />
                <div class="section-contact">
                    <div class="row">
                        <div class="col-md-5 col-sm-12 col-xs-12">
                            <form @submit.prevent="handleSubmit">
                                <fieldset>
                                    <label for="name">Nama:</label>
                                    <input type="text" id="name" v-model="form.name" />
                                    <div v-if="errors.name" class="error-text">{{ errors.name }}</div>
                                </fieldset>

                                <fieldset>
                                    <label for="email">Email:</label>
                                    <input type="email" id="email" v-model="form.email" />
                                    <div v-if="errors.email" class="error-text">{{ errors.email }}</div>
                                </fieldset>

                                <fieldset>
                                    <label for="phone">Nomor Telepon:</label>
                                    <input type="tel" id="phone" v-model="form.phone" />
                                    <div v-if="errors.phone" class="error-text">{{ errors.phone }}</div>
                                </fieldset>

                                <fieldset>
                                    <label for="message">Kesan dan Pesan:</label>
                                    <textarea id="message" rows="4" v-model="form.message"></textarea>
                                    <div v-if="errors.message" class="error-text">{{ errors.message }}</div>
                                </fieldset>
                                <br/>
                                <fieldset>
                                    <input
                                        type="submit"
                                        class="button-dark"
                                        id="button-kirim"
                                        :value="buttonText"
                                        :disabled="isDisabled"
                                    />
                                </fieldset>
                            </form>
                        </div>

                        <div class="col-md-7 col-sm-12 col-xs-12">
                            <div class="contact-map">
                                <div id="map-canvas"></div>
                            </div>
                            <div class="contact-infos">
                                <div class="row">
                                    <div class="col-md-6">
                                        <p><strong>Email:</strong> <a href="#">fissalmahanifa@gmail.com</a></p>
                                        <p><strong>Nomor HP:</strong> +6287886735414</p>
                                    </div>
                                    <div class="col-md-6">
                                        <p>Terima kasih karena sudah mengirimkan pesan dan kesan</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script setup>
    import { ref } from "vue"

    const form = ref({
        name: "",
        email: "",
        phone: "",
        message: "",
    })

    const errors = ref({})
    const buttonText = ref("Kirim")
    const isDisabled = ref(false)

    const validateForm = () => {
        errors.value = {}
        let isValid = true

        if (!form.value.name) {
            errors.value.name = "Nama wajib diisi"
            isValid = false
        } else if (form.value.name.length < 5) {
            errors.value.name = "Nama minimal harus 5 karakter"
            isValid = false
        }

        if (!form.value.email) {
            errors.value.email = "Email wajib diisi"
            isValid = false
        }

        if (!form.value.phone) {
            errors.value.phone = "Nomor telepon wajib diisi"
            isValid = false
        } else if (!/^\d+$/.test(form.value.phone)) {
            errors.value.phone = "Nomor telepon harus berupa angka"
            isValid = false
        }

        return isValid
    }

    const handleSubmit = () => {
        if (!validateForm()) return

        alert(`Terima kasih ${form.value.name}, pesanmu sudah terkirim!`)
        buttonText.value = "Sudah Terkirim"
        isDisabled.value = true

        setTimeout(() => {
            buttonText.value = "Kirim"
            isDisabled.value = false
            form.value = { name: "", email: "", phone: "", message: "" }
        }, 3000)
        }
</script>
