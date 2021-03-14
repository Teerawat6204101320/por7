<template>
  <div class="hero">
    <div class="form-box">
      <div class="button-box">
        <h5>LOGIN</h5>
        <button class="google" @click="login()">
          <i class="fa fa-google-plus-square"></i
          ><span> Login with Google</span>
        </button>
        <button class="facebook" @click="loginfacebook()">
          <i class="fa fa-facebook-square"></i><span> Login with Facebook</span>
        </button>
        <button class="singout" @click="logout()">
          <i class="fa fa-sign-out"> </i><span>LOGOUT</span>
        </button>
      </div>
    </div>
    <div class="wel">
      <span> WELCOME TO PHONESTONE</span>
      <p>กรุณาล็อกอินเพื่อเข้าสู่ระบบ</p>
    </div>
  </div>
</template>

<script>
import firebase from "firebase/app";

export default {
  methods: {
    login() {
      const provider = new firebase.auth.GoogleAuthProvider();

      firebase
        .auth()
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
          this.$router.replace("/");
        })
        .catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          console.log(errorCode);
        });
    },
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          // Sign-out successful.
          console.log("Sign-out successful.");
          this.$router.replace("/thk"); //ทำไป index ไม่ได้
        })
        .catch((error) => {
          // An error happened.
          console.log(error);
        });
    },
    loginfacebook() {
      const provider = new firebase.auth.FacebookAuthProvider();

      firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
          /** @type {firebase.auth.OAuthCredential} */
          var credential = result.credential;

          // The signed-in user info.
          var user = result.user;
          console.log(user);
          // This gives you a Facebook Access Token. You can use it to access the Facebook API.
          var accessToken = credential.accessToken;
          console.log(accessToken);
          // ...
        })
        .catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          console.log(errorCode);
        });
    },
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Ranchers&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Fascinate&family=Ranchers&family=Redressed&display=swap");
.hero {
  height: 100%;
  width: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgb(111, 111, 111)),
    url(https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940);
  background-position: center;
  background-size: cover;
  position: absolute;
}
.form-box {
  width: 300px;
  height: 300px;
  position: relative;
  margin: 6% auto;
  background: linear-gradient(to bottom, lightcoral, pink);
  padding: 5px;
  border-radius: 5px;
}
.form-box h5 {
  display: flex;
  justify-content: center;
  align-content: center;
  font-family: "Ranchers", cursive;
  margin-top: 10px;
}
.button-box {
  width: 220px;
  margin: 15% auto;
  position: relative;
  line-height: 5px;
}
.google {
  width: 100%;
  border-radius: 10px;
  background: linear-gradient(to right, #ff105f, #ffad06);
  color: #fff;
  line-height: 2;
}
.google .fa {
  font-size: 25px;
}
span {
  font-family: "Kanit", sans-serif;
  text-transform: uppercase;
  font-weight: bold;
  padding: 0 10px;
  font-size: 13px;
}
.facebook {
  width: 100%;
  border-radius: 10px;
  background: linear-gradient(to right, #ff105f, #ffad06);
  color: #fff;
  line-height: 2;
  margin-top: 20px;
}
.singout {
  width: 45%;
  border-radius: 10px;
  background: linear-gradient(to right, #ff105f, #ffad06);
  color: #fff;
  line-height: 2;
  margin-top: 20px;
}
.wel {
  display: grid;
  justify-content: center;
  align-content: center;
}
.wel span {
  font-size: 30px;
  font-weight: bold;
  font-family: "Fascinate", cursive;
}
.wel p {
  font-size: 25px;
  font-weight: bold;
  font-family: "Kanit", sans-serif;
  text-align: center;
}
button .singout {
  position: absolute;
  left: 20px;
}
@media screen and (max-width: 576px) {
  .form-box {
    width: 250px;
    height: 300px;
    margin: 30% auto;
  }
  .button-box {
    margin: 10% auto;
  }
  .wel span {
    font-size: 15px;
  }
  .wel p {
    font-size: 10px;
  }
}
</style>