
import Axios from 'axios';
import Config from './config';
import { requestSuccess, requestFail, responseSuccess, responseFail } from './interceptors';

// 全局 axios 实例
const axiosInstance = Axios.create(Config);

// 请求拦截
axiosInstance.interceptors.request.use(requestSuccess, requestFail);

// 响应拦截
axiosInstance.interceptors.response.use(responseSuccess, responseFail);


class Http {
    constructor() {
        this.axios = axiosInstance;
    }

    /**
     * 创建取消令牌
     */
    createCancelToken() {
        const cancelToken = Axios.CancelToken;
        return cancelToken.source();
    }

    /**
     * get 请求
     * @param url
     * @param params
     * @param cfg
     * @returns {AxiosPromise<any>}
     */
    get(url, params = {}, cfg = {}) {
        const cancelSource = params._cancelSource || this.createCancelToken();
        cfg = {
            _cancel: cancelSource.cancel,
            cancelToken: cancelSource.token,
            // 默认:false; 是否重复发送请求
            _isRepeat: false,
            // 默认:true; 当不可重复请求时, true:取消之前的请求; false:取消之后的请求
            _isCancelBefore: true,
            // 默认:false; 是否自已处理错误请求，false 框架统一处理,true:框架不做任何处理
            _isHandleError: false,
            ...cfg,
        };
        params = {
            ...params,
            s: window['$openid'] || 0,
            _T: new Date().getTime(),
        };
        return this.axios.get( url, { params, ...cfg});
    }

    /**
     * post 请求
     * @param url
     * @param params
     * @param cfg
     * @returns {AxiosPromise<any>}
     */
    post(url, params = {}, cfg = {}) {
        const cancelSource = params._cancelSource || this.createCancelToken();
        cfg = {
            _cancel: cancelSource.cancel, //取消函数
            cancelToken: cancelSource.token,
            // 默认:false; 是否重复发送请求
            _isRepeat: false,
            // 默认:false(post的默认值与get的相反); 当不可重复请求时, true:取消之前的请求; false:取消之后的请求
            _isCancelBefore: false,
            // 默认:false; 是否自已处理错误请求，false 框架统一处理,true:框架不做任何处理
            _isHandleError: false,
            ...cfg,
        };
        params = {
            ...params,
            s: window['$openid'] || 0,
            _T: new Date().getTime(),
        };
        return this.axios.post( url, params, cfg);
    }
}

export default Http;
const HttpInstance = new Http();
export { HttpInstance, axiosInstance };
