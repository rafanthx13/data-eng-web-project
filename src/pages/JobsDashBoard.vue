<template>
  <div>
    <div class="dashboard">
      <iframe
        width="600"
        height="450"
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
.dashboard {
}

.word-cloud {
}
</style>
