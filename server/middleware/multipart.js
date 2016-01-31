export default async function (ctx, next) {
  if (ctx.request.header['content-type'] && ctx.request.header['content-type'].includes('multipart/form-data')) {
    ctx.request.body = ctx.request.body.fields
  }

  await next()
}
