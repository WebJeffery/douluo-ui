<template>
  <div>
    <h3 class="pb10">上传组件</h3>
    <div class="uploader-container">
      <div class="avatar-uploader">
        <p style="color: #666">图片裁剪</p>
        <NwUploader :isCropper='isCropper' :uploadConfig='uploadConfig' :cropperConfig='uploadConfig'>
          <i class="el-icon-plus avatar-uploader-icon"></i>
        </NwUploader>
      </div>

      <div class="avatar-uploader">
        <p style="color: #666">无需裁剪</p>
        <NwUploader :uploadConfig='uploadConfig' :cropperConfig='uploadConfig'>
          <i class="el-icon-plus avatar-uploader-icon"></i>
        </NwUploader>
      </div>

      <div class="avatar-uploader">
        <p style="color: #666">获取裁剪后的图片</p>
        <NwUploader :isCropper='isCropper' :uploadConfig='uploadConfig2' :cropperConfig='uploadConfig'>
          <i class="el-icon-plus avatar-uploader-icon"></i>
        </NwUploader>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      uploadConfig: {
        action: 'https://jsonplaceholder.typicode.com/posts/',
        name: 'file'
      },
      uploadConfig2: {
        action: 'https://jsonplaceholder.typicode.com/posts/',
        name: 'file',
        beforeUpload: (file) => {
          // 获取裁剪后的图片
          window.open(URL.createObjectURL(file))
          return false
        }
      },
      cropperConfig: {
        mode: 'contain'
      },
      isCropper: true
    }
  },
}
</script>

<style>
  .uploader-container {
    display: flex;
    justify-content: flex-start;
    margin-top: 20px;
  }
  .avatar-uploader .el-upload {
    margin-right: 30px;
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
    border-radius: 8px;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
