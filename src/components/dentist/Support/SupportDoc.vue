<template>
  <section >
    <div class="row">
      <div class="col-12 col-md-8 offset-md-2">
        <h4 class="pl-3 pt-2">PDF forms</h4>
        <ul class="list-group">
          <li class="list-group-item">
            <a
              href=""
              class="dark-link"
              @click.prevent="downloadDoc()">
            Cras justo odio.pdf
            </a>
          </li>
          <li class="list-group-item">
            <a
              href=""
              class="dark-link"
              @click.prevent="downloadDoc()">
            Dapibus ac facilisis in.pdf
            </a>
          </li>
          <li class="list-group-item">
            <a
              href=""
              class="dark-link"
              @click.prevent="downloadDoc()">
            Morbi leo risus.pdf
            </a>
          </li>
          <li class="list-group-item">
            <a
              href=""
              class="dark-link"
              @click.prevent="downloadDoc()">
            Porta ac consectetur ac.pdf
            </a>
          </li>
          <li class="list-group-item">
            <a
              href=""
              class="dark-link"
              @click.prevent="downloadDoc()">
            Vestibulum at eros.pdf
            </a>
          </li>
        </ul>
        </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'DentistSupportDoc',
  methods: {
    downloadDoc () {
      alert('downloadDoc here')
    }
  }
}
</script>
