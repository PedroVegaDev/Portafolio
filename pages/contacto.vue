<script setup lang="ts">
useHead({ title: 'Contacto' })

const name = ref('')
const email = ref('')
const affair = ref('')
const message = ref('')
const alert = ref(false)
const disabledInputs = ref(false)
const endPoint = ref('https://submit-form.com/qHfbWlMD')

const submitForm = async () => {
  const data = {
    name: name.value,
    email: email.value,
    message: message.value
  }

  disabledInputs.value = true

  const response = await fetch(endPoint.value, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }
  })

  if (response.ok) {
    name.value = ''
    email.value = ''
    affair.value = ''
    message.value = ''
    disabledInputs.value = false
    alert.value = true
    setTimeout(() => {
      alert.value = false
    }, 3000)
  } else {
    window.alert('mensaje no entregado')
    disabledInputs.value = false
  }
}
</script>

<template>
  <section class="p-contact">
    <div class="container">
      <div class="p-contact__row">
        <div class="p-contact__contentTitle">
          <h2 class="p-contact__title">Contacto</h2>
        </div>
      </div>
      <div class="p-contact__row">
        <div class="p-contact__containerForm">
          <form @submit.prevent="submitForm">
            <div class="p-contact__row --form">
              <div class="p-contact__inputGroup">
                <input
                  type="text"
                  v-model="name"
                  placeholder="Nombre"
                  class="p-contact__inputControl"
                  required
                  :disabled="disabledInputs"
                />
              </div>
              <div class="p-contact__inputGroup">
                <input
                  type="email"
                  v-model="email"
                  placeholder="Email"
                  class="p-contact__inputControl"
                  required
                  :disabled="disabledInputs"
                />
              </div>
              <div class="p-contact__inputGroup">
                <input
                  type="text"
                  v-model="affair"
                  placeholder="Asunto"
                  class="p-contact__inputControl"
                  required
                  :disabled="disabledInputs"
                />
              </div>
              <div class="p-contact__inputGroup">
                <textarea
                  v-model="message"
                  placeholder="Mensaje"
                  class="p-contact__inputControl --textArea"
                  required
                  :disabled="disabledInputs"
                ></textarea>
              </div>
              <div class="p-contact__sendButton">
                <button
                  type="submit"
                  :disabled="disabledInputs"
                  :class="['btn', disabledInputs && 'noHover']"
                >
                  {{ disabledInputs ? 'Enviando..' : 'Enviar Mensaje' }}
                </button>
              </div>
              <transition name="fade">
                <span class="p-contact__alert" v-show="alert"
                  >Gracias por contactarme 😃
                  <p>Me pondré en contacto contigo lo antes posible ✌</p></span
                >
              </transition>
            </div>
          </form>
        </div>
        <div class="p-contact__containerInfo">
          <div class="p-contact__infoItem">
            <h3 class="p-contact__infoItemTitle">Email</h3>
            <p>
              <NuxtLink href="mailto:pedrovegadamian@gmail.com">
                pedrovegadamian@gmail.com
              </NuxtLink>
            </p>
          </div>
          <div class="p-contact__infoItem">
            <h3 class="p-contact__infoItemTitle">Redes Sociales</h3>
            <div>
              <NuxtLink
                target="_blank"
                class="p-contact__socialLink"
                href="https://www.linkedin.com/in/pedrovegadamian/"
              >
                <Icon name="fa-brands:linkedin" title="linkedin" />
              </NuxtLink>
              <NuxtLink
                target="_blank"
                class="p-contact__socialLink"
                href="https://github.com/pedrovegadamian"
              >
                <Icon name="fa-brands:github" title="github" />
              </NuxtLink>
              <NuxtLink
                target="_blank"
                class="p-contact__socialLink"
                href="https://dev.to/pedrovegadamian"
              >
                <Icon name="fa-brands:dev" title="dev" />
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '../scss/pages/contact.scss';
</style>
