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
            <i class="fa fa-plus-square" @click="item.countped++"></i>
            <div id="pr">{{ item.countped }}</div>
            <i
              v-if="item.countped >= 2"
              class="fa fa-minus-square"
              @click="item.countped--"
            ></i>
          </td>
          <td id="to">{{ item.price * item.countped }}</td>
          <td class="imgwi">
            <i
              class="fa fa-times-circle"
              @click="cls()"
              
            ></i>
          </td>
        </tr>

        <tr v-for="(item1, key) in textListiphone12" :key="key">
          <td>
            <img :src="item1.img" alt="" />
          </td>
          <td>{{ item1.name }} {{ item1.version }}</td>
          <td>
            <i class="fa fa-plus-square" @click="item1.countped1++"></i>
            <div>{{ item1.countped1}}</div>
            <i
              v-if="item1.countped1 >= 2"
              class="fa fa-minus-square"
              @click="item1.countped1--"
            ></i>
          </td>
          <td>{{ item1.price * item1.countped1 }}</td>
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
            <i class="fa fa-plus-square" @click="$store.state.incart2++"></i>
            <div>{{ $store.state.incart2 }}</div>
            <i
              v-if="$store.state.incart2 >= 2"
              class="fa fa-minus-square"
              @click="$store.state.incart2--"
            ></i>
          </td>
          <td>{{ $store.state.price2 * $store.state.incart2 }}</td>
          <td class="imgwi">
            <i class="fa fa-times-circle" @click="cls2()"> </i>
          </td>
        </tr>

        <tr v-for="(item, key) in textListsamsungGalaxyA30s" :key="key">
          <td>
            <img :src="item.img" alt="" />
          </td>
          <td>{{ item.name }} {{ item.version }}</td>
          <td>
            <i class="fa fa-plus-square" @click="$store.state.incart3++"></i>
            <div>{{ $store.state.incart3 }}</div>
            <i
              v-if="$store.state.incart3 >= 2"
              class="fa fa-minus-square"
              @click="$store.state.incart3--"
            ></i>
          </td>
          <td>{{ $store.state.price3 * $store.state.incart3 }}</td>
          <td class="imgwi">
            <i class="fa fa-times-circle" @click="cls3()"> </i>
          </td>
        </tr>

        <tr v-for="(item, key) in textListsamsungGalaxyA01" :key="key">
          <td>
            <img :src="item.img" alt="" />
          </td>
          <td>{{ item.name }} {{ item.version }}</td>
          <td>
            <i class="fa fa-plus-square" @click="$store.state.incart4++"></i>
            <div>{{ $store.state.incart4 }}</div>
            <i
              v-if="$store.state.incart4 >= 2"
              class="fa fa-minus-square"
              @click="$store.state.incart4--"
            ></i>
          </td>
          <td>{{ $store.state.price4 * $store.state.incart4}}</td>
          <td class="imgwi">
            <i class="fa fa-times-circle" @click="cls4()"> </i>
          </td>
        </tr>

        <tr v-for="(item, key) in  textListsamsungGalaxyA50S" :key="key">
          <td>
            <img :src="item.img" alt="" />
          </td>
          <td>{{ item.name }} {{ item.version }}</td>
          <td>
            <i class="fa fa-plus-square" @click="$store.state.incart5++"></i>
            <div>{{ $store.state.incart5 }}</div>
            <i
              v-if="$store.state.incart5 >= 2"
              class="fa fa-minus-square"
              @click="$store.state.incart5--"
            ></i>
          </td>
          <td>{{ $store.state.price5 * $store.state.incart5 }}</td>
          <td class="imgwi">
            <i class="fa fa-times-circle" @click="cls5()"> </i>
          </td>
        </tr>

         <tr v-for="(item, key) in  textListoppoReno5Pro5G" :key="key">
          <td>
            <img :src="item.img" alt="" />
          </td>
          <td>{{ item.name }} {{ item.version }}</td>
          <td>
            <i class="fa fa-plus-square" @click="$store.state.incart6++"></i>
            <div>{{ $store.state.incart6}}</div>
            <i
              v-if="$store.state.incart6 >= 2"
              class="fa fa-minus-square"
              @click="$store.state.incart6--"
            ></i>
          </td>
          <td>{{ $store.state.price6 * $store.state.incart6 }}</td>
          <td class="imgwi">
            <i class="fa fa-times-circle" @click="cls6()"> </i>
          </td>
        </tr>

        <tr v-for="(item, key) in  textListoppoReno4" :key="key">
          <td>
            <img :src="item.img" alt="" />
          </td>
          <td>{{ item.name }} {{ item.version }}</td>
          <td>
            <i class="fa fa-plus-square" @click="$store.state.incart7++"></i>
            <div>{{ $store.state.incart7 }}</div>
            <i
              v-if="$store.state.incart7 >= 2"
              class="fa fa-minus-square"
              @click="$store.state.incart7--"
            ></i>
          </td>
          <td>{{ $store.state.price7 * $store.state.incart7 }}</td>
          <td class="imgwi">
            <i class="fa fa-times-circle" @click="cls7()"> </i>
          </td>
        </tr>

         <tr v-for="(item, key) in  textListoppoA93" :key="key">
          <td>
            <img :src="item.img" alt="" />
          </td>
          <td>{{ item.name }} {{ item.version }}</td>
          <td>
            <i class="fa fa-plus-square" @click="$store.state.incart8++"></i>
            <div>{{ $store.state.incart8 }}</div>
            <i
              v-if="$store.state.incart8 >= 2"
              class="fa fa-minus-square"
              @click="$store.state.incart8--"
            ></i>
          </td>
          <td>{{ $store.state.price8 * $store.state.incart8 }}</td>
          <td class="imgwi">
            <i class="fa fa-times-circle" @click="cls8()"> </i>
          </td>
        </tr>

        <tr v-for="(item, key) in  textListXiaomiMi10TPro5G" :key="key">
          <td>
            <img :src="item.img" alt="" />
          </td>
          <td>{{ item.name }} {{ item.version }}</td>
          <td>
            <i class="fa fa-plus-square" @click="$store.state.incart9++"></i>
            <div>{{ $store.state.incart9 }}</div>
            <i
              v-if="$store.state.incart9 >= 2"
              class="fa fa-minus-square"
              @click="$store.state.incart9--"
            ></i>
          </td>
          <td>{{ $store.state.price9 * $store.state.incart9 }}</td>
          <td class="imgwi">
            <i class="fa fa-times-circle" @click="cls9()"> </i>
          </td>
        </tr>

        <tr v-for="(item, key) in  textListXiaomiMiA3" :key="key">
          <td>
            <img :src="item.img" alt="" />
          </td>
          <td>{{ item.name }} {{ item.version }}</td>
          <td>
            <i class="fa fa-plus-square" @click="$store.state.incart10++"></i>
            <div>{{ $store.state.incart10 }}</div>
            <i
              v-if="$store.state.incart10 >= 2"
              class="fa fa-minus-square"
              @click="$store.state.incart10--"
            ></i>
          </td>
          <td>{{ $store.state.price10 * $store.state.incart10 }}</td>
          <td class="imgwi">
            <i class="fa fa-times-circle" @click="cls10()"> </i>
          </td>
        </tr>

        <tr v-for="(item, key) in   textListXiaomiRedminote8" :key="key">
          <td>
            <img :src="item.img" alt="" />
          </td>
          <td>{{ item.name }} {{ item.version }}</td>
          <td>
            <i class="fa fa-plus-square" @click="$store.state.incart111++"></i>
            <div>{{ $store.state.incart11 }}</div>
            <i
              v-if="$store.state.incart11 >= 2"
              class="fa fa-minus-square"
              @click="$store.state.incart11--"
            ></i>
          </td>
          <td>{{ $store.state.price11 * $store.state.incart11 }}</td>
          <td class="imgwi">
            <i class="fa fa-times-circle" @click="cls11()"> </i>
          </td>
        </tr>
       
        <tr>
          <td></td>
          <td></td>
          <td>TOTAL</td>
          <td class="total">
           
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
      namee: null,
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
        .collection("IPhonepad")
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
        .collection("IPhonepad")
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