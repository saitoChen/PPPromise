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

        let resolve = (val) => {
            if (this.status === PENDING) {
                this.value = val
                this.status = RESOLVE
            }
        }
        let reject = (reason) => {
            if (this.status === PENDING) {
                this.reason = reason
                this.status = REJECT
            }
        }
        try {
            executor(resolve, reject)
        } catch (e) {
            reject(e)
        }
    }
    then(onFulfilled, onReject) {
        if (this.status === RESOLVE) {
            onFulfilled(this.value)
        }
        if (this.status === REJECT) {
            onReject(this.reason)
        }
    }
}

module.exports = PromiseA