<template>
  <section>
    <div class="row ml-1 mr-1">
      <div class="col-12 col-md-8 offset-md-2">
        <h2 class="h1-responsive font-weight-bold my-4">Contact us</h2>
        <div class="row">
          <div class="col-md-6">
            <p class="ml-1 mr-1 mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
            a matter of hours to help you.</p>
          </div>
          <div class="col-12 col-md-6">
            <form
              id="contact-form"
              name="contact-form"
              method="POST">
              <div class="md-form">
                <textarea
                  type="text"
                  id="message"
                  name="message"
                  rows="2"
                  class="form-control md-textarea"
                  placeholder="Type your question here"></textarea>
              </div>
              <div class="text-right pt-2 pb-2">
                <button
                  class="btn btn-primary"
                  @click.prevent="sendMessage()">Send</button>
              </div>
            </form>
          </div>
        </div>
      <!-- .row-->
      </div>
    </div>
    <!-- .row-->
  </section>
</template>

<script>
export default {
  name: 'DentistSupport',
  methods: {
    sendMessage () {
      alert('Your message was send to support. Thank you!')
    }
  }
}
</script>
