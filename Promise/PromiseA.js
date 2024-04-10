/*
 * @Author: chenjianfeng chenjianfeng93@163.com
 * @Date: 2024-04-10 22:10:33
 * @Description: 
 */
const PENDING = 'PENDING'
const RESOLVE = 'RESOLVE'
const REJECT = 'REJECT'


class PromiseA {
    constructor(executor) {
        this.status = PENDING
        this.value = undefined
        this.reason = undefined

        // 使用发布订阅模式保存异步的onFulfilled和onReject，在resolve执行时去释放
        this.onFulfilledCallbacks = []
        this.onRejectedCallbacks = []

        let resolve = (val) => {
            if (this.status === PENDING) {
                this.value = val
                this.status = RESOLVE
                this.onFulfilledCallbacks.forEach(fn => fn())
            }
        }
        let reject = (reason) => {
            if (this.status === PENDING) {
                this.reason = reason
                this.status = REJECT
                this.onRejectedCallbacks.forEach(fn => fn())
            }
        }
        try {
            executor(resolve, reject)
        } catch (e) {
            reject(e)
        }
    }
    then(onFulfilled, onRejected) {
        if (this.status === RESOLVE) {
            onFulfilled(this.value)
        }
        if (this.status === REJECT) {
            onReject(this.reason)
        }
        if (this.status === PENDING) {
            // 订阅
            this.onFulfilledCallbacks.push(() => {
                onFulfilled(this.value)
            })
            this.onRejectedCallbacks.push(() => {
                onRejected(this.reason)
            })
        }
    }
}

module.exports = PromiseA