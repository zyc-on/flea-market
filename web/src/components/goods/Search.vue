<template>
  <div class="search-wrapper">
    <van-search
      class="search"
      v-model="q"
      placeholder="请输入搜索关键词"
      @search="onSearch"
    />
    <van-icon @click="show = true" class="plus" size="20" name="add-o" />
    <van-action-sheet
      v-model="show"
      @select="onSelect"
      :actions="actions"
      cancel-text="取消"
    />
  </div>
</template>

<script>
export default {
  data () {
    return {
      q: '',
      show: false,
      actions: [
        { name: '上传商品', path: '/user/sell' },
        { name: '发布需求', path: '/user/need' }
      ]
    }
  },
  methods: {
    onCancle () {
      this.show = false
    },
    onSelect (item) {
      this.show = false
      this.$router.push('/user/sell')
    },
    onSearch () {
      this.$router.push({ path: '/goods/search', query: { q: this.q } })
    }
  }
}
</script>

<style lang="scss" scoped>
.search-wrapper {
  display: flex;
  align-items: center;

  .search {
    flex-grow: 1;
    background-color: #fafafa;
  }

  .plus {
    padding-right: 8px;
  }
}
</style>
