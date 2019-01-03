import Http from './base';
import mock from './mock/user';

class User extends Http{
    constructor(){
        super()
        this.useMock = true
    }

    getUserData(){
        return this.useMock ? mock.getUserInfo() : Promise.resolve(null)
    }
}

export default new User();
