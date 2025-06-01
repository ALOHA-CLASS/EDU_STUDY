import { createRouter, createWebHistory } from "vue-router";
// import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

// router01
import BoardList1 from "@/components/router01/BoardList.vue";
import FileList1 from "@/components/router01/FileList.vue";
import PictureList1 from "@/components/router01/PictureList.vue";

// router02
import BoardList2 from "@/components/router02/BoardList.vue";
import BoardDetail2 from "@/components/router02/BoardDetail.vue";

// router03
import BoardList3 from "@/components/router03/BoardList.vue";
import BoardDetail3 from "@/components/router03/BoardDetail.vue";

// router04
import BoardList4 from "@/components/router04/BoardList.vue";
import BoardDetail4 from "@/components/router04/BoardDetail.vue";

// router05
import TheBoardView from "@/views/TheBoardView.vue";
import BoardList5 from "@/components/router05/BoardList.vue";
import BoardDetail5 from "@/components/router05/BoardDetail.vue";
import BoardWrite5 from "@/components/router05/BoardWrite.vue";
import BoardModify5 from "@/components/router05/BoardModify.vue";

// router06
import TheBoardView6 from "@/views/TheBoardView6.vue";
import BoardList6 from "@/components/router06/BoardList.vue";
import BoardDetail6 from "@/components/router06/BoardDetail.vue";


/*
  이 파일은 Vue Router의 라우터 인스턴스를 생성하고 라우트 설정을 정의합니다.
  각 라우트는 path, name, component, children, redirect 등의 속성을 가질 수 있습니다.
  - router01 ~ router06: 각기 다른 라우팅 예제 및 컴포넌트 매핑
  - children: 중첩 라우트(예: router05, router06)
  - props: 라우트 파라미터를 컴포넌트 props로 전달(예: boardview6)
*/
const router = createRouter({
  // history 모드 설정
  // Vue Router는 두 가지 주요 히스토리 모드를 지원합니다:
  // - createWebHistory: HTML5 History API를 사용하여 URL을 관리합니다.
  // - createWebHashHistory: URL 해시를 사용하여 URL을 관리합니다.
  history: createWebHistory(import.meta.env.BASE_URL),
  // history: createWebHashHistory(import.meta.env.BASE_URL),
  
  // - routes: 라우트 설정 배열
  routes: [
    /*
      {
        path: "경로",
        name: "이름",
        component: 컴포넌트,
      },
    */
    {
      path: "/",
      name: "main",
      component: HomeView,
    },
    // router01
    {
      path: "/r01/board",
      component: BoardList1,
    },
    {
      path: "/r01/file",
      component: FileList1,
    },
    {
      path: "/r01/picture",
      component: PictureList1,
    },
    // router02
    {
      path: "/r02/board",
      component: BoardList2,
    },
    {
      // path: "/r02/board/:no",  // :no는 동적 세그먼트로, URL에서 변수를 나타냅니다.
      path: "/r02/board/:no",
      component: BoardDetail2,
    },
    // router03
    {
      path: "/r03/board",
      name: "board3",
      component: BoardList3,
    },
    {
      path: "/r03/board/:no",
      name: "boardview3",
      component: BoardDetail3,
    },
    // router04
    {
      path: "/r04/board",
      name: "board4",
      component: BoardList4,
    },
    {
      path: "/r04/board/:no",
      name: "boardview4",
      component: BoardDetail4,
    },
    //router05
    {
      path: "/r05/board",
      name: "board5",
      component: TheBoardView,
      // ⭐ redirect : /r05/board ➡️ /r05/board/list
      // redirect: "/r05/board/list",
      redirect: { name: "boardlist5" },
      // children: 중첩 라우트 설정
      children: [
        {
          // ⚠️ / 없이 하위 경로를 설정하면, 부모 경로에 상대적으로 적용됩니다.
          //  - list : /r05/board/list
          // ⚠️ / 붙이면 절대 경로로 인식되어, /r05/board/list로 이동합니다.
          // - /list : /list
          path: "list",
          name: "boardlist5",
          component: BoardList5,
        },
        {
          path: "view/:no",
          name: "boardview5",
          component: BoardDetail5,
        },
        {
          path: "write",
          name: "boardwrite5",
          component: BoardWrite5,
        },
        {
          path: "modify/:no",
          name: "boardmodify5",
          component: BoardModify5,
        },
      ],
    },
    //router06
    {
      path: "/r06/board",
      name: "board6",
      component: TheBoardView6,
      // redirect: "/r06/board/list",
      redirect: { name: "boardlist6" },
      children: [
        {
          path: "list",
          name: "boardlist6",
          component: BoardList6,
        },
        {
          path: "view/:no",
          name: "boardview6",
          component: BoardDetail6,
          // props: true는 URL 파라미터를 컴포넌트의 props로 전달합니다.
          // 예: /r06/board/view/1 ➡️ props로 { no: 1 } 전달
          // ⚠️ 오히려 props 와 route 가 헷갈릴 수 있으니 주의하세요.
          props: true,
        },
      ],
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ],
});

// 외부에서 router 인스턴스를 사용할 수 있도록 export 합니다.
export default router;
