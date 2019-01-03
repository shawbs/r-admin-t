
import M from './base/base'

class Data extends M{
	
	async getOfficials (ajax = true) {
		let arr = [];
		for(let i = 0; i< 3; i++){
			let report = this.m.mock({
				"id|1-9": 1,
				"num1|1-9999": 1111,
				"num2|1-9999": 1111,
				"num3|1-9999": 111,
				"num4|1-9999": 1
			})
			arr.push({...report})
		}
		return await (ajax ? this.createAjaxData([...arr]) : [...arr])
	}

	async getReport(ajax = true) {
		const res = this.m.mock({
			"user_id|1-999": 100,
			"qrcode": this.r.image('200x100', '#02adea', 'Hello'),
			"num2|1-999": 100,
			"num3|1-999": 100,
			"num4|1-999": 100
		})
		return await (ajax ? this.createAjaxData(res) : res)
	}
}

export default new Data()
