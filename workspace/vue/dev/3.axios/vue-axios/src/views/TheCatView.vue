<script setup>
// ref: Vue의 반응형 데이터 관리 기능을 사용하여 컴포넌트 상태를 관리합니다.
import { ref, onMounted } from 'vue';
/// axios: HTTP 클라이언트 라이브러리로, API 요청을 보내고 응답을 처리합니다.
import axios from 'axios';

// const VITE_RANDOM_DOG_API_URL = import.meta.env.VITE_RANDOM_DOG_API_URL;
// const VITE_RANDOM_CAT_API_URL = import.meta.env.VITE_RANDOM_CAT_API_URL;
// const { VITE_RANDOM_CAT_API_URL, VITE_RANDOM_DOG_API_URL } = import.meta.env;
const { VITE_RANDOM_CAT_API_URL: cat_url, VITE_RANDOM_DOG_API_URL: dog_url } = import.meta.env;

// ref([]) : Vue의 반응형 데이터 구조로, 빈 배열로 초기화
const cats = ref([]);

// ⭐ 컴포저블 없이 고양이 데이터를 관리하는 방법
// randomCatImg: 고양이 이미지를 랜덤으로 가져오는 함수
const randomCatImg = () => {
  // axios를 사용하여 The Cat API에서 고양이 이미지 데이터를 가져옵니다.
  // axios.get('https://api.thecatapi.com/v1/images/search?limit=10')
  // axios.get(VITE_RANDOM_DOG_API_URL + '?limit=10')
  axios.get(cat_url + '?limit=10')
    // 요청이 성공하면 응답 데이터를 처리합니다.
    // 방법1 - 구조분해 할당
    .then( ({data}) => {
      // 응답 데이터에서 고양이 이미지의 ID와 URL을 추출하여 cats 배열에 저장합니다.
      // ✅ ref 를 접근할 때는 .value 를 사용해야 합니다.
      cats.value = data.map(cat => ({
        id: cat.id,
        url: cat.url
      }));
    })
    // 방법2 - response.data 를 사용
    // .then(response => {
    //   cats.value = response.data.map(cat => ({
    //     id: cat.id,
    //     url: cat.url
    //   }));
    // })
    // 요청이 실패하면 에러를 콘솔에 출력합니다.
    .catch(error => {
      console.error('Error fetching cat images:', error);
    });
};

onMounted(() => {
  // 컴포넌트가 마운트될 때 randomCatImg 함수를 호출하여 초기 고양이 이미지를 가져옵니다.
  randomCatImg();
});

// ⭐ useCats: 고양이 관련 데이터를 관리하는 컴포저블을 가져옵니다.
// import { useCats } from '../composables/useCats';

// const { cats, randomCatImg } = useCats();

// onMounted(() => {
//   randomCatImg();
// });

</script>

<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-12">
        <h2 class="my-3 py-3 shadow-sm bg-light text-center">
          <mark class="sky">귀여운 냥냥이</mark>
        </h2>
      </div>
      <div class="col-lg-12 text-center mb-3">
        <button type="button" class="btn btn-outline-primary" @click="randomCatImg">랜덤 고양이 사진 얻기</button>
      </div>
      <div class="row">
        <div class="card m-1 p-2" style="width: 18rem;" v-for="cat in cats" :key="cat.id">
          <img :src="cat.url" class="card-img-top" alt="...">
          <div class="card-body">
            <p class="card-text">{{ cat.id }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
mark.sky {
  background: linear-gradient(to top, #54fff9 20%, transparent 30%);
}
</style>
