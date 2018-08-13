const captchapng = require('captchapng');
var very = {}
var fn_getKaptchaImage= async (ctx, next)=>{
  const cap = parseInt(Math.random() * 9000 + 1000);
    const p = new captchapng(80, 30, cap);
    p.color(0, 0, 0, 0);
    p.color(80, 80, 80, 255);
    const base64 = p.getBase64();
    const imgbase64 = new Buffer.from(base64,'base64');
    //官网少了这一步
    ctx.session.very = cap;
    ctx.status = 200
    ctx.body = imgbase64
    ctx.type = 'image/png';
}
var getinspectKaptchaImage = async (ctx, next)=>{
  let cap = String(ctx.session.very)
  let {kaptcha} = ctx.request.body
  if(kaptcha === cap){
    ctx.status = 200
    ctx.body = {
      data:{},
      msg: "成功",
      status: true
    }
  }else {
    ctx.status = 200
    ctx.body = {
      data:{},
      msg: "验证码错误",
      status: 1
    }
  }
}
module.exports = {
  'GET /kaptcha/getKaptchaImage': fn_getKaptchaImage,
  'POST /kaptcha/getinspectKaptchaImage': getinspectKaptchaImage
};