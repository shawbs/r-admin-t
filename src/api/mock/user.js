
import M from './base/base'

class Data extends M{
	
	async getUserInfo(ajax = true){
        const res = this.m.mock({
			"user_id|1-9999": 100,
			"qrcode": this.r.image('200x100', '#02adea', 'Hello'),
			"username": this.r.cname(),
			"openid": this.r.string(10),
		})
		return await (ajax ? this.createAjaxData(res) : res)
    }
}

export default new Data()
