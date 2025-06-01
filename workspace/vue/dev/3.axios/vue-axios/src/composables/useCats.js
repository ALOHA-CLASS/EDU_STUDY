// useCats.js
// 고양이 이미지 데이터를 가져오는 Composition API Composable
import { ref } from 'vue';
import axios from 'axios';

export function useCats() {
  const cats = ref([]);

  // 고양이 이미지를 랜덤으로 가져오는 함수
  const randomCatImg = () => {
    axios.get('https://api.thecatapi.com/v1/images/search?limit=10')
      .then(({ data }) => {
        cats.value = data.map(cat => ({
          id: cat.id,
          url: cat.url
        }));
      })
      .catch(error => {
        console.error('Error fetching cat images:', error);
      });
  };

  return { cats, randomCatImg };
}
