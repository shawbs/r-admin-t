import { observable } from 'mobx'

class AppStore {
    @observable title = 'asd'
}

export default new AppStore()