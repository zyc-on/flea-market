<template>
  <van-form @submit="submit">
    <van-nav-bar title="填写个人信息" left-arrow @click-left="$router.go(-1)" />
    <van-field label="昵称" v-model="profile.username" placeholder="" />

    <van-field name="uploader" label="头像">
      <template #input>
        <van-uploader :max-count="1" v-model="fileList" :after-read="upload" />
      </template>
    </van-field>

    <van-field label="个性签名" v-model="profile.motto" placeholder="" />

    <van-field name="radio" label="性别">
      <template #input>
        <van-radio-group v-model="profile.sex" direction="horizontal">
          <van-radio name="0">小姐姐</van-radio>
          <van-radio name="1">小哥哥</van-radio>
        </van-radio-group>
      </template>
    </van-field>

    <van-field
      readonly
      clickable
      name="area"
      :value="profile.location"
      label="地区选择"
      placeholder="点击选择省市区"
      @click="showArea = true"
    />
    <van-popup v-model="showArea" position="bottom">
      <van-area
        :area-list="areaList"
        @confirm="onAreaConfirm"
        @cancel="showArea = false"
      />
    </van-popup>

    <van-field label="学校" v-model="profile.school" placeholder="" />
    <div style="margin: 16px;">
      <van-button round block type="info" native-type="submit">
        提交
      </van-button>
    </div>
  </van-form>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { uploadAvatar } from '@/api/user'
export default {
  data () {
    return {
      fileList: [],
      showArea: false,
      areaList: {
        province_list: {
          110000: '北京市',
          120000: '天津市'
        },
        city_list: {
          110100: '北京市',
          110200: '县',
          120100: '天津市',
          120200: '县'
        },
        county_list: {
          110101: '东城区',
          110102: '西城区',
          110105: '朝阳区',
          110106: '丰台区',
          120101: '和平区',
          120102: '河东区',
          120103: '河西区',
          120104: '南开区',
          120105: '河北区'
        }
      }
    }
  },
  computed: mapState('user', ['profile']),
  methods: {
    upload (file) {
      file.status = 'uploading'
      file.message = '上传中'
      const data = new FormData()
      data.append('file', file.file)
      uploadAvatar(data)
        .then(res => {
          file.status = 'success'
          file.message = '上传成功'
          file.url = res.data
          this.profile.avatar = res.data
        })
        .catch(e => {
          file.status = 'failed'
          file.message = '上传失败'
        })
    },

    ...mapActions('user', ['updateProfile']),

    onAreaConfirm (values) {
      this.profile.location = values.map(item => item.name).join('')
      this.showArea = false
    },

    submit () {
      this.updateProfile(this.profile)
        .then(res => this.$router.push('/user'))
        .catch(err => console.log(err + '失败'))
    }
  }
}
</script>

<style></style>
