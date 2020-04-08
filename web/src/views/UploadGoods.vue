<template>
  <van-form @submit="onSubmit">
    <van-nav-bar title="填写商品信息" left-arrow @click-left="$router.go(-1)" />
    <van-field v-model="goods.name" label="商品名" placeholder="2-12个字" />
    <van-field
      readonly
      clickable
      :value="categoryValue"
      label="类别"
      placeholder="选择类别"
      @click="showPicker = true"
    />
    <van-popup v-model="showPicker" position="bottom">
      <van-picker
        show-toolbar
        title="类别"
        :columns="categories"
        @confirm="setCategory"
        @cancel="showPicker = false"
      />
    </van-popup>
    <van-field name="uploader" label="图片">
      <template #input>
        <van-uploader :max-count="5" v-model="fileList" :after-read="upload" />
      </template>
    </van-field>

    <van-field name="slider" label="成色">
      <template #input>
        <van-slider
          v-model="goods.rate"
          @change="onSliderChange"
          :min="0"
          :max="10"
        />
      </template>
    </van-field>

    <van-field v-model="goods.oprice" type="digit" label="原价" />
    <van-field v-model="goods.price" type="digit" label="出手价格" />

    <van-field
      label="描述"
      v-model="goods.description"
      maxlength="50"
      show-word-limit
      placeholder=""
    />

    <div style="margin: 16px;">
      <van-button round block type="info" native-type="submit">
        提交
      </van-button>
    </div>
  </van-form>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { uploadImage } from '../api/goods'

export default {
  data () {
    return {
      showPicker: false,
      fileList: [],
      goods: {
        name: '',
        images: '',
        rate: 0,
        oprice: '',
        price: '',
        description: '',
        categoryId: '',
        subcategoryId: ''
      },
      categoryValue: ''
    }
  },
  computed: mapState('category', ['categories']),
  methods: {
    ...mapActions('category', ['fetchCategories']),
    ...mapActions('user', ['uploadGoods']),
    setCategory (values, indexes) {
      this.categoryValue = values.join('/')
      this.goods.categoryId = this.categories[indexes[0]].id
      this.goods.subcategoryId = this.categories[indexes[0]].children[
        indexes[1]
      ].id
      this.$toast(this.categoryValue + indexes)
      this.showPicker = false
    },
    onSliderChange (value) {
      this.$toast(`${value}成新`)
    },
    upload (file) {
      file.status = 'uploading'
      file.message = '上传中'
      const data = new FormData()
      data.append('file', file.file)

      uploadImage(data)
        .then(res => {
          file.status = 'success'
          file.message = '上传成功'
          file.url = res.data
          this.goods.images += '?' + res.data
        })
        .catch(e => {
          file.status = 'failed'
          file.message = '上传失败'
        })
    },
    onSubmit () {
      this.uploadGoods(this.goods)
        .then(res => this.$router.push('/user'))
        .catch(err => console.log(err + '失败'))
    }
  },
  created () {
    !this.categories && this.fetchCategories()
  }
}
</script>

<style lang="scss" scoped></style>
