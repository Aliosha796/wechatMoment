<template>
  <section class="listCard" v-for="item in store.userList">
    <div class="listWapper">
      <div class="userHeader">
        <img :src="item.header" alt="" />
      </div>
      <div class="userMain">
        <p class="userName">{{ item.userName }}</p>
        <p class="userMessage">{{ item.message }}</p>

        <ul class="userImage" v-show="item.image">
          <li v-for="image in item.image">
            <img :src="image" alt="" />
          </li>
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
    margin-top: 10px;
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

      .userImage {
        margin-top: 10px;
        width: 100%;
        display: grid;
        grid-gap: 5px;
        grid-template-columns: repeat(3, 100px);
        grid-template-rows: repeat(3, 100px);
        li {
          img {
            width: 100%;
          }
        }
      }
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
