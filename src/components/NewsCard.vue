<template>
  <section
    class="listCard"
    v-for="(item, index) in store.userList"
    key="item.id"
  >
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
          <div class="userOperDisplay" v-show="item.state">
            <span>&#xe601; 赞</span>
            <span>&#xe602; 评论</span>
          </div>
          <button class="userFuncBtn" @click="showLike(index)"></button>
        </section>
        <section class="userInteract" v-show="item.like || item.comments">
          <p class="like">
            <span v-for="like in item.like">&#xe601; {{ like.userName }}</span>
          </p>
          <p v-for="mes in item.comments">
            {{ mes.userName }}: {{ mes.message }}
          </p>
        </section>
      </div>
    </div>
  </section>
</template>
<script setup>
import { infoList } from "../store/index";
const store = infoList();

function showLike(index) {
  store.changeState(index);
}
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
      width: 20%;
      img {
        border-radius: 5px;
        width: 80%;
      }
    }
    .userMain {
      flex: 1;
      box-sizing: content-box;
      .userImage {
        margin-top: 10px;
        width: 100%;
        // display: grid;
        // grid-gap: 5px;
        // grid-template-columns: repeat(3, 100px);
        // grid-template-rows: repeat(3, 100px);
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;

        li {
          margin-left: 2px;
          flex: 30%;
          img {
            width: 100%;
          }
        }
      }
      .userFunc {
        display: flex;
        justify-content: space-between;
        margin-top: 10px;
        margin-bottom: 10px;
        font-size: 10px;
        color: #ccc;
        .userFuncBtn {
          font-size: 20px;
          width: 30px;
          outline: none;
          border: 0;
          position: relative;
        }
        .userOperDisplay {
          width: 50%;
          height: 30px;
          background-color: rgb(45, 45, 45);
          position: absolute;
          justify-content: space-around;
          align-items: center;
          right: 15vw;
          display: flex;
          z-index: 2;
          font-size: 15px;
          color: #fff;
        }
      }
      .userInteract {
        width: 100%;
        background-color: rgb(239, 239, 239);
        box-sizing: border-box;
        padding: 5px;
        .like {
          border-bottom: 0.5px rgb(228, 228, 228) solid;
        }
      }
    }
  }
}
</style>
