<template>
  <div
    class="banner"
    :class="{ defaulBanner: !bannerBcgDisplay, displaybcg: bannerBcgDisplay }"
  >
    <span @click="toLoginPage()">&#xe63a;</span>
    <span v-show="bannerBcgDisplay" class="bannerTitle">朋友圈</span>
    <span @click="toPostPage()">&#xe8bc;</span>
  </div>
  <section class="user">
    <div class="userBackground">
      <img src="../img/background.webp" alt="" srcset="" />
    </div>
    <div class="userInfo">
      <div class="userInfoHeader">
        <img src="../img/header.webp" alt="" />
      </div>
      <p class="userInfoName">che</p>
    </div>
  </section>
</template>
<script setup>
import { onMounted, ref, onBeforeMount, onBeforeUnmount, watch } from "vue";
import router from "../router";

function toPostPage() {
  router.push({
    path: "/post",
  });
}

function toLoginPage() {
  router.push({
    path: "/login",
  });
}

let oldScrollTop = 0; // 记录上一次滚动结束后的滚动距离
const scrollTop = ref(0); // 记录当前的滚动距离
const scrollFixedStatus = ref(true);
let bannerBcgDisplay = ref(false);
function handleScroll() {
  window.addEventListener("scroll", () => {
    scrollTop.value = window.scrollY;
  });
}
onMounted(() => {
  handleScroll();
});
onBeforeUnmount(() => {
  window.removeEventListener("scroll", () => {}); // 离开当前组件别忘记移除事件监听
});

watch(
  () => scrollTop.value,

  (newValue, oldValue) => {
    // setTimeout(() => {
    //   if (newValue === window.scrollY) {
    //     // 延时执行后当newValue等于window.scrollY，代表滚动结束
    //     console.log("滚动结束", window.scrollY);
    //     oldScrollTop = newValue; // 每次滚动结束后都要给oldScrollTop赋值
    //     // scrollFixedStatus.value = true;
    //   }
    // }, 20); // 必须使用延时器，否则每次newValue和window.scrollY都相等，无法判断，20ms刚好大于watch的侦听周期，故延时20ms
    // if (oldScrollTop === oldValue) {
    //   scrollFixedStatus.value = false;
    //   // 每次滚动开始时oldScrollTop与oldValue相等
    //   console.log("滚动开始");
    // }

    if (window.scrollY > 242) {
      bannerBcgDisplay.value = true;
      // console.log("显示", bannerBcgDisplay.value);
    } else {
      bannerBcgDisplay.value = false;
      // console.log("不显示", bannerBcgDisplay.value);
    }
  }
);
</script>
<style lang="scss">
.displaybcg {
  background-color: rgb(242, 242, 242);
  color: #000;
}
.banner {
  top: 0;
  width: 100%;
  height: 8vh;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
  box-sizing: border-box;
  z-index: 999;
  font-size: 20px;
  .bannerTitle {
    font-size: 18px;
    font-weight: 500;
    font-family: "黑体";
  }
}

.defaulBanner {
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
      width: 10vh;

      img {
        width: 100%;
        border-radius: 10px;
      }
    }
  }
}
</style>
