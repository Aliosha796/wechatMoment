<template>
  <section class="listCard" v-for="item in store.userList">
    <div class="listWapper">
      <div class="userHeader">
        <img :src="item.header" alt="" />
      </div>
      <div class="userMain">
        <p class="userName">{{ item.userName }}</p>
        <p class="userMessage">{{ item.message }}</p>
        <ul>
          <li></li>
        </ul>
        <section class="userFunc">
          <span>昨天</span>
          <span>..</span>
        </section>
      </div>
    </div>
  </section>
</template>
<script setup>
import { infoList } from "../store/index";
const store = infoList();
</script>
<style scoped lang="scss">
.listCard {
  width: 100%;
  border-bottom: 0.5px rgb(228, 228, 228) solid;
  box-sizing: border-box;
  padding: 10px;
  .listWapper {
    margin-top: 0;
    display: flex;
    width: 100%;
    .userHeader {
      width: 15%;
      img {
        border-radius: 5px;
        width: 80%;
      }
    }
    .userMain {
      flex: 1;
      .userFunc {
        display: flex;
        justify-content: space-between;
        font-size: 10px;
        color: #ccc;
      }
    }
  }
}
</style>
