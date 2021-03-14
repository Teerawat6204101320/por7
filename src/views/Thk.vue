<template>
  <div class="bk">
    <div class="thk">
      <h6>Thank for Buy and Watch</h6>
      <span>ขอบคุณที่ซื้อและมาเยี่ยมชม</span>
    </div>
  </div>
</template>
<style>
.bk {
  height: 100%;
  width: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgb(111, 111, 111)),
    url(https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940);
  background-position: center;
  background-size: cover;
  position: absolute;
}
.thk {
  display: grid;
  justify-content: center;
  align-content: center;
  margin: 10% auto;
}
.thk h6 {
  color: #fff;
  font-size: 30px;
}
.thk span {
  color: #fff;
  font-size: 20px;
  text-align: center;
}
@media screen and (max-width: 576px) {
  .thk h6 {
    font-size: 20px;
  }
  .thk span {
    font-size: 10px;
  }
}
</style>