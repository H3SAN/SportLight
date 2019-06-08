<template>
  <v-app>
    <v-layout>
        <v-flex>
      <v-layout>
          <!-- Toolbar and menu begins -->
        <v-flex xs12 sm6 offset-sm0>
          <v-navigation-drawer icon v-model="drawer" clipped app>
          </v-navigation-drawer>
          <v-toolbar color="orange" dense fixed clipped-left app>
            <v-toolbar-side-icon icon @click.stop="drawer = !drawer">
            </v-toolbar-side-icon>
            <v-layout justify-center align-center>
            <v-flex xs10>
              <v-btn flat v-on:click='home'>Football</v-btn>
              <v-btn flat v-on:click='about'>Basketball</v-btn>
              <v-btn flat v-on:click='con'>Hockey</v-btn>
              <v-btn flat v-on:click='prog'>Tennis</v-btn>
              <v-btn flat v-on:click='staff'>Rugby</v-btn>
              <v-btn flat v-on:click='faq'>Quiz</v-btn>
            </v-flex>
            </v-layout>
            <v-spacebar></v-spacebar>
          </v-toolbar>
        </v-flex>
      </v-layout>
        <!--toolbar and menu ends-->
        <!--content begins -->
         <!-- carousel section -->
      <v-layout justify-center align-center>
        <v-flex xs10>
          <v-content>
          <v-carousel>
                <v-carousel-item
                    :src="images.pic2"
                    transition="transition"
                    reverse-transition="reverseTransition"
                ></v-carousel-item>
                <v-carousel-item
                    :src="images.pic3"
                    transition="transition"
                    reverse-transition="reverseTransition"
                ></v-carousel-item>
                <v-carousel-item
                    :src="images.pic4"
                    transition="transition"
                    reverse-transition="reverseTransition"
                ></v-carousel-item>
                <v-carousel-item
                    :src="images.pic5"
                    transition="transition"
                    reverse-transition="reverseTransition"
                ></v-carousel-item><v-carousel-item
                    :src="images.pic6"
                    transition="transition"
                    reverse-transition="reverseTransition"
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
                 <v-card-media :src="images.trew" d-inline style="height:250px; width:250px; "></v-card-media>
                 <v-card-text>
                     <p>rvhzdvinuvnuidnruiofndorfvndonv;jdnrvjne;vnzio</p>
                 </v-card-text>
              </v-card>
              </v-flex>
               <v-flex>
              <v-card height="auto" style="margin-bottom:20px;">
                 <v-toolbar height="50px" color="amber">
                     <v-text><h2>Headlines: we put a very important news here</h2></v-text>
                 </v-toolbar>
                 <v-card-media :src="images.trew" d-inline style="height:250px; width:250px;"></v-card-media>
                 <v-card-text>
                     <p>rvhzdvinuvnuidnruiofndorfvndonv;jdnrvjne;vnzio</p>
                 </v-card-text>
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
    drawer: null,
    images: {
    //    pdf: require('../assets/don.txt'),
      pic1: require('../assets/one.jpeg'),
      pic2: require('../assets/two.jpeg'),
      pic3: require('../assets/three.jpeg'),
      pic4: require('../assets/four.jpeg'),
      pic5: require('../assets/five.jpeg'),
      pic6: require('../assets/champions.jpg'),
      trew: require('../assets/girl.jpeg')
    }
  }),
  methods: {
    con: function () {
      this.$router.push({path: '/contact'})
    },
    about: function () {
      this.$router.push({path: '/about'})
    },
    home: function () {
      this.$router.push({path: '/'})
    },
    faq: function () {
      this.$router.push({path: '/faq'})
    },
    staff: function () {
      this.$router.push({path: '/staff'})
    },
    prog: function () {
      this.$router.push({path: '/progam'})
    }
  },
  props: {
    source: String
  }
}

</script>
<style>

</style>
