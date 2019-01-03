import { observable } from 'mobx'

class BaseStore {
    @observable title = 'asd'
    @observable state = 'done' //pending done error
}

const baseStore = new BaseStore()
export default BaseStore
export {
    baseStore
}