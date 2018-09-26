import plupload from 'plupload'
import { Toast } from 'vant'

// 生成随机字符串
const random_string  = length => {
  const len = length || 32
  const chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678'
  const maxPos = chars.length
  let pwd = '';
  for (let i = 0; i < len; i++) {
    pwd += chars.charAt(Math.floor(Math.random() * maxPos));
  }
  return pwd
}

// 获取文件后缀名
const get_suffix = filename => {
  const pos = filename.lastIndexOf('.')
  let suffix = ''
  if (pos != -1) {
    suffix = filename.substring(pos)
  }
  return suffix
}


const get_uploaded_object_name = (filename, dir) => {
  const suffix = get_suffix(filename)
  return dir + '/' + random_string(10) + suffix
}

const createUploader = ({oss, sel, container, callback}) => {

  const set_upload_param = (uploader, filename, ret) => {

    const new_multipart_params = {
      'key' : get_uploaded_object_name(filename, oss.dir),
      'policy': oss.policy,
      'OSSAccessKeyId': oss.OSSAccessKeyId,
      'success_action_status' : '200', //让服务端返回200,不然，默认会返回204
      'callback' : oss.callback,
      'signature': oss.signature
    };

    uploader.setOption({
      'url': oss.host,
      'multipart_params': new_multipart_params
    });

    uploader.start();

  }

  const uploader = new plupload.Uploader({
    runtimes : 'html5',
    browse_button : sel,
    multi_selection: false,
    container: container,
    url : 'http://lyzbjbx.oss-cn-hangzhou.aliyuncs.com',
    filters: {
      mime_types :
        [ //只允许上传图片
          { title : "Image files", extensions : "jpg,jpeg,gif,png,bmp" }
        ],
      max_file_size : '10mb', //最大只能上传10mb的文件
      prevent_duplicates : false //不允许选取重复文件
    },
    init: {
      PostInit: function() {
        set_upload_param(uploader, '', false);
        const fileControl = container.querySelector('[type="file"]')
        fileControl.accept = 'image/gif, image/jpg, image/jpeg, image/png, image/png'
      },
      FilesAdded: function(up, files) {
        set_upload_param(up, '', false);
      },
      BeforeUpload: function(up, file) {
        set_upload_param(up, file.name, true);
        Toast.loading({
          mask: true,
          message: '上传中...',
          duration: 0
        });
      },
      FileUploaded: function(up, file, info) {
        const jsonString = info.response
        const json = JSON.parse(jsonString)
        callback(json)
        Toast.clear()
        Toast.success('上传成功')
      },
      Error: function(up, err) {
        Toast.success('上传失败，请重试')
        if (err.code == -600) {
          Toast('上传图片过大')
        }
        else if (err.code == -601) {
          Toast('只能上传图片类型')
        }
      }
    }
  })
  uploader.init()
}


export { createUploader }
