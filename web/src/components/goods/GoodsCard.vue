<template>
  <div class="goods-card" @click="$router.push(`/goods/id/${goods.id}`)">
    <van-image
      height="200"
      fit="contain"
      :src="`http://localhost:3000/images/goods/${goods.images.split('?')[1]}`"
    />
    <p>{{ goods.name }}</p>
    <!-- ${goods.images.split('?')[1] -->
    <div class="info">
      <span>￥{{ goods.price }}</span>
      <div>
        <van-image
          round
          fit="cover"
          width="14"
          height="14"
          :src="`http://localhost:3000/images/avatar/${goods.user.avatar}`"
        />
        <span>{{ goods.user.username }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goods: Object
  }
}
</script>

<style lang="scss" scoped>
.goods-card {
  width: 49%;
  border-radius: 8px;
  background-color: #fff;
  overflow: hidden;
  margin-bottom: 6px;
  font-size: 14px;

  p {
    font-weight: 600;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 0 4px;
  }

  .info {
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
      color: red;
    }

    div {
      height: 100%;
      display: flex;
      // align-items: center;

      span {
        font-size: 11px;
        padding-right: 6px;
        color: grey;
      }
    }
  }
}
</style>
