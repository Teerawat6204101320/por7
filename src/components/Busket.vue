<template>
  <div class="basket">
    <div class="youcart"><h5>ตะกร้าของคุณ</h5></div>
    <div class="card-product">
      <table>
        <tr>
          <th>IMAGE</th>
          <th>NAME</th>
          <th>QUANTITY</th>
          <th>SUBTOTAL</th>
        </tr>

        <tr v-for="(item, key) in textList" :key="key">
          <td>
            <img :src="item.img" alt="" />
          </td>
          <td>
            {{ item.name }}
            {{ item.version }}
          </td>
          <td>
            <i class="fa fa-plus-square" @click="$store.state.incart++"></i>
            <div id="pr">{{ $store.state.incart }}</div>
            <i
              v-if="$store.state.incart >= 2"
              class="fa fa-minus-square"
              @click="$store.state.incart--"
            ></i>
          </td>
          <td id="to">{{ $store.state.price * $store.state.incart }}</td>
          <td class="imgwi">
            <i class="fa fa-times-circle" @click="cls()" v-on:click="myFunction()"></i>
          </td>
        </tr>
        
        <tr v-for="(item, key) in textListiphone12" :key="key">
          <td>
            <img :src="item.img" alt="" />
          </td>
          <td>{{ item.name }} {{ item.version }}</td>
          <td>
            <i class="fa fa-plus-square" @click="$store.state.incart1++"></i>
            <div>{{ $store.state.incart1 }}</div>
            <i
              v-if="$store.state.incart1 >= 2"
              class="fa fa-minus-square"
              @click="$store.state.incart1--"
            ></i>
          </td>
          <td>{{ $store.state.price1 * $store.state.incart1 }}</td>
          <td class="imgwi">
            <i class="fa fa-times-circle" @click="cls1()"> </i>
          </td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
        <td></td>
        <td></td>
        <td>TOTAL</td>
        <td class="total">
          {{
            $store.state.price * $store.state.incart +
            $store.state.price1 * $store.state.incart1
          }}
        </td>
        </tr>
      </table>

      <!-- <button class="buy-buttons" >Accept</button>
      <button class="buy-buttons" onClick="javascipt:location.reload()">
        Cancel
      </button> -->
    </div>
  </div>
</template>

<script>
import firebase from "firebase/app";
export default {
  data: function () {
    return {
      textList: [],
      namee: null,
      textListiphone12: [],
    };
  },
  beforeCreate() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user != null) {
        // User is signed in.
        //ให้แสดง ชื่อ รูป e-mail
        this.namee = user.displayName;
        // this.email = user.email
        // this.photoUrl = user.photoURL
      } else {
        // No user is signed in.
        //กลับไปหน้า login
        this.$router.replace("/login");
      }
    });
  },
  methods: {
 myFunction() {
  document.getElementById("to").reset();
},
    getData() {
      firebase
        .firestore()
        .collection("IPhone")
        .orderBy("idname")
        .onSnapshot((querySnapshot) => {
          var data = [];
          querySnapshot.forEach((doc) => {
            data.push(doc.data());
          });
          this.textList = data;
        });
      firebase
        .firestore()
        .collection("IPhone12")
        .orderBy("idname")
        .onSnapshot((querySnapshot) => {
          var data = [];
          querySnapshot.forEach((doc) => {
            data.push(doc.data());
          });
          this.textListiphone12 = data;
        });
    },
    cls() {
      firebase
        .firestore()
        .collection("IPhone")
        .doc(this.namee)
        .delete()
        .then(() => {
          console.log("Document successfully deleted!");
        })
        .catch((error) => {
          console.error("Error removing document: ", error);
        });
    },
    cls1() {
      firebase
        .firestore()
        .collection("IPhone12")
        .doc(this.namee)
        .delete()
        .then(() => {
          console.log("Document successfully deleted!");
        })
        .catch((error) => {
          console.error("Error removing document: ", error);
        });

    },
  },
  created() {
    this.getData();
  },
};
</script>

<style>
.youcart {
  display: flex;
  align-content: center;
  justify-content: center;
  padding: 1em;
}
.youcart h5 {
  font-family: "Kanit", sans-serif;
  font-weight: bold;
}
.card-product {
  display: flex;
  justify-content: center;
  align-content: center;
  background-color: rgb(110, 107, 107);
  border-radius: 5px;
  padding: 1em;
  box-shadow: 10px 10px 5px #b2bec3;
  font-family: cursive;
  width: 80%;
  margin-top: 1rem;
  margin-left: 10rem;
}
table {
  width: 100%;
  border-collapse: collapse;
}
tr {
  color: rgb(25, 10, 10);
  width: 10%;
  text-align: center;
  font-weight: bold;
}
th {
  font-size: 10px;
}
td {
  color: rgb(255, 255, 255);
  font-size: 13px;
  font-family: "Kanit", sans-serif;
  margin-left: 200px;
}
td .fa {
  color: blue;
}
.minus-plus {
  display: flex;
  align-items: center;
  margin-left: 0rem;
  margin-bottom: 1em;
  justify-content: space-around;
}
.minus-plus .fa-minus-square {
  color: black;
}
.minus-plus .fa-plus-square {
  color: black;
}
tr td img {
  width: 20%;
  border-radius: 10px;
}
.imgwi .fa {
  padding-left: -10px;
  color: #fff;
}
.total{
  border-bottom: double #fff;
}
</style>