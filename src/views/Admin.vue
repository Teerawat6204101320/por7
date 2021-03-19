<template>
  <div class="login">
    <div class="login-box">
      <h6>LOGIN FOR ADMIN</h6>
      <form action="">
        <div class="textbox">
          <i class="fa fa-users"></i>
          <input type="text" name=" " id="" placeholder="name" required />
        </div>
        <div class="textbox">
          <i class="fa fa-key"></i>
          <input type="password" name=" " id="" placeholder="****" required />
        </div>
        <div class="btn">
          <a href="/cart" @click="sigin()"
            ><input type="submit" value="Sign in"
          /></a>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    sigin() {
      this.$router.replace("/result");
    }
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Ranchers&display=swap");
.login {
  background-image: url(https://images.pexels.com/photos/583846/pexels-photo-583846.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940);
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  position: absolute;
}
.login-box {
  display: grid;
  justify-content: center;
  align-content: center;
  margin: 5% auto;
  background: linear-gradient(to bottom, lightcoral, pink);
  width: 380px;
  height: 400px;
  border-radius: 10px;
}
.login-box h6 {
  float: left;
  font-size: 15px;
  border-bottom: 2px solid;
  margin-bottom: 40px;
  padding: 13px 0;
  font-family: "Ranchers", cursive;
}
.textbox {
  width: 100%;
  overflow: hidden;
  font-size: 15px;
  padding: 8px 0;
  margin: 8px 0;
  border-bottom: 1px solid;
}
.textbox i {
  width: 26px;
  float: left;
  text-align: center;
}
.textbox input {
  border: none;
  outline: none;
  background: none;
  color: #fff;
  font-size: 15px;
  width: 150px;
  float: left;
  margin: 0 10px;
}
.btn input {
  width: 150%;
  background: none;
  border: 2px solid #fff;
  color: black;
  padding: 2px;
  font-size: 18px;
  cursor: pointer;
  margin: 10px 0;
  font-family: "Ranchers", cursive;
}
.btn input:hover {
  color: blue;
}
@media screen and (max-width: 576px) {
  .login-box {
    margin: 30% auto;
    width: 250px;
    height: 300px;
  }
}
</style>
