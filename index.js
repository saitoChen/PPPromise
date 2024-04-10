/*
 * @Author: chenjianfeng chenjianfeng93@163.com
 * @Date: 2024-04-10 22:10:37
 * @Description: 
 */
const PromiseA = require('./Promise/PromiseA')

let promise = new PromiseA((resolve, reject) => {
  setTimeout(() => {
    resolve("数据")
  }, 2000)
})

promise.then(data => {
  console.log('data1 ->', data)
})

promise.then(data => {
  console.log('data1 ->', data)
})