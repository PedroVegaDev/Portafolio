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
              <a href="mailto:pedro.angel.vd@gmail.com">
                pedro.angel.vd@gmail.com
              </a>
            </p>
          </div>
          <div class="p-contact__infoItem">
            <h3 class="p-contact__infoItemTitle">Celular</h3>
            <p>
              <a href="tel:+51979188529">+51 979 188 529 </a>
            </p>
          </div>
          <div class="p-contact__infoItem">
            <h3 class="p-contact__infoItemTitle">Redes Sociales</h3>
            <div>
              <a
                target="_blank"
                class="p-contact__socialLink"
                href="https://twitter.com/PedroAngelDev"
                ><fa class="icon" :icon="['fab', 'twitter']" title="twitter"
              /></a>
              <a
                target="_blank"
                class="p-contact__socialLink"
                href="https://www.instagram.com/pedroangeldev/"
                ><fa
                  class="icon"
                  :icon="['fab', 'instagram']"
                  title="instagram"
              /></a>
              <a
                target="_blank"
                class="p-contact__socialLink"
                href="https://www.linkedin.com/in/pedroangeldev/"
                ><fa class="icon" :icon="['fab', 'linkedin']" title="linkedin"
              /></a>
              <a
                target="_blank"
                class="p-contact__socialLink"
                href="https://github.com/PedroAngelDev"
                ><fa class="icon" :icon="['fab', 'github']" title="github"
              /></a>
              <a
                target="_blank"
                class="p-contact__socialLink"
                href="https://dev.to/pedroangeldev"
                ><fa class="icon" :icon="['fab', 'dev']" title="dev"
              /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Contact',
  head() {
    return {
      title: 'Contacto'
    }
  },
  data() {
    return {
      name: '',
      email: '',
      affair: '',
      message: '',
      alert: false,
      disabledInputs: false,
      endPoint: 'https://submit-form.com/qHfbWlMD'
    }
  },
  methods: {
    async submitForm() {
      const data = {
        name: this.name,
        email: this.email,
        message: this.message
      }

      this.disabledInputs = true

      const response = await fetch(this.endPoint, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        }
      })

      if (response.ok) {
        this.name = ''
        this.email = ''
        this.affair = ''
        this.message = ''
        this.disabledInputs = false
        this.alert = true
        setTimeout(() => {
          this.alert = false
        }, 3000)
      } else {
        alert('mensaje no entregado')
        this.disabledInputs = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../scss/pages/contact.scss';
</style>
