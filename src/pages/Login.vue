<template>
  <div class="loginWapepr">
    <section class="loginBanner">
      <span @click="backHome()">&#xeaf2;</span>
    </section>
    <div class="loginInput">
      <p>账号密码登录</p>
      <div class="loginInputMain">
        <span>账号</span>
        <input v-model="userInfo.acc" type="text" placeholder="请输入账号" />
      </div>
      <div class="loginInputMain">
        <span>密码</span>
        <input
          v-model="userInfo.pwd"
          type="password"
          placeholder="请输入密码"
        />
      </div>
    </div>

    <div class="login-operation">
      <button class="loginButton" @click="login()">登录</button>
      <button class="regButton">注册</button>
    </div>
  </div>
</template>
<script setup>
import { reactive, ref } from "vue";
import router from "../router";

let userInfo = reactive({
  acc: "",
  pwd: "",
});

function login() {
  if ((userInfo.acc == "admin") & (userInfo.pwd == 123456)) {
    router.push({
      path: "/",
    });
  } else {
    alert("账号或密码错误！");
  }
}

function backHome() {
  router.push({
    path: "/",
  });
}
</script>
<style lang="scss" scoped>
.loginWapepr {
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  .loginBanner {
    width: 100%;
    height: 6vh;
    top: 0;
    position: fixed;
    display: flex;
    align-items: center;
    padding-left: 5px;
    font-size: 20px;
  }
  .loginInput {
    width: 100%;
    padding: 10px;
    text-align: center;
    .loginInputMain {
      width: 100%;
      height: 8vh;
      border-bottom: 0.1px #ccc solid;
      display: flex;
      align-items: center;
      margin-top: 20px;
      span {
        width: 25%;
      }
      input {
        flex: 1;
        border: 0;
        outline: none;
      }
    }
  }

  .login-operation {
    width: 100%;
    button {
      width: 50%;
      height: 40px;
      border: 0;
    }
    display: flex;
    flex-direction: column;
    align-items: center;
    .loginButton {
      background-color: #05c160;
      border: 0;
      color: #fff;
    }

    .regButton {
      background-color: #fff;
      color: #05c160;
    }
  }
}
</style>
