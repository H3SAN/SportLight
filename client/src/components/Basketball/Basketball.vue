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
                <v-btn flat v-on:click='home'>Home</v-btn>
                <v-btn flat v-on:click='foot'>Football</v-btn>
                <v-btn flat v-on:click='bask'>Basketball</v-btn>
                <v-btn flat v-on:click='hoc'>Hockey</v-btn>
                <v-btn flat v-on:click='ten'>Tennis</v-btn>
                <v-btn flat v-on:click='rug'>Rugby</v-btn>
                <v-btn flat v-on:click='qui'>Quiz</v-btn>
            </v-flex>
            </v-layout>
            <v-spacebar></v-spacebar>
          </v-toolbar>
          <v-navigation-drawer icon v-model="drawer" clipped fixed app>
            <v-list>
              <v-list-tile v-on:click='qui'>
              <v-list-tile-action>
                <v-icon>note</v-icon>
              </v-list-tile-action>
               <v-list-content>
                       <v-list-tile-title>Featured</v-list-tile-title>
                   </v-list-content>
               </v-list-tile>
                <v-list-tile v-on:click='qui'>
              <v-list-tile-action>
                <v-icon>note</v-icon>
              </v-list-tile-action>
               <v-list-content>
                       <v-list-tile-title>Fixtures</v-list-tile-title>
                   </v-list-content>
               </v-list-tile>
                <v-list-tile v-on:click='qui'>
              <v-list-tile-action>
                <v-icon>note</v-icon>
              </v-list-tile-action>
               <v-list-content>
                       <v-list-tile-title>Results</v-list-tile-title>
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
        <v-content>
          <v-layout justify-center>
             <!-- Main bar -->
            <v-flex xs10 offset-md1>
              <v-card height="auto" width="750px" color="amber">
                <v-container>
                   <!-- Headline cards begin -->
                    <v-flex>
              <v-card height="auto" style="margin-bottom:20px;">
                <v-layout row>
                 <v-card-media :src="photos.pic2" d-inline style="padding-left: 40px;height:150px; width:150px;"></v-card-media>
                 <v-card-text>
                     <p>A file, in the computer world, is a self-contained piece of information available to the operating system and any number of individual programs.

A computer file can be thought of much like a traditional file that one would find in an office's file cabinet. Just like an office file, information in a computer file could consist of basically anything.
More About Computer Files
...<br><a>Read More</a></p>
                 </v-card-text>
                 </v-layout>
              </v-card>
              </v-flex>
               <v-flex>
              <v-card height="auto" style="margin-bottom:20px;">
                <v-layout row>
                 <v-card-media :src="photos.pic1" d-inline style="padding-left: 40px;height:150px; width:150px;"></v-card-media>
                 <v-card-text>
                     <p>A file, in the computer world, is a self-contained piece of information available to the operating system and any number of individual programs.

A computer file can be thought of much like a traditional file that one would find in an office's file cabinet. Just like an office file, information in a computer file could consist of basically anything.
More About Computer Files
...<br><a>Read More</a></p>
                 </v-card-text>
                 </v-layout>
              </v-card>
              </v-flex>
               <v-flex>
              <v-card height="auto" style="margin-bottom:20px;">
                <v-layout row>
                 <v-card-media :src="photos.pic2" d-inline style="padding-left: 40px;height:150px; width:150px;"></v-card-media>
                 <v-card-text>
                     <p>A file, in the computer world, is a self-contained piece of information available to the operating system and any number of individual programs.

A computer file can be thought of much like a traditional file that one would find in an office's file cabinet. Just like an office file, information in a computer file could consist of basically anything.
More About Computer Files
...<br><a>Read More</a></p>
                 </v-card-text>
                 </v-layout>
              </v-card>
              </v-flex>
                   <!-- Headline cards end -->
                </v-container>
              </v-card>
            </v-flex>
            <!-- Side bar -->
            <v-flex  xs5 offset-md1>
              <v-card right height="auto" style="margin-right:30px" color="amber accent-1">
                 <!-- Headline cards begin -->
             <v-flex>
              <v-card height="auto" style="margin-bottom:20px;">
                 <v-card-text>
                     <p>Champions league</p>
                     <p>liverpool 2 - 0 Tottenham</p>
                 </v-card-text>
              </v-card>
              </v-flex>
              <v-flex>
              <v-card height="auto" style="margin-bottom:20px;">
                 <v-card-text>
                     <p>club news and update shown here</p>
                 </v-card-text>
              </v-card>
              </v-flex>
              <v-flex>
              <v-card height="auto" style="margin-bottom:20px;">
                 <v-card-text>
                     <p>Hazard signed to Real Madrid</p>
                     <p>#88.5M</p>
                 </v-card-text>
              </v-card>
              </v-flex>
              <v-flex>
              <v-card height="auto" style="margin-bottom:20px;">
                 <v-card-text>
                     <p>club news and update shown here</p>
                 </v-card-text>
              </v-card>
              </v-flex>
              <v-flex>
              <v-card height="auto" style="margin-bottom:20px;">
                 <v-card-text>
                     <p>club news and update shown here</p>
                 </v-card-text>
              </v-card>
              </v-flex>
              <!-- Headline cards end -->
              </v-card>
            </v-flex>
             </v-layout>
        </v-content>
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
    photos:
    {
      pic1: require('../../assets/girl.jpeg'),
      pic2: require('../../assets/boy.jpeg')
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
