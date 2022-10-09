import { defineStore } from "pinia";
export const infoList = defineStore("infoList", {
  state: () => {
    return {
      userList: [
        {
          id: "001",
          userName: "小王",
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
        },
        {
          id: "002",
          userName: "小张",
          header: "https://s6.jpg.cm/2022/07/01/Pqv62U.webp",
          message:
            "但是，我们必须看到，在所有制方面，问题还没有完全解决。我们常说所有制“基本解决”，也就是说还没有完全解决，资产阶级法权在所有制范围内，也没有完全取消。从以上数字就可以看出，在工、农、商业中都还有部分的私有制，社会主义的公有制并不都是全民所有制，而是两种所有制；全民所有制在作为国民经济基础的农业方面还很薄弱。马克思、列宁所设想的在社会主义社会资产阶级法权在所有制范围内已经不存在了，是指的全部生产资料已经归整个社会所有。我们显然还没有走到这一步。我们在理论上和实践上都不要忽视无产阶级专政在这方面还有很艰难的任务。",
          image: [
            "https://s6.jpg.cm/2022/07/01/Pqv62U.webp",
            "https://s6.jpg.cm/2022/07/01/Pqv62U.webp",
          ],
          time: "",
        },
        {
          id: "003",
          userName: "云鹤",
          header: "https://s6.jpg.cm/2022/07/01/Pqv62U.webp",
          message: "测试测试测试",
        },
        {
          id: "004",
          userName: "小姚",
          header: "https://s6.jpg.cm/2022/07/01/Pqv62U.webp",
          message: "测试测试测试",
          time: "",
        },
        {
          id: "005",
          userName: "小康",
          header: "https://s6.jpg.cm/2022/07/01/Pqv62U.webp",
          message: "测试测试测试",
          time: "",
        },
        {
          id: "006",
          userName: "101",
          header: "https://s6.jpg.cm/2022/07/01/Pqv62U.webp",
          message: "测试测试测试",
          time: "",
        },
      ],
    };
  },
  getters: {},
  actions: {},
});
