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
              <v-list-tile v-on:click='ftransfer'>
              <v-list-tile-action>
                <v-icon>receipt</v-icon>
              </v-list-tile-action>
               <v-list-content>
                       <v-list-tile-title>Transfers</v-list-tile-title>
                   </v-list-content>
                </v-list-tile>
              <!-- Fixtures Section begins -->
                <v-list-group  no-action value="true">
                   <template v-slot:activator>
          <v-list-tile>
             <v-icon>account_circle</v-icon>
            <v-list-tile-title>Fixtures</v-list-tile-title>
          </v-list-tile>
        </template>
        <v-list-tile v-on:click='fuefa'>
              <v-list-tile-action>
                <v-icon>receipt</v-icon>
              </v-list-tile-action>
               <v-list-content>
                       <v-list-tile-title>UEFA Champions</v-list-tile-title>
                   </v-list-content>
                </v-list-tile>
                 <v-list-tile v-on:click='fprleague'>
              <v-list-tile-action>
                <v-icon>receipt</v-icon>
              </v-list-tile-action>
               <v-list-content>
                       <v-list-tile-title>Premier League</v-list-tile-title>
                   </v-list-content>
                </v-list-tile>
                 <v-list-tile v-on:click='flaliga'>
              <v-list-tile-action>
                <v-icon>receipt</v-icon>
              </v-list-tile-action>
               <v-list-content>
                       <v-list-tile-title>La Liga</v-list-tile-title>
                   </v-list-content>
                </v-list-tile>
                <v-list-tile v-on:click='fseriea'>
              <v-list-tile-action>
                <v-icon>receipt</v-icon>
              </v-list-tile-action>
               <v-list-content>
                       <v-list-tile-title>Serie A</v-list-tile-title>
                   </v-list-content>
                </v-list-tile>
                 <v-list-tile v-on:click='fafcon'>
              <v-list-tile-action>
                <v-icon>receipt</v-icon>
              </v-list-tile-action>
               <v-list-content>
                       <v-list-tile-title>AFCON</v-list-tile-title>
                   </v-list-content>
                </v-list-tile>
               </v-list-group>
               <!-- Fixtures Section ends-->
               <!-- Results Section Begins -->
                <v-list-group  no-action value="true">
                   <template v-slot:activator>
          <v-list-tile>
             <v-icon>account_circle</v-icon>
            <v-list-tile-title>Results</v-list-tile-title>
          </v-list-tile>
        </template>
        <v-list-tile v-on:click='ruefa'>
              <v-list-tile-action>
                <v-icon>receipt</v-icon>
              </v-list-tile-action>
               <v-list-content>
                       <v-list-tile-title>UEFA Champions</v-list-tile-title>
                   </v-list-content>
                </v-list-tile>
                 <v-list-tile v-on:click='rprleague'>
              <v-list-tile-action>
                <v-icon>receipt</v-icon>
              </v-list-tile-action>
               <v-list-content>
                       <v-list-tile-title>Premier League</v-list-tile-title>
                   </v-list-content>
                </v-list-tile>
                 <v-list-tile v-on:click='rlaliga'>
              <v-list-tile-action>
                <v-icon>receipt</v-icon>
              </v-list-tile-action>
               <v-list-content>
                       <v-list-tile-title>La Liga</v-list-tile-title>
                   </v-list-content>
                </v-list-tile>
                <v-list-tile v-on:click='rseriea'>
              <v-list-tile-action>
                <v-icon>receipt</v-icon>
              </v-list-tile-action>
               <v-list-content>
                       <v-list-tile-title>Serie A</v-list-tile-title>
                   </v-list-content>
                </v-list-tile>
                 <v-list-tile v-on:click='rafcon'>
              <v-list-tile-action>
                <v-icon>receipt</v-icon>
              </v-list-tile-action>
               <v-list-content>
                       <v-list-tile-title>AFCON</v-list-tile-title>
                   </v-list-content>
                </v-list-tile>
               </v-list-group>
               <!-- Results Section Ends -->
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
              <v-card height="750px" width="700px" color="amber">
              <v-container>
              <v-card-text> Yesterday</v-card-text>
              <v-card color="white">
               <v-card-text>Arsenal - Bayern</v-card-text>
               <v-divider></v-divider>
               <v-card-text>Manchester UTD - Barcelona</v-card-text>
                <v-divider></v-divider>
               <v-card-text>Chelsea - R.Madrid</v-card-text>
                <v-divider></v-divider>
              </v-card>
              <v-card-text> Today</v-card-text>
              <v-card color="white">
               <v-card-text>Arsenal - Bayern</v-card-text>
               <v-divider></v-divider>
              </v-card>
              <v-card-text> Tomorrow</v-card-text>
              <v-card color="white">
               <v-card-text>Arsenal - Bayern</v-card-text>
               <v-divider></v-divider>
               <v-card-text>Manchester UTD - Barcelona</v-card-text>
                <v-divider></v-divider>
              </v-card>
              <v-card-text> June 3rd</v-card-text>
              <v-card color="white">
               <v-card-text>Arsenal - Bayern</v-card-text>
               <v-divider></v-divider>
               <v-card-text>Manchester UTD - Barcelona</v-card-text>
                <v-divider></v-divider>
              </v-card>
              </v-container>
              </v-card>
              </v-flex>
              <v-flex xs10 offset-md1>
              <v-card right height="auto" style="margin-right:30px" color="amber accent-1">
                 <!-- Headline cards begin -->
             <v-flex>
              <v-card height="auto" style="margin-bottom:20px;">
                 <v-card-text>
                     <p>Group A</p>
                     <p>liverpool</p>
                     <p>Tottenham</p>
                     <p>Chelsea</p>
                     <p>R.Madrid</p>
                 </v-card-text>
              </v-card>
              </v-flex>
              <v-flex>
              <v-card height="auto" style="margin-bottom:20px;">
                 <v-card-text>
                     <p>Group B</p>
                     <p>Dortmund</p>
                     <p>Man UTD</p>
                     <p>Bayern</p>
                     <p>BATH</p>
                 </v-card-text>
              </v-card>
              </v-flex>
              <v-flex>
              <v-card height="auto" style="margin-bottom:20px;">
                 <v-card-text>
                     <p>Group C</p>
                     <p>Dortmund</p>
                     <p>Man UTD</p>
                     <p>Bayern</p>
                     <p>BATH</p>
                 </v-card-text>
              </v-card>
              </v-flex>
              <v-flex>
              <v-card height="auto" style="margin-bottom:20px;">
                 <v-card-text>
                      <p>Group D</p>
                     <p>Dortmund</p>
                     <p>Man UTD</p>
                     <p>Bayern</p>
                     <p>BATH</p>
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
    },
    ftransfer: function () {
      this.$router.push({path: '/ftransfer'})
    },
    fuefa: function () {
      this.$router.push({path: '/fuefa'})
    },
    flaliga: function () {
      this.$router.push({path: '/flaliga'})
    },
    fprleague: function () {
      this.$router.push({path: '/fprleague'})
    },
    fafcon: function () {
      this.$router.push({path: '/fafcon'})
    },
    fseriea: function () {
      this.$router.push({path: '/fseriea'})
    },
    ruefa: function () {
      this.$router.push({path: '/ruefa'})
    },
    rlaliga: function () {
      this.$router.push({path: '/rlaliga'})
    },
    rprleague: function () {
      this.$router.push({path: '/rprleague'})
    },
    rafcon: function () {
      this.$router.push({path: '/rafcon'})
    },
    rseriea: function () {
      this.$router.push({path: '/rseriea'})
    }
  },
  props: {
    source: String
  }
}

</script>
<style>

</style>
