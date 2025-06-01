<script setup>
// import { useRouter } from "vue-router";

// const router = useRouter();

let articles = [
  { articleNo: 5, subject: "5번글입니다.", registerTime: "30.12.31" },
  { articleNo: 4, subject: "4번글입니다.", registerTime: "30.12.30" },
  { articleNo: 3, subject: "3번글입니다.", registerTime: "30.12.29" },
  { articleNo: 2, subject: "2번글입니다.", registerTime: "30.12.28" },
  { articleNo: 1, subject: "1번글입니다.", registerTime: "30.12.27" },
];
</script>

<template>
  <div class="container text-center mt-3">
    <h1>router03(이름이 있는 라우트)</h1>
    <div class="alert alert-info" role="alert">자유롭게 글쓰는 공간</div>
    <table class="table table-hover">
      <thead>
        <tr>
          <th>글번호</th>
          <th>제목</th>
          <th>작성일</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="article in articles" :key="article.articleNo">
          <td>{{ article.articleNo }}</td>
          <td>
            <!-- router-link를 사용하여 라우트로 이동 -->
            <!-- 방법1 -->
            <!-- <a :href="'/boardview3/' + article.articleNo"> -->
            <!-- 방법2 -->
            <!-- params : 경로 파라미터 -->
            <!-- query  : 쿼리 파라미터 -->
            <router-link :to="{ name: 'boardview3', params: { no: article.articleNo }, query: { test: 1 } }">
              {{ article.subject }}
            </router-link>
            <!-- 방법3 -->
            <!-- <a @click="router.push({ name: 'boardview3', params: { no: article.articleNo } })">
              {{ article.subject }}
            </a> -->
          </td>
          <td>{{ article.registerTime }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped></style>
