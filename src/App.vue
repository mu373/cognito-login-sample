<template>
  <div>
      <div>
          Cognito User Pools sample with external IDP
      </div>
      <div>
          <a id="signInButton" href="javascript:void(0)" @click="userSignIn()" v-if="!isSignedIn" title="Sign in">Sign In / Sign Up</a>
      </div>
      <div>
          <a id="signOutButton" href="javascript:void(0)" @click="userSignOut()" v-if="isSignedIn"  title="Sign Out">Sign Out</a>
      </div>
      <div><pre id="sessionInfo">{{sessionData}}</pre></div>
  </div>

</template>

<script>

import Amplify from 'aws-amplify';
import { Auth } from 'aws-amplify';
import amplifyConfig from './amplifyConfig.js';

Amplify.configure(amplifyConfig);

export default {
  name: 'App',
  components: {
  },

  data() {
    return {
      isSignedIn: false,
      sessionData: '',
    };
  },

  mounted() {
    this.getSessionData()
  },

  methods: {

    userSignIn() {
      Auth.federatedSignIn();
    },

    userSignOut() {
      Auth.signOut();
    },

    getSessionData() {
      Auth.currentSession()
        .then(session => {
            this.sessionData = session;
            this.isSignedIn = true;
            console.log(session);
        }).catch(e => {
            console.log(e);
        })
    }

  }
}

</script>

<style>
#app {
  font-family: sans-serif;
}
</style>
