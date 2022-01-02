<template>
  <div>
    <h1>Google Data Studio</h1>
    <div class="dashboard">
      <iframe
        width="700"
        height="500"
        src="https://datastudio.google.com/embed/reporting/86d2fcd5-2058-4312-8993-9cd2e74240f0/page/2fJiC"
        frameborder="0"
        style="border: 0"
        allowfullscreen
      >
      </iframe>
    </div>
  </div>
</template>

<script>
// import VueTagCloud from 'vue-tag-cloud';

export default {
  //   components: {
  //     VueTagCloud,
  //   },

  data() {
    return {
      tagData: ['amarelo azul verde amarelo azul verde', 'amarelo', 'azul', 'verde'],
    };
  },
};
</script>

<style>
iframe {
  margin-top: 30px;
}
</style>
