<template>
  <v-app>
    <v-layout>
        <v-flex>
      <v-layout>
          <!-- Toolbar and menu begins -->
        <v-flex xs12 sm6 offset-sm0>
          <v-toolbar color="orange" dense fixed clipped-left app>
            <v-toolbar-side-icon icon @click.stop="drawer = !drawer">
            </v-toolbar-side-icon>
            <v-layout justify-center align-center>
            <v-flex xs10>
              <v-tabs left color="transparent" text>
                <v-tabs-slider color="white"></v-tabs-slider>
                <v-tab v-on:click='home'>Home</v-tab>
                <v-tab v-on:click='foot'>Football</v-tab>
                <v-tab v-on:click='bask'>Basketball</v-tab>
                <v-tab v-on:click='hoc'>Hockey</v-tab>
                <v-tab v-on:click='ten'>Tennis</v-tab>
                <v-tab v-on:click='rug'>Rugby</v-tab>
                <v-tab v-on:click='qui'>Quiz</v-tab>
              </v-tabs>
            </v-flex>
            </v-layout>
            <v-spacebar></v-spacebar>
          </v-toolbar>
          <v-navigation-drawer icon v-model="drawer" clipped fixed app>
            <v-list>
              <v-list-tile>
              <v-list-tile-action>
                <v-icon>note</v-icon>
              </v-list-tile-action>
               <v-list-content>
                       <v-list-tile-title>Featured</v-list-tile-title>
                   </v-list-content>
               </v-list-tile>
               <v-divider horizontal></v-divider>
               <v-list-tile>
              <v-list-tile-action>
                <v-icon>person_add</v-icon>
              </v-list-tile-action>
               <v-list-content>
                       <v-list-tile-title>Login</v-list-tile-title>
                   </v-list-content>
               </v-list-tile>
               <v-list-tile>
              <v-list-tile-action>
                <v-icon>settings</v-icon>
              </v-list-tile-action>
               <v-list-content>
                       <v-list-tile-title>Settings</v-list-tile-title>
                   </v-list-content>
               </v-list-tile>
            </v-list>
          </v-navigation-drawer>
        </v-flex>
      </v-layout>
        <!--toolbar and menu ends-->
        <!--content begins -->
         <!-- carousel section -->
      <v-layout justify-center align-center>
        <v-flex xs10>
          <v-content>
          <v-carousel hide-controls>
                <v-carousel-item
                 v-for="(image, i) in images"
                    :key="i"
                    :src="image.pic"
                ></v-carousel-item>
            </v-carousel>
          </v-content>
        </v-flex>
      </v-layout>
       <!-- carousel section ends -->
        <v-layout justify-center align-center>
         <v-card
         color="amber darken-4"
         auto-height width="1300px"
         >
         <v-container fluid grid-list-sm>
       <v-layout justify-center align-center>
           <v-flex xs10>
               <!-- Headline cards begin -->
             <v-flex>
              <v-card height="auto" style="margin-bottom:20px;">
                 <v-toolbar height="50px" color="amber">
                     <v-text><h2>Headlines: we put a very important news here</h2></v-text>
                 </v-toolbar>
                <v-layout row>
                 <v-card-media :src="photos.trew" d-inline style="padding-left: 40px;height:250px; width:250px;"></v-card-media>
                 <v-card-text>
                     <p>A file, in the computer world, is a self-contained piece of information available to the operating system and any number of individual programs.

A computer file can be thought of much like a traditional file that one would find in an office's file cabinet. Just like an office file, information in a computer file could consist of basically anything.
More About Computer Files

Whatever program uses an individual file is responsible for understanding its contents.

Similar types of files are said to be of a common "format." In most cases, the easiest way to determine a file's format is to look at the file's extension.
Each individual file in Windows will also have a file attribute which sets a condition to the specific file...<br><a>Read More</a></p>
                 </v-card-text>
                 </v-layout>
              </v-card>
              </v-flex>
               <v-flex>
              <v-card d-inline height="auto" style="margin-bottom:20px;">
                 <v-toolbar height="50px" color="amber">
                     <v-text><h2>Headlines: we put a very important news here</h2></v-text>
                 </v-toolbar>
                 <v-layout row>
                 <v-card-media :src="photos.trew" d-inline style="padding-left: 40px;height:250px; width:250px;"></v-card-media>
                 <v-card-text :src="photos.trew">
                     <p>rvhzdvinuvnuidnruiofndorfvndonv;jdnrvjne;vnzio</p>
                 </v-card-text>
                 </v-layout>
              </v-card>
              </v-flex>
              <!-- Headline cards end -->
             </v-flex>
       </v-layout>
         </v-container>
         </v-card>
         </v-layout>
         <!-- Content Ends -->
        <!-- Footer begins -->
      <v-footer color="orange" dense fixed clipped-left app>
          &copy;<v-text>copyright of sportlight 2019</v-text>
      </v-footer>
        <!-- Footer Ends -->
        </v-flex>
    </v-layout>
  </v-app>
</template>

<script>
export default{
  data: () => ({
    images: [
      {
        //  pdf: require('../assets/don.txt'),
        pic: require('../assets/one.jpeg')
      },
      {
        pic: require('../assets/two.jpeg')
      },
      {
        pic: require('../assets/three.jpeg')
      },
      {
        pic: require('../assets/four.jpeg')
      },
      {
        pic: require('../assets/five.jpeg')
      },
      {
        pic: require('../assets/champions.jpg')
      }
    ],
    photos:
    {
      trew: require('../assets/girl.jpeg')
    },
    
    drawer: null
  }),
  methods: {
    home: function () {
      this.$router.push({path: '/'})
    },
    foot: function () {
      this.$router.push({path: '/football'})
    },
    bask: function () {
      this.$router.push({path: '/basketball'})
    },
    hoc: function () {
      this.$router.push({path: '/hockey'})
    },
    ten: function () {
      this.$router.push({path: '/tennis'})
    },
    rug: function () {
      this.$router.push({path: '/rugby'})
    },
    qui: function () {
      this.$router.push({path: '/quiz'})
    }
  },
  props: {
    source: String
  }
}

</script>
<style>

</style>
