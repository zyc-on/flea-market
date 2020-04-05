<template>
  <div>
    <van-nav-bar title="修改个人信息" left-arrow @click-left="$router.go(-1)" />
    <van-field label="昵称" v-model="profile.username" placeholder="" />

    <div class="avatar-uploader">
      <span>头像</span>
      <van-uploader :max-count="1" v-model="fileList" :after-read="upload" />
    </div>
    <van-field label="个性签名" v-model="profile.motto" placeholder="" />
    <van-field label="学校" v-model="profile.school" placeholder="" />
    <van-cell center title="是小姐姐吗">
      <template #right-icon>
        <van-switch v-model="profile.sex" size="24" />
      </template>
    </van-cell>
    <div class="operations">
      <van-button @click="$router.go(-1)" block plain type="warning" size="small"
        >取消修改</van-button
      >
      <van-button
         @click="submit"
        block
        plain
        type="primary"
        size="small"
        >保存修改</van-button
      >
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { uploadAvatar } from '../api/user'
export default {
  data () {
    return {
      fileList: []
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
          this.fileList[0].status = 'success'
          this.fileList[0].message = '上传成功'
          this.fileList[0].url = res.data
          this.profile.avatar = res.data
        })
        .catch(e => {
          this.fileList[0].status = 'failed'
          this.fileList[0].message = '上传失败'
        })
    },
    ...mapActions('user', ['updateUser']),
    submit () {
      this.updateUser(this.profile)
        .then(res => this.$router.go(-1))
        .catch(err => console.log(err + '失败'))
    }
  }
}
</script>

<style lang="scss" scoped>
div:first-of-type {
  background: #fff;
}

.avatar-uploader {
  display: flex;
  align-items: center;
  margin-left: 14px;
  margin-top: 7px;
  border-bottom: 1px solid #ebedf0;

  span {
    font-size: 14px;
    margin-right: 14px;
  }
}

.operations {
  display: flex;

  button {
    margin: 8px;
  }
}
</style>
