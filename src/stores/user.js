import {observable, action, runInAction, autorun } from 'mobx'
import User from '@/api/user'
import BaseStore from './base'

class UserStore extends BaseStore{

    constructor(){
        super()
        autorun(()=>{
            console.log(this.userId)
        })
    }

    @observable userId = '1111223'
    @observable userData = null

    @action.bound
    setUserId(userId){
        this.userId = userId
    }

    @action.bound
    setUserData(data){
        this.userData = data
    }

    @action
    async getUserData() {
        this.githubProjects = []
        this.state = "pending"
        try {
            const userData = await User.getUserData() // 用 yield 代替 await
            // 异步代码块会被自动包装成动作并修改状态
            runInAction(()=>{
                this.state = "done"
                this.setUserData({a:1})
            })
            return userData
        } catch (error) {
            runInAction(()=>{
                this.state = "error"
            })
            return null
        }
    }
}

const userStore = new UserStore()
export default UserStore
export {
    userStore
}
