<template>
  <div>
    <div class="big-image">
      <img :src="images[currentImage]" alt="">
    </div>
    <div class="thumbs" v-for="(singleImage,index) in images">
      <img :src="singleImage" @click.prevent="onSelectImage(index)"/>
    </div>
  </div>
</template>


<style scoped>
  .thumbs {
    display: inline-block;
  }
  .thumbs img {
    max-width: 80px;
  }
</style>

<script>
  export default {
    name: 'image-viewer',
    data() {
      return {
        currentImage: 0,
        images: [
          'http://lorempixel.com/400/200/sports/1', 'http://lorempixel.com/400/200/sports/2',
        ],
      };
    },
    methods: {
      onSelectImage(index) {
        this.currentImage = index;
      },
    },
  };
</script>
