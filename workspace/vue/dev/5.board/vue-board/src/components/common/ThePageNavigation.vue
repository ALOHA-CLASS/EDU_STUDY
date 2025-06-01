<script setup>
import { computed } from "vue";

const props = defineProps({ currentPage: Number, totalPage: Number });
// defineEmits(["pageChange"])
// pageChange 이벤트를 정의합니다.
// 이 이벤트는 부모 컴포넌트에서 페이지 변경을 처리할 수 있도록 합니다.
const emit = defineEmits(["pageChange"]); 

const navigationSize = parseInt(import.meta.env.VITE_ARTICLE_NAVIGATION_SIZE);

// 여기서 computed를 쓰는 이유는 
// props.currentPage와 props.totalPage가 변경될 때마다 자동으로 계산된 값을 업데이트하기 위해서입니다.
// computed는 Vue의 반응형 시스템을 활용하여, 의존하는 값이 변경될 때마다 자동으로 다시 계산됩니다.
// 따라서, startPage와 endPage는 props.currentPage와 props.totalPage가 변경될 때마다 자동으로 업데이트됩니다.
const startPage = computed(() => {
  return parseInt((props.currentPage - 1) / navigationSize) * navigationSize + 1;
});

const endPage = computed(() => {
  let lastPage =
    parseInt((props.currentPage - 1) / navigationSize) * navigationSize + navigationSize;
  return props.totalPage < lastPage ? props.totalPage : lastPage;
});

const endRange = computed(() => {
  return parseInt((props.totalPage - 1) / navigationSize) * navigationSize < props.currentPage;
});

function range(start, end) {
  const list = [];
  for (let i = start; i <= end; i++) list.push(i);
  return list;
  //   return Array(end - start + 1)
  //     .fill()
  //     .map((val, i) => start + i);
}

function onPageChange(pg) {
  console.log(pg + "로 이동!!!");
  emit("pageChange", pg);
}
</script>

<template>
  <div class="row">
    <ul class="pagination justify-content-center">
      <li class="page-item">
        <a class="page-link" @click="onPageChange(1)">최신</a>
      </li>
      <li class="page-item">
        <a class="page-link" @click="onPageChange(startPage == 1 ? 1 : startPage - 1)">이전</a>
      </li>
      <template v-for="pg in range(startPage, endPage)" :key="pg">
        <li :class="currentPage === pg ? 'page-item active' : 'page-item'">
          <a class="page-link" @click="onPageChange(pg)">{{ pg }}</a>
        </li>
      </template>
      <li class="page-item">
        <a class="page-link" @click="onPageChange(endRange ? totalPage : endPage + 1)">다음</a>
      </li>
      <li class="page-item"><a class="page-link" @click="onPageChange(totalPage)">마지막</a></li>
    </ul>
  </div>
</template>

<style scoped>
a {
  cursor: pointer;
}
</style>
