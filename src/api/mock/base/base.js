/*
 * @Author: shawbs
 * @Describe: 模拟数据
 */

import Mock from 'mockjs'

export default class M{
    constructor(){
        this.m = Mock;
        this.r = Mock.Random;
    }

    createAjaxData (data, errorCode = 0, errorMsg = '') {
        return {
            data,
            errorCode,
            errorMsg
        }
    }

}