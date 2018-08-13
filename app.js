// 导入koa，和koa 1.x不同，在koa2中，我们导入的是一个class，因此用大写的Koa表示:
const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
// 导入controller middleware:
const controller = require('./controller');
// 创建一个Koa对象表示web app本身:
const app = new Koa();
const cors = require('koa2-cors');
const session = require('koa-session');
const static = require('koa-static'); 
const path = require("path")
app.use(static(
    path.join( __dirname,  'public')
)) 
app.keys = ['some secret hurr'];
  const CONFIG = {
    key: 'koa:sess', /** (string) cookie key (default is koa:sess) */
    /** (number || 'session') maxAge in ms (default is 1 days) */
    /** 'session' will result in a cookie that expires when session/browser is closed */
    /** Warning: If a session cookie is stolen, this cookie will never expire */
    maxAge: 86400000,
    overwrite: true, /** (boolean) can overwrite or not (default true) */
    httpOnly: true, /** (boolean) httpOnly or not (default true) */
    signed: true, /** (boolean) signed or not (default true) */
    rolling: false, /** (boolean) Force a session identifier cookie to be set on every response. The expiration is reset to the original maxAge, resetting the expiration countdown. (default is false) */
    renew: false, /** (boolean) renew session when session is nearly expired, so we can always keep user logged in. (default is false)*/
  };
// 跨域
app.use(cors({credentials:true}));
app.use(session(CONFIG, app));
// 处理post参数
app.use(bodyParser());
// add router middleware:
app.use(controller());
// 对于任何请求，app将调用该异步函数处理请求：
// app.use(async (ctx, next) => {
//     if(ctx.method==='GET'){
//         ctx.response.message= 'hello World'
//     }
//     if(ctx.method==='POST'){
//         ctx.response.status = 401;
//     }else{
//         await next();
//     }
// });

// 在端口3000监听:
app.listen(3000);
console.log('app started at port 3000...');