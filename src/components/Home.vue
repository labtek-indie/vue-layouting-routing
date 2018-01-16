<template>
    <v-container> 
        <v-layout row wrap>
            <v-flex xs12 sm6 class="text-sm-right text-xs-center">
                <v-btn large router to="/projects" class="primary">
                    Explore Projects
                </v-btn>
            </v-flex>
            <v-flex xs12 sm6 class="text-sm-left text-xs-center">
                <v-btn large router to="/projects/newproject" class="primary">
                    Create New Projects
                </v-btn>
            </v-flex>
        </v-layout>
        
        <v-layout row wrap class="mt-2">
            <v-flex>
                <v-carousel>
                    <v-carousel-item
                        v-for="project in projects"
                        :src="project.imageurl"
                        :key="project.id"
                        transition="fade"
                        reverseTransition="fade"
                        >
                    <div class="title">
                        {{project.title}}
                    </div>
                    </v-carousel-item>                 
                </v-carousel>
            </v-flex>
        </v-layout>

        <v-layout row wrap class="mt-2">
            <v-flex class="text-xs-center">
                <p>
                    Join Out Awesome Projects!
                </p>
            </v-flex>
        </v-layout>

    </v-container>
</template>

<script>
/* eslint-disable */
export default {
  data(){
      return{
          projects:[
              {imageurl: 'https://lh3.googleusercontent.com/p0vVmW5KNV-PuPyN8rFIY7vVh41L9b0h8gF_xj0BkeSUQPJagDDAtBdmqYqHyDxcr48Uz2gQB67Nn5BXXARPr7KspcAzjUvvn8rZ94de_sAKFkCxcpO4hBdqeynIpWDv21K4ug0f7JB0pg4-eGyPoDuhm47Vc9b7eNpZWvm2uBgZ0Qs5lnVeYyL5pbiHKrivtriWvRhHqXfD_5Vsc-asLTdb4BL1gPw47MCjnsKyX74r-mpbU0iNVFE0xoDTsJTJb8HwhHBPCBlB2fZfe0ZLRWhNmvR2bkgBw_AQ_tCUCQ8fVpQtsofldrhBSi0-p8kPC_b45hz8Or_ZGgCJ_bQXpULj5CUzan8yZOUGVLuwbFFREz84bO0KDmvV-_DffT6g4Ir0nAZbFxvXxr4t7Vpp1Z5cFoa1gZXi5kdnl922e-ENUtE4yudSPD_Ovy3DIG8EO1w703CujyT-mX4imwHBAunxUwQuI0Ymn627b9dqB1S6Ko5SZ0EtXDdbqbp0M0uIYJX_hzBOdpcINgIxiV05cqZ-BTP3qvOzA07uDJoSPuKCMTIknmMvazNmFECX6cymk2x4Fj1_VHssG9G0zolyXKp7wK7huMFGM5ycicnJSUhH0JmtSpb8RnaXggBO6Fk24ZowPO0X3BWDteQ0D5Jkay-mHzMUzq0B2A=w1397-h933-no', 
                id: '1', title: 'Zurich VR'},
              {imageurl: 'https://lh3.googleusercontent.com/bo0mZ99o8SMv-1Co2Ev98c1ehaqV4Qs4ZCz-bLjWdK5YdSb42pKZ4GhLus7yeNMbfb-qtllj1lBrivm3XGMDrv1gVR3BFKl9TLbACtmN9NK1kV1wScWpxigN7ij6a43anG49m5aGcLza2Qerbsob3ME0ZY8AVPTNS4flBXTIODAKHvoDNdORFk9d4aasNuvmGiDx4yNS74bc_9UJF8odiusjU9_92M2FCF2hFgZYwoT5xSP6LGuDz2JUW-9bH1Dc8HJayiDEBSz-RJflVxx-DAyf0YXBepJz4TIR7yZq9Z2xhTrjQhieQ4RLD6ybbYvzY8QaC7PhRQcLx0naLZQGq5D3usYQL8b-hVaBfijqCwtfPM_53Ponudx6aB0W1RQljDdo9UhU3Zr7TT2jvY1DSKucOaGJVq7c5Web9eT_GObuwsLphyWq-oL-7OKot0znYOmFR4pjJoK0sKLn53avcbJUwC2CNuf5c7G2qIBbhjfqz6HDDch9pLx91l6rjD8yZbQ3vR6QlCZNVozS1lCWrXFRlcYuuSFmsLqq5iW5zMnpKByVMO2ySfF2ytWC6BVw9MzmmesurUjGMmI7yQlxBue3UPsbnBX2uk4lg0ZH-nzSYv2vIUuKRmUlIhJCSAxdQip6T7X4OBHTx-O0IGbfLDu5oB2F9RWX-w=w1399-h933-no', 
                id: '2', title: 'Venice Art Biennale'}
          ]
      }
  }
}
</script>

<style scoped >
    .title{
        color: white;
        position: absolute;
        bottom: 10%;
        background-color: rgba(0, 0, 0, 0.5);
        font-size: 2em;
        padding: 30px;
    }
</style>