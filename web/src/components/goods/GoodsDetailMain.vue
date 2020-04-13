<template>
  <div class="detail-main">
    <div class="price">
      <span>{{ goods.price }}</span>
      <span>{{ goods.oprice }}</span>
      <span>{{ goods.rate }}</span>
    </div>
    <p class="description">
      {{ goods.description }}
    </p>
    <div class="images">
      <van-image
        v-for="(img, index) in images"
        :key="index"
        fill="contain"
        :src="`http://localhost:3000/images/goods/${img}`"
      />
    </div>
    <div class="date">
      <span>发布于{{ days }}天前</span>
      <span>浏览166 todo</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goods: Object
  },
  computed: {
    days () {
      return Math.floor(
        (new Date() - new Date(this.goods.updatedAt)) / (1000 * 3600 * 24)
      )
    },
    images () {
      const images = this.goods.images.split('?')
      images.shift()
      return images
    }
  }
}
</script>

<style lang="scss" scoped>
.price {
  padding: 8px 0;
  display: flex;
  align-items: center;

  span {
    font-size: 18px;
    color: red;
  }
  span:first-of-type::before {
    content: '￥';
    font-size: 14px;
  }

  span:nth-of-type(2) {
    // font-size: 14px;
    flex-grow: 1;
    text-decoration-line: line-through;
    margin-left: 8px;
    color: grey;
    opacity: 0.8;
  }
  span:last-of-type {
    font-size: 16px;
    color: #000;
  }
  span:last-of-type::after {
    content: '成新';
    font-size: 12px;
    color: grey;
  }
}

p.description {
  line-height: 1.6em;
}
.images {
  border-radius: 12px;
  .van-image {
    width: 100%;
  }
}

.date {
  display: flex;
  font-size: 12px;
  color: grey;
  justify-content: space-between;
  padding: 6px 0;
  border-bottom: 1px solid #f5f6f7;
}
</style>
