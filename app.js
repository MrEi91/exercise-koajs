const Koa = require("koa");
const Router = require("koa-router");
const bodyParser = require("koa-bodyparser");

const app =  new Koa();
app.use(bodyParser());

const router = new Router();

router.post("/hello", async(ctx) => {
    let name = ctx.request.body.name;

    ctx.body = {
        "message" : `Hello ${name}`
    }
});

app.use(router.routes()).use(router.allowedMethods());
app.listen(3000, async() => console.log("This Apps is running on port 3000 !"));