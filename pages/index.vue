<template>
  <div>
    <div class="header">
      <Navigation />
    </div>
    <div class="max-w-5xl shadow-md m-auto min-h-screen pt-3">
      <div class="px-2">
        <div class="topAnime">
          <div class="h-10 w-full bg-green-900">
            <h1 class="text-2xl px-4 text-white font-bold">UpComing Anime:</h1>
          </div>
          <TopAnime :topAnime="topAnime" />
        </div>
      </div>
      <div>
        <div class="h-10 w-full bg-green-900">
          <h1 class="text-2xl px-4 text-white font-bold">Current Season:</h1>
        </div>
        <div class="currentSeason flex flex-wrap justify-center">
          <Card v-for="anime in response" :key="anime.mal_id" class="mx-auto">
            <template #image>
              <img
                :src="anime.images.webp.image_url"
                :alt="anime.title"
                @click="() => goAnimePage(anime)"
              />
            </template>
            <template #content>
              <h2 class="font-bold">{{ anime.title }}</h2>
            </template>
            <template #episode>
              <p>Episode: {{ anime.episodes }}</p>
            </template>
          </Card>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const topAnime = ref(null);
const response = ref([]);
import { useRouter } from "vue-router";

onBeforeMount(() => {
  getData();
});
onMounted(() => {
  getData();
});

const router = useRouter()

const goAnimePage = (anime) => {
  router.push(`/anime/${anime.mal_id}`)
}

async function getData() {
  try {
    const { data, error } = await useFetch("https://api.jikan.moe/v4/seasons/now");
    if (data.value) {
      response.value = data.value.data;
    }

    const { data: result } = await useLazyFetch("https://api.jikan.moe/v4/top/anime");
    if (result.value) {
      topAnime.value = result.value.data;
    }
  } catch (error) {
    console.log(error);
  }
}
</script>

<style></style>
