<template>
  <div class="card-slider">
    <span v-for="item,index in onlyFirstFew" :key="index">
        <img :src="item.images.webp.image_url" :alt="item.title" class="lable" @click="goDetailAnime
        (item)">
    </span>
  </div>
</template>

<script setup>
    const props = defineProps({
        topAnime:{
            type : Array,
            required: true
        }
    })
    const {topAnime} = toRefs(props)

    const onlyFirstFew = computed(() => {
        if (!topAnime.value) return
        return topAnime.value.slice(0, 9)
    })
    const router = useRouter()
    const goDetailAnime
     = (anime) => {
        router.push(`/anime/${anime.mal_id}`)
    }
</script>

<style scoped>
.card-slider {
    margin: 60px auto;
    text-align: center;
    
}
.lable{
    position: relative;
    margin : 0 -30px;
    display: inline-block;
    width: 150px;
    height: 200px;
    border-radius: 5px; 
    box-shadow: 0 10px 6px 6px #777;
    -webkit-transform : skew(-20deg) rotate(-20deg);
    transform: skew(-20deg) rotate(-20deg);
    -webkit-transition: .3s;
    transition: .3s;
    
}
.lable:hover{
    margin: 0 50px;
    -webkit-transform: none;
    transform: none;
    
}
</style>
