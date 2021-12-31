/* eslint-disable no-unused-vars */
<template>
  <div>
    <div class="va-table-responsive my-table">
      <table class="va-table va-table--striped">
        <thead>
          <tr>
            <th>Video Title</th>
            <th>Score</th>
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
            <!-- <td>{{ user.country }}</td> -->
            <!-- <td>
              <va-badge :text="user.status" :color="user.status" />
            </td> -->
          </tr>
        </tbody>
      </table>
    </div>
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
    };
  },

  created() {
    /* eslint-disable */

    /*
    // Retorna um array de array
 "list_videos": [q
    [
      14, 
      "Airflow for Beginners - Run Spotify ETL Job in 15 minutes!", 
      "i25ttd32-eo", 
      "https://i.ytimg.com/vi/i25ttd32-eo/maxresdefault.jpg", 
      0.6828606848631272, 
      false
    ],
      */
    // let map_array_to_obj = {
    //   id: 0,
    //   video_title: 1,
    //   video_link: 2,
    //   thumbnail: 3,
    //   score: 4,
    //   like: 5,
    // };

    let map_array = ['id', 'video_title', 'video_link', 'thumbnail', 'score', 'like'];

    function convert_to_json(value, index, array) {
      // function convert_to_json(value, index, array) {
      // console.log(value, index, array)
      let obj = {};
      for (let i in value) {
        let the_index = map_array[i];
        // console.log('i', i)
        // console.log('the_index', the_index, 'value[i]', value[i])
        obj[the_index] = value[i];
      }
      // console.log('obj', obj)
      // console.log('index', index)
      // array[index] = obj
      // obj['score'] = (Math.round(obj['score'] * 10000) / 10000) * 100
      obj['score'] = obj['score'].toFixed(4);
      return obj;
    }
    // numbers.forEach(myFunction);

    DataEng.getVideosRecomend()
      .then(result => {
        // console.log('result', result)
        let list_videos = result.data.list_videos;
        this.rows = list_videos.map(convert_to_json);
        // console.log(list_videos);
      })
      .catch(err => {
        console.error(err);
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
  width: 75%;
  margin-right: auto;
  margin-left: auto;
  margin-top: 20px;
}
</style>
