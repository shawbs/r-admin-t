
import Qs from 'qs';

export default {
    url: '/',
    baseURL: '',
    method: 'GET',
    /* `transformRequest`允许在请求数据发送到服务器之前对其进行更改
    这只适用于请求方法'PUT'，'POST'和'PATCH'
    数组中的最后一个函数必须返回一个字符串，一个 ArrayBuffer或一个 Stream */
    transformRequest: [
        data => {
            data = Qs.stringify(data, {
                arrayFormat: 'repeat',
                serializeDate: d => d.getTime(),
            });
            return data;
        },
    ],
    headers: {
        // ...GlobalVar.reqHeaders,
        // 'Content-Type': 'application/x-www-form-urlencoded',
        // 'token': '',
    },
    params: {},
    /* `paramsSerializer`是一个可选的函数，负责序列化`params`
    (e.g. https:/*www.npmjs.com/package/qs, http:/*api.jquery.com/jquery.param/) */
    paramsSerializer: function(params) {
        return Qs.stringify(params, {
            arrayFormat: 'repeat',
            serializeDate: d => d.getTime(),
        });
    },
    data: {},
    timeout: 30000,
    withCredentials: false,
    responseType: 'json',
    maxContentLength: 2000,
    validateStatus: function(status) {
        return status >= 200 && status < 300; // default
    },
    maxRedirects: 5,
};
