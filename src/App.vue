<script setup>
import NewsCard from "./components/NewsCard.vue";
</script>

<template>
  <div class="banner">
    <span>&#xe600;</span>
    <span v-show="">朋友圈</span>
    <span>&#xe8bc;</span>
  </div>
  <section class="user">
    <div class="userBackground">
      <img src="./img/background.webp" alt="" srcset="" />
    </div>
    <div class="userInfo">
      <div class="userInfoHeader">
        <img src="./img/header.webp" alt="" />
      </div>
      <p class="userInfoName">che</p>
    </div>
  </section>
  <div class="listWapper">
    <NewsCard></NewsCard>
  </div>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: content-box;
  z-index: 1;
}
.banner {
  top: 0;
  width: 100%;
  height: 8vh;
  background-color: rgba(234, 234, 234, 0);
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
  box-sizing: border-box;
  z-index: 999;
  font-size: 25px;
  color: #fff;
}
.user {
  width: 100%;
  height: 45vh;
  .userBackground {
    width: 100%;
    height: 80%;
    box-sizing: border-box;
    z-index: -1;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .userInfo {
    width: 90%;
    height: 10vh;

    position: relative;
    bottom: 40px;
    margin: auto;
    z-index: 1;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    .userInfoName {
      margin-right: 10px;
      margin-bottom: 15px;
      color: #fff;
    }
    .userInfoHeader {
      width: 20%;
      height: 100%;
      img {
        width: 100%;
      }
    }
  }
}
.listWapper {
  width: 100%;
  margin-top: 30px;
}
ul {
  list-style-type: none;
}
</style>
