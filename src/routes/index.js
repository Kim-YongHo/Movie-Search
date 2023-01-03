import { createRouter, createWebHashHistory } from "vue-router";
import Home from "./Home";
import About from "./About";

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    // path별 component를 추가한다.
    { path: "/", component: Home },
    { path: "/about", component: About },
  ],
});

// export default createRouter({
//   history: createWebHashHistory(),
//   //pages

//   routes: [
//     {
//       path: "/",
//       component: Home,
//     },
//     {
//       path: "/about",
//       component: About,
//     },
//   ],
// });
