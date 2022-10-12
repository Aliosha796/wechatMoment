<template>
  <HomeBanner></HomeBanner>
  <div class="listWapper">
    <NewsCard></NewsCard>
  </div>
</template>
<script setup>
import HomeBanner from "../components/HomeBanner.vue";
import NewsCard from "../components/NewsCard.vue";
</script>
<style lang="scss" scoped>
.listWapper {
  width: 100%;
  margin-top: 30px;
}
</style>
