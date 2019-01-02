
import Http from './base'
import config from '@/config'

class Report extends Http {
    constructor(){
        super()
        this.baseUrl = config.baseUrl
    }
    getOfficials(){
        return super.get(this.baseUrl + '/asus/events/yearstat/getinfo/')
    }

    getReport({type, userType}){
        return super.get(this.baseUrl + '/asus/events/yearstat/staffpicture/', {type, userType})
    }

    getChange(){
        return super.get(this.baseUrl + '/asus/events/yearstat/change/')
    }
}

export default new Report();
