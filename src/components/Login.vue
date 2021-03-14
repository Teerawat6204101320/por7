<template>
  <div>

      <b-form  v-if="show">
        <b-form-group
          id="input-group-1"
          label="Email address:"
          label-for="input-1"
          description="We'll never share your email with anyone else."
        >
          <b-form-input
            id="input-1"
            v-model="email"
            type="email"
            placeholder="Enter email"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="name"
            placeholder="Enter name"
            required
          ></b-form-input>
        </b-form-group>
        <b-button type="submit" variant="primary" v-on:click="addData()"
          >Submit</b-button
        >
        <b-button type="reset" variant="danger">Reset</b-button>
      </b-form>
    

    <h1>Login</h1>
    <input type="button" value="Login" @click="login()" />
    <input type="button" value="Logout" @click="logout()" />
  </div>
</template>

<script>
import firebase from "firebase/app";

export default {
  methods: {
    login() {
      const provider = new firebase.auth.GoogleAuthProvider();

      firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
          /** @type {firebase.auth.OAuthCredential} */
          const credential = result.credential;

          // This gives you a Google Access Token. You can use it to access the Google API.
          const token = credential.accessToken;
          console.log(token);
          // The signed-in user info.
          const user = result.user;
          console.log(user);
          // ...
          this.$router.replace('/')
        })
        .catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          console.log(errorCode);
        });
    },
    logout() {
      firebase.auth().signOut().then(() => {
          // Sign-out successful.
          console.log('Sign-out successful.')
          this.$router.replace('/index') //ทำไป index ไม่ได้ 
        })
        .catch((error) => {
          // An error happened.
          console.log(error)
        })
    },
  },
};
</script>