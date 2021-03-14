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
            <i
              class="fa fa-times-circle"
              @click="cls()"
              v-on:click="myFunction()"
            ></i>
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

        <tr v-for="(item, key) in textListIPhoneSE64GB" :key="key">
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
      textListiphone12: [],
      textListIPhoneSE64GB: [],
      textListsamsungGalaxyA30s: [],
      textListsamsungGalaxyA01: [],
      textListsamsungGalaxyA50S: [],
      textListoppoReno5Pro5G: [],
      textListoppoReno4: [],
      textListoppoA93: [],
      textListXiaomiMi10TPro5G: [],
      textListXiaomiMiA3: [],
      textListXiaomiRedminote8: [],
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
      firebase
        .firestore()
        .collection("IPhoneSE64GB")
        .orderBy("idname")
        .onSnapshot((querySnapshot) => {
          var data = [];
          querySnapshot.forEach((doc) => {
            data.push(doc.data());
          });
          this.textListIPhoneSE64GB = data;
        });
      //-----------------------------SAMSUNG
      firebase
        .firestore()
        .collection("samsungGalaxyA30s")
        .orderBy("idname")
        .onSnapshot((querySnapshot) => {
          var data = [];
          querySnapshot.forEach((doc) => {
            data.push(doc.data());
          });
          this.textListsamsungGalaxyA30s = data;
        });
      firebase
        .firestore()
        .collection("samsungGalaxyA01")
        .orderBy("idname")
        .onSnapshot((querySnapshot) => {
          var data = [];
          querySnapshot.forEach((doc) => {
            data.push(doc.data());
          });
          this.textListsamsungGalaxyA01 = data;
        });
      firebase
        .firestore()
        .collection("samsungGalaxyA50S")
        .orderBy("idname")
        .onSnapshot((querySnapshot) => {
          var data = [];
          querySnapshot.forEach((doc) => {
            data.push(doc.data());
          });
          this.textListsamsungGalaxyA50S = data;
        });
      //-----------------------------OPPO
      firebase
        .firestore()
        .collection("oppoReno5Pro5G")
        .orderBy("idname")
        .onSnapshot((querySnapshot) => {
          var data = [];
          querySnapshot.forEach((doc) => {
            data.push(doc.data());
          });
          this.textListoppoReno5Pro5G = data;
        });
      firebase
        .firestore()
        .collection("oppoReno4")
        .orderBy("idname")
        .onSnapshot((querySnapshot) => {
          var data = [];
          querySnapshot.forEach((doc) => {
            data.push(doc.data());
          });
          this.textListoppoReno4 = data;
        });
      firebase
        .firestore()
        .collection("oppoA93")
        .orderBy("idname")
        .onSnapshot((querySnapshot) => {
          var data = [];
          querySnapshot.forEach((doc) => {
            data.push(doc.data());
          });
          this.textListoppoA93 = data;
        });
      //-----------------------------XIAOMI
      firebase
        .firestore()
        .collection("XiaomiMi10TPro5G")
        .orderBy("idname")
        .onSnapshot((querySnapshot) => {
          var data = [];
          querySnapshot.forEach((doc) => {
            data.push(doc.data());
          });
          this.textListXiaomiMi10TPro5G = data;
        });
      firebase
        .firestore()
        .collection("XiaomiMiA3")
        .orderBy("idname")
        .onSnapshot((querySnapshot) => {
          var data = [];
          querySnapshot.forEach((doc) => {
            data.push(doc.data());
          });
          this.textListXiaomiMiA3 = data;
        });
      firebase
        .firestore()
        .collection("XiaomiRedminote8")
        .orderBy("idname")
        .onSnapshot((querySnapshot) => {
          var data = [];
          querySnapshot.forEach((doc) => {
            data.push(doc.data());
          });
          this.textListXiaomiRedminote8 = data;
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
    cls2() {
      firebase
        .firestore()
        .collection("IPhoneSE64GB")
        .doc(this.namee)
        .delete()
        .then(() => {
          console.log("Document successfully deleted!");
        })
        .catch((error) => {
          console.error("Error removing document: ", error);
        });
    },
    //-----------------------------SAMSUNG---CLS
    cls3() {
      firebase
        .firestore()
        .collection("samsungGalaxyA30s")
        .doc(this.namee)
        .delete()
        .then(() => {
          console.log("Document successfully deleted!");
        })
        .catch((error) => {
          console.error("Error removing document: ", error);
        });
    },
    cls4() {
      firebase
        .firestore()
        .collection("samsungGalaxyA01")
        .doc(this.namee)
        .delete()
        .then(() => {
          console.log("Document successfully deleted!");
        })
        .catch((error) => {
          console.error("Error removing document: ", error);
        });
    },
    cls5() {
      firebase
        .firestore()
        .collection("samsungGalaxyA50S")
        .doc(this.namee)
        .delete()
        .then(() => {
          console.log("Document successfully deleted!");
        })
        .catch((error) => {
          console.error("Error removing document: ", error);
        });
    },
    //-----------------------------OPPO---CLS
    cls6() {
      firebase
        .firestore()
        .collection("oppoReno5Pro5G")
        .doc(this.namee)
        .delete()
        .then(() => {
          console.log("Document successfully deleted!");
        })
        .catch((error) => {
          console.error("Error removing document: ", error);
        });
    },
    cls7() {
      firebase
        .firestore()
        .collection("oppoReno4")
        .doc(this.namee)
        .delete()
        .then(() => {
          console.log("Document successfully deleted!");
        })
        .catch((error) => {
          console.error("Error removing document: ", error);
        });
    },
    cls8() {
      firebase
        .firestore()
        .collection("oppoA93")
        .doc(this.namee)
        .delete()
        .then(() => {
          console.log("Document successfully deleted!");
        })
        .catch((error) => {
          console.error("Error removing document: ", error);
        });
    },
    //-----------------------------XIAOMI---CLS
    cls9() {
      firebase
        .firestore()
        .collection("XiaomiMi10TPro5G")
        .doc(this.namee)
        .delete()
        .then(() => {
          console.log("Document successfully deleted!");
        })
        .catch((error) => {
          console.error("Error removing document: ", error);
        });
    },
    cls10() {
      firebase
        .firestore()
        .collection("XiaomiMiA3")
        .doc(this.namee)
        .delete()
        .then(() => {
          console.log("Document successfully deleted!");
        })
        .catch((error) => {
          console.error("Error removing document: ", error);
        });
    },
    cls11() {
      firebase
        .firestore()
        .collection("XiaomiRedminote8")
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
.total {
  border-bottom: double #fff;
}
</style>