<template>
  <div>
    <div class="va-table-responsive">
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
            <td>{{ user.email }}</td>
            <td>{{ user.country }}</td>
            <td>
              <va-badge :text="user.status" :color="user.status" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-if="this.rows">
      <span>No Data</span>
    </div>
  </div>
</template>

<script>
import DataEng from "../../api/DataEng";

export default {
  data() {
    return {
      rows: [],
    };
  },

  created() {
    /*
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
    let map_array_to_obj = {
      id: 0,
      video_title: 1,
      video_link: 2,
      thumbnail: 3,
      score: 4,
      like: 5,
    };
    DataEng.getVideos()
      .then((result) => {
        console.log(result);
        this.rows = result.data.list_videos.map((el) => {
          let obj = {};
          for (let key of map_array_to_obj) {
            obj[key] = el[ map_array_to_obj[key] ];
          }
          return obj;
        });
      })
      .catch((err) => {
        console.error(err);
        this.$vaToast.init({
          message: "Error in Seach Videos",
          color: "danger",
        });
      });
  },
};
</script>

<style lang="scss" scoped>
.va-table-responsive {
  overflow: auto;
}
</style>
