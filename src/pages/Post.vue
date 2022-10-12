<template>
  <section class="postBanner">
    <span class="backHome" @click="backHome()">&#xe600;</span>
    <button class="postMessage">发表</button>
  </section>
  <form action="">
    <input class="textInput" type="text" placeholder="这一刻的想法" />
  </form>
</template>
<script setup>
import router from "../router";

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
