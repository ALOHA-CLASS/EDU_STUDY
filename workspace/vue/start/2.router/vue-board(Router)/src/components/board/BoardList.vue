<script setup>
import { ref, reactive, onMounted } from "vue";
import { useRouter } from "vue-router";

import BoardListItem from "./item/BoardListItem.vue";
import ThePageNavigation from "../common/ThePageNavigation.vue";
import VSelect from "../common/VSelect.vue";

const router = useRouter();

const selectOption = ref([
  { text: "검색조건", value: "" },
  { text: "글번호", value: "article_no" },
  { text: "제목", value: "subject" },
  { text: "작성자아이디", value: "user_id" },
]);

const articleList = [
  {
    articleNo: 100,
    subject: "메리 크리스마스 ^^",
    userId: "hissam",
    userName: "하이쌤",
    hit: 123,
    registerDate: "30.12.25",
  },
  {
    articleNo: 99,
    subject: "즐거운 성탄절입니다.",
    userId: "admin",
    userName: "관리자",
    hit: 100,
    registerDate: "30.12.24",
  },
  {
    articleNo: 98,
    subject: "한해 마무리 잘하세요~~",
    userId: "kimhi",
    userName: "김하이",
    hit: 78,
    registerDate: "30.12.21",
  },
  {
    articleNo: 97,
    subject: "토피넛라떼 정말 맛있어요!!",
    userId: "lattelove",
    userName: "라떼조아",
    hit: 33,
    registerDate: "30.12.20",
  },
  {
    articleNo: 96,
    subject: "내 생일이에요!!!",
    userId: "hissam",
    userName: "하이쌤",
    hit: 1004,
    registerDate: "30.12.20",
  },
];
const articles = reactive(articleList);
const currentPage = ref(7);
const totalPage = ref(35);
const param = ref({
  pgno: currentPage.value,
  spp: import.meta.env.VITE_ARTICLE_LIST_SIZE,
  key: "",
  word: "",
});

onMounted(() => {
  // param.value.pgno = 1;
  getArticleList();
});

const changeKey = (val) => {
  console.log("BoarList에서 선택한 조건 : " + val);
  param.value.key = val;
};

const getArticleList = () => {
  if (param.value.word && !param.value.key)
    console.log("검색 조건을 선택하세요.");
  console.log("서버에서 글목록 얻어오자!!!", param.value);
};

const onPageChange = (val) => {
  console.log(val + "번 페이지로 이동 준비 끝!!!");
  param.value.pgno = val;
  getArticleList();
};

const moveWrite = () => {
  console.log("글쓰러 가자!!!!");
  router.push({ name: 'article-write' });
};
</script>

<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-10">
        <h2 class="my-3 py-3 shadow-sm bg-light text-center">
          <mark class="sky">글목록</mark>
        </h2>
      </div>
      <div class="col-lg-10">
        <div class="row align-self-center mb-2">
          <div class="col-md-2 text-start">
            <button type="button" class="btn btn-outline-primary btn-sm" @click="moveWrite">글쓰기</button>
          </div>
          <div class="col-md-5 offset-5">
            <form class="d-flex">
              <!-- <select class="form-select form-select-sm ms-5 me-1 w-50" aria-label="검색조건">
                <option selected>검색조건</option>
                <option value="article_no">글번호</option>
                <option value="subject">제목</option>
                <option value="user_id">작성자</option>
              </select> -->
              <VSelect :selectOption="selectOption" @onKeySelect="changeKey" />
              <div class="input-group input-group-sm">
                <input type="text" class="form-control" v-model="param.word" placeholder="검색어..." />
                <button class="btn btn-dark" type="button" @click="getArticleList">검색</button>
              </div>
            </form>
          </div>
        </div>
        <table class="table table-hover">
          <thead>
            <tr class="text-center">
              <th scope="col">글번호</th>
              <th scope="col">제목</th>
              <th scope="col">작성자</th>
              <th scope="col">조회수</th>
              <th scope="col">작성일</th>
            </tr>
          </thead>
          <tbody>
            <BoardListItem v-for="article in articles" :key="article.articleNo" :article="article" />
          </tbody>
        </table>
      </div>
      <ThePageNavigation :current-page="currentPage" :total-page="totalPage" @pageChange="onPageChange" />
    </div>
  </div>
</template>

<style scoped></style>
