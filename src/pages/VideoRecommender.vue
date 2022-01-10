/* eslint-disable no-unused-vars */
<template>
  <div>
    <h1 class="pt-4">Recomendação de vídeos sobre Engenharia de Dados</h1>
    <va-inner-loading :loading="loading">
      <div class="va-table-responsive my-table">
        <table class="va-table va-table--striped">
          <thead>
            <tr>
              <th style="width: 65%">Título do Vídeo</th>
              <th>Pontuação</th>
              <th>Data do Registro</th>
              <th>Data de Upload</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="video in rows" :key="video.id">
              <td>
                <a :href="'https://www.youtube.com/watch?v=' + video.video_link">
                  {{ video.video_title }}
                </a>
              </td>
              <td>{{ video.score }}</td>
              <td>{{ video.created_at }}</td>
              <td>{{ video.upload_date }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </va-inner-loading>
    <div v-if="!this.rows">
      <span>No Data</span>
    </div>
  </div>
</template>

<script>
import DataEng from '@/api/DataEng';

export default {
  data() {
    return {
      rows: [],
      loading: false,
    };
  },

  created() {
    this.loading = true;

    /* eslint-disable */
    /* "list_videos": [
    [
      14, 
      "Airflow for Beginners - Run Spotify ETL Job in 15 minutes!", 
      "i25ttd32-eo", 
      "https://i.ytimg.com/vi/i25ttd32-eo/maxresdefault.jpg", 
      0.6828606848631272, 
      false,
      "Mon, 10 Jan 2022 22:35:46 GMT",
        "2021-07-16"
    ], */

    let map_array = ['id', 'video_title', 'video_link',
     'thumbnail', 'score', 'like','created_at', 'upload_date'];

    function convert_to_json(value, index, array) {
      let obj = {};
      for (let i in value) {
        let the_index = map_array[i];
        obj[the_index] = value[i];
      }
      obj['created_at'] = obj['created_at'] != '' ? obj['created_at'].slice(5,-13) : obj['created_at']
      obj['score'] = obj['score'].toFixed(4);
      return obj;
    }

    DataEng.getVideosRecomend()
      .then(result => {
        let list_videos = result.data.list_videos;
        this.rows = list_videos.map(convert_to_json);
        this.loading = false
      })
      .catch(err => {
        console.error(err);
        this.loading = false
        this.$vaToast.init({
          message: 'Error in Seach Videos',
          color: 'danger',
        });
      });
  },
};
</script>

<style scoped>

.va-table-responsive {
  overflow: auto;
}

.my-table {
  width: 80%;
  margin-right: auto;
  margin-left: auto;
  margin-top: 20px;
}
</style>
