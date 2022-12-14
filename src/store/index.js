import { defineStore } from "pinia";
export const infoList = defineStore("infoList", {
  state: () => {
    return {
      userList: [
        {
          id: "001",
          userName: "张三",
          header: "https://s6.jpg.cm/2022/07/01/Pqv62U.webp",
          message: "很酷，不聊天",
          image: [
            "https://s6.jpg.cm/2022/07/01/Pqv62U.webp",
            "https://s6.jpg.cm/2022/07/01/Pqv62U.webp",
            "https://s6.jpg.cm/2022/07/01/Pqv62U.webp",
            "https://s6.jpg.cm/2022/07/01/Pqv62U.webp",
            "https://s6.jpg.cm/2022/07/01/Pqv62U.webp",
            "https://s6.jpg.cm/2022/07/01/Pqv62U.webp",
            "https://s6.jpg.cm/2022/07/01/Pqv62U.webp",
            "https://s6.jpg.cm/2022/07/01/Pqv62U.webp",
            "https://s6.jpg.cm/2022/07/01/Pqv62U.webp",
          ],
          time: "",
          like: [{ id: "002", userName: "张三" }],
          comments: [
            { id: "002", userName: "张三", message: "好好好好" },
            { id: "002", userName: "Simth", message: "好好好好" },
          ],
          state: false,
        },
        {
          id: "002",
          userName: "小张",
          header: "https://s6.jpg.cm/2022/07/01/Pqv62U.webp",
          message: "哈哈哈哈哈哈哈哈哈",
          image: [
            "https://s6.jpg.cm/2022/07/01/Pqv62U.webp",
            "https://s6.jpg.cm/2022/07/01/Pqv62U.webp",
          ],
          time: "",
          like: [{ id: "003", userName: "张三" }],
          state: false,
        },
        {
          id: "003",
          userName: "云鹤",
          header: "https://s6.jpg.cm/2022/07/01/Pqv62U.webp",
          message: "测试测试测试",
          image: [
            "https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/897ed2f96d5b4144bdeeab68e65c9690~tplv-k3u1fbpfcp-zoom-crop-mark:3024:3024:3024:1702.awebp?",
          ],
          state: false,
        },
        {
          id: "004",
          userName: "小姚",
          header: "https://s6.jpg.cm/2022/07/01/Pqv62U.webp",
          message: "测试测试测试",
          time: "",
          state: false,
        },
        {
          id: "005",
          userName: "小康",
          header: "https://s6.jpg.cm/2022/07/01/Pqv62U.webp",
          message: "测试测试测试",
          time: "",
          state: false,
        },
        {
          id: "006",
          userName: "101",
          header: "https://s6.jpg.cm/2022/07/01/Pqv62U.webp",
          message: "测试测试测试",
          time: "",
          state: false,
        },
      ],
      userInfo: {
        userID: "Che",
        userHeader: "",
        userNcakground: "",
      },
    };
  },
  getters: {},
  actions: {
    changeState(index) {
      this.userList[index].state = !this.userList[index].state;
    },
    addMessage(info) {
      this.userList.unshift(info);
    },
  },
});
