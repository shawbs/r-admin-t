import { observable } from 'mobx'

class UserStore {
    @observable user_id = '1111223'
}

export default new UserStore()
