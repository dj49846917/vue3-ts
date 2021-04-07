/** 
 * param 将要转为URL参数字符串的对象 
 * key URL参数字符串的前缀 
 * encode true/false 是否进行URL编码,默认为true 
 *  
 * return URL参数字符串 
 */
export function urlEncode(param: any, key: string, encode: boolean) {
    if (param == null) return '';
    var paramStr = '';
    var t = typeof (param);
    if (t == 'string' || t == 'number' || t == 'boolean') {
        paramStr += '&' + key + '=' + ((encode == null || encode) ? encodeURIComponent(param) : param);
    } else {
        for (var i in param) {
            var k = key == null ? i : key + (param instanceof Array ? '[' + i + ']' : i);
            paramStr += urlEncode(param[i], k, encode);
        }
    }
    return paramStr;
};

/**
 * 
 * @param uri 接口路径
 * @param params 参数 
 * 封装接口
 */
export function requestPackage(uri: string, params: object) {
    if (JSON.stringify(params) !== "{}") {
        return `${uri}?${urlEncode(params, "", true)}`
    }
    return uri
}