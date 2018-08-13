const multer = require('koa-multer');
//配置    
var storage = multer.diskStorage({
    //文件保存路径
    destination: function (req, file, cb) {
        cb(null, 'public/uploads/')  //注意路径必须存在
    },
    //修改文件名称
    filename: function (req, file, cb) {
        var fileFormat = (file.originalname).split(".");
        cb(null,Date.now() + "." + fileFormat[fileFormat.length - 1]);
    }
})
//加载配置
const upload = multer({ storage: storage })
const fn_upload =[upload.single('file'), async (ctx, next) => {
  ctx.body = {
        data: `${ctx.origin}/uploads/${ctx.req.file.filename}`,
        msg: '上传成功',
        status:1
  }
}]
module.exports = {
  'POST /cust/userFilePicture': fn_upload,
  'POST /cust/uploadPicture': fn_upload
};