let t1 = +new Date() + 1 * 1000

t1 = t1.toString()
setTimeout(() => {
  console.log(new Date() - t1)
}, 2000)
