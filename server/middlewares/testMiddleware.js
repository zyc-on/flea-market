module.exports = async (ctx, next) => {
  ctx.body = {
    test: '23333',
  }
  console.log('middle')
  

  await next()
}
