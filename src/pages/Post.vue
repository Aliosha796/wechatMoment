<template>
  <section class="postBanner">
    <span class="backHome" @click="backHome()">&#xe600;</span>
    <button class="postMessage" @click="postMessage()">发表</button>
  </section>
  <form action="">
    <input
      class="textInput"
      v-model="message"
      type="text"
      placeholder="这一刻的想法"
    />
    <!-- <textarea v-model="message" name="" id="" cols="30" rows="10"></textarea> -->
  </form>
</template>
<script setup>
import { ref } from "vue";
import router from "../router";
import { infoList } from "../store/index";
const store = infoList();
let message = ref("");

const postMessage = () => {
  const info = {
    id: Date.now(),
    userName: "张三",
    header: "https://s6.jpg.cm/2022/07/01/Pqv62U.webp",
    message: message.value,
    image: [],
    time: "昨天",
    like: [],
    comments: [],
    state: false,
  };

  store.addMessage(info);

  router.push({
    path: "/",
  });
};

function backHome() {
  router.push({
    path: "/",
  });
}
</script>
<style lang="scss" scoped>
.postBanner {
  width: 100%;
  height: 8vh;
  //   background-color: antiquewhite;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 0 10px 0 10px;
  font-size: 25px;
  .backHome {
    color: rgb(0, 0, 0);
  }
  .postMessage {
    padding: 2vw 4vw;
    color: #fff;
    border-radius: 5px;
    border: 0;
    background-color: #07c160;
  }
}

.textInput {
  width: 100%;
  height: 15vh;
  padding: 10px;
  border: 0;
  outline: none;
}
</style>
