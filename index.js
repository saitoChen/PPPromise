/*
 * @Author: chenjianfeng chenjianfeng93@163.com
 * @Date: 2024-04-10 22:10:37
 * @Description: 
 */
const PromiseA = require('./Promise/PromiseA')

new PromiseA((resolve, reject) => {
    resolve("数据")
  })
  .then((data) => {
    console.log('data ->', data)
  }, (err) => {
    console.log('err ->', err)
  })