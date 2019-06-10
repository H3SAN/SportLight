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
    <v-container fluid fill-height>
        <v-layout align-center justify-center>
            <v-flex xs12 sm8 md4>
        <v-stepper v-model="e1" class="transparent">
    <v-stepper-header>
      <v-stepper-step :complete="e1 > 1" step="1">step 1</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 2" step="2">step 2</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step step="3">step 3</v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <v-card
          class="mb-5"
          color="transparent"
          height="200px"
        >
        <v-card-text color="transparent">
          <v-form>
            <v-text-field prepend-icon="person"
                name="e-mail"
                label="E-mail"
                v-bind:rules="emailRules"
                v-model="email"
                required>
              </v-text-field>
               <v-text-field id="password"
                prepend-icon="lock"
                name="password"
                label="password"
                v-model="password"
                v-bind:rules="passwordRules"
                v-bind:type="'password'">
             </v-text-field>
           </v-form>
          </v-card-text>
        </v-card>

        <v-btn
          color="primary"
          @click="e1 = 2"
        >
          Continue
        </v-btn>

        <v-btn flat
        @click="back">Cancel</v-btn>
      </v-stepper-content>

      <v-stepper-content step="2">
        <v-card
          class="mb-5"
          color="transparent"
          height="200px"
        >
        <v-card-text color="black">
          <v-form>
            <v-text-field prepend-icon="book"
              name="phone"
              label="Account no"
              v-bind:rules="phoneRules"
              v-model="phone"
              required>
            </v-text-field>
            <v-text-field id="password"
              prepend-icon="lock"
              name="password"
              label="password"
              v-model="password"
              v-bind:rules="passwordRules"
              v-bind:type="'password'">
            </v-text-field>
          </v-form>
        </v-card-text>
      </v-card>

        <v-btn
          color="primary"
          @click="e1 = 3"
        >
          Continue
        </v-btn>

        <v-btn flat
        color="primary"
          @click="e1 = 1">Back</v-btn>
      </v-stepper-content>

      <v-stepper-content step="3">
        <v-card>
          <v-card-text color="black">
            <v-form>
             <v-text-field prepend-icon="phone"
              name="phone"
              label="phone"
              v-bind:rules="phoneRules"
              v-model="phone"
              required>
            </v-text-field>
            <v-text-field id="password"
             prepend-icon="lock"
              name="password"
              label="password"
              v-model="password"
              v-bind:rules="passwordRules"
              v-bind:type="'password'">
            </v-text-field>
           </v-form>
         </v-card-text>
        </v-card>

        <v-btn
          color="primary"
          @click="done"
        >
          Signup
        </v-btn>

        <v-btn flat
        color="primary"
          @click="e1 = 2">Back</v-btn>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
            </v-flex>
        </v-layout>
    </v-container>
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
export default {
  data () {
    return {
      e1: 0,
      images: {
        sm: require('../assets/girl.jpeg')
      }
    }
  },
  methods: {
    back: function () {
      this.$router.push({ path: '/' })
    }
  }
}
</script>

<style>
#but {
  margin-top: 70px;
  margin-left: 120px;
}
</style>
