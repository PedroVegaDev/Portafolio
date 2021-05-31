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
            <div class="p-contact__row">
              <div class="p-contact__inputGroup">
                <input
                  type="text"
                  v-model="name"
                  placeholder="Nombre"
                  class="p-contact__inputControl"
                  required
                />
              </div>
              <div class="p-contact__inputGroup">
                <input
                  type="text"
                  v-model="email"
                  placeholder="Email"
                  class="p-contact__inputControl"
                  required
                />
              </div>
              <div class="p-contact__inputGroup">
                <input
                  type="text"
                  v-model="affair"
                  placeholder="Asunto"
                  class="p-contact__inputControl"
                  required
                />
              </div>
              <div class="p-contact__inputGroup">
                <textarea
                  v-model="message"
                  placeholder="Mensaje"
                  class="p-contact__inputControl --textArea"
                  required
                ></textarea>
              </div>
              <div>
                <button type="submit" class="btn">Enviar Mensaje</button>
              </div>
            </div>
          </form>
        </div>
        <div class="p-contact__containerInfo">
          <div class="p-contact__infoItem">
            <h3 class="p-contact__infoItemTitle">Email</h3>
            <p>pedro.angel.vd@gmail.com</p>
          </div>
          <div class="p-contact__infoItem">
            <h3 class="p-contact__infoItemTitle">Celular</h3>
            <p>979 188 529</p>
          </div>
          <div class="p-contact__infoItem">
            <h3 class="p-contact__infoItemTitle">Redes Sociales</h3>
            <div>
              <a class="p-contact__socialLink" href="#" target="_blank"
                ><fa class="icon" :icon="['fab', 'facebook']" title="facebook"
              /></a>
              <a class="p-contact__socialLink" href="#" target="_blank"
                ><fa class="icon" :icon="['fab', 'twitter']" title="twitter"
              /></a>
              <a class="p-contact__socialLink" href="#" target="_blank"
                ><fa
                  class="icon"
                  :icon="['fab', 'instagram']"
                  title="instagram"
              /></a>
              <a class="p-contact__socialLink" href="#" target="_blank"
                ><fa class="icon" :icon="['fab', 'linkedin']" title="linkedin"
              /></a>
              <a class="p-contact__socialLink" href="#" target="_blank"
                ><fa class="icon" :icon="['fab', 'github']" title="github"
              /></a>
              <a class="p-contact__socialLink" href="#" target="_blank"
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
        alert('mensaje entregado')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../scss/pages/contact.scss';
</style>
