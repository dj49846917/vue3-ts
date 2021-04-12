import { DicType } from "@/types/types";

/**
 * 对象转url参数
 * @param {*} data,对象
 * @param {*} isPrefix,是否自动加上"?"
 */
export function queryParams(data: {[propName: string]: any} = {}, isPrefix: boolean = true, arrayFormat = 'brackets') {
  let prefix = isPrefix ? '?' : ''
  let _result = []
  if (['indices', 'brackets', 'repeat', 'comma'].indexOf(arrayFormat) == -1) arrayFormat = 'brackets';
  for (let key in data) {
      let value = data[key]
      // 去掉为空的参数
      if (['', undefined, null].indexOf(value) >= 0) {
          continue;
      }
      // 如果值为数组，另行处理
      if (value.constructor === Array) {
          // e.g. {ids: [1, 2, 3]}
          switch (arrayFormat) {
              case 'indices':
                  // 结果: ids[0]=1&ids[1]=2&ids[2]=3
                  for (let i = 0; i < value.length; i++) {
                      _result.push(key + '[' + i + ']=' + value[i])
                  }
                  break;
              case 'brackets':
                  // 结果: ids[]=1&ids[]=2&ids[]=3
                  value.forEach(_value => {
                      _result.push(key + '[]=' + _value)
                  })
                  break;
              case 'repeat':
                  // 结果: ids=1&ids=2&ids=3
                  value.forEach(_value => {
                      _result.push(key + '=' + _value)
                  })
                  break;
              case 'comma':
                  // 结果: ids=1,2,3
                  let commaStr = "";
                  value.forEach(_value => {
                      commaStr += (commaStr ? "," : "") + _value;
                  })
                  _result.push(key + '=' + commaStr)
                  break;
              default:
                  value.forEach(_value => {
                      _result.push(key + '[]=' + _value)
                  })
          }
      } else {
          _result.push(key + '=' + value)
      }
  }
  return _result.length ? prefix + _result.join('&') : ''
}
/**
 * 
 * @param uri 接口路径
 * @param params 参数 
 * 封装接口
 */
export function requestPackage(uri: string, params: object) {
  if (JSON.stringify(params) !== "{}") {
    return `${uri}${queryParams(params)}`
  }
  return uri
}

// 根据数据字典文字返回对应的码值
/**
 * 
 * @param arr: 字典返回的数组 
 * @param name: 文字 
 * @returns 
 */
export function dicNameToDicCode(arr: DicType, name: string) {
  let word = ""
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].DicName === name) {
      word = arr[i].DicCode
      break
    }
  }
  return word
}

// 根据数据字典码值返回对应的文字
/**
 * 
 * @param arr: 字典返回的数组 
 * @param name: 文字 
 * @returns 
 */
export function dicCodeToDicName(arr: DicType, code: number) {
  let word = ""
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].DicCode == code) {
      word = arr[i].DicName
      break
    }
  }
  return word
}

/*
    * 参数说明：
    * number：要格式化的数字
    * decimals：保留几位小数
    * dec_point：小数点符号
    * thousands_sep：千分位符号
*/
export function number_format(num: string, decimals: number, dec_point?: string, thousands_sep?: string) {
  num = (num + '').replace(/[^0-9+-Ee.]/g, '');
  var n = !isFinite(+num) ? 0 : +num,
    prec = !isFinite(+decimals) ? 2 : Math.abs(decimals),
    sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
    dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
    s,
    toFixedFix = function (n: number, prec: number) {
      var k = Math.pow(10, prec);
      return '' + Math.ceil(n * k) / k;
    };

  s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
  var re = /(-?\d+)(\d{3})/;
  while (re.test(s[0])) {
    s[0] = s[0].replace(re, "$1" + sep + "$2");
  }

  if ((s[1] || '').length < prec) {
    s[1] = s[1] || '';
    s[1] += new Array(prec - s[1].length + 1).join('0');
  }
  return s.join(dec);
}

// 封装格式化时间
export function parseDate(date: string) {
  if (!date)
    return null;
  const a = date.replace("/Date(", "")
  const b = a.replace(")/", "")
  return b
}

// 计算两个时间的间隔天数
// 参数格式:2020-01-02
export function getDays(strDateStart: string, strDateEnd: string) {
  var strSeparator = "-"; //日期分隔符
  var oDate1;
  var oDate2;
  var iDays;
  oDate1 = strDateStart.split(strSeparator);
  oDate2 = strDateEnd.split(strSeparator);
  var strDateS = new Date(Number(oDate1[0]), Number(oDate1[1]) - 1, Number(oDate1[2])).valueOf();
  var strDateE = new Date(Number(oDate2[0]), Number(oDate2[1]) - 1, Number(oDate2[2])).valueOf();
  iDays = parseInt(String(Math.abs(strDateS - strDateE) / 1000 / 60 / 60 / 24))//把相差的毫秒数转换为天数
  return iDays;
}

/*
        * 参数说明：
        * {Number} page 当前页码，默认1
        * {Number} pageSize 每页最多显示条数，默认10
        * {Array} totalData 总的数据集，默认为空数组
    */
export function getTableData(page = 1, pageSize = 10, totalData = []) {
  const { length } = totalData;
  const tableData = {
    data: [],
    page,
    pageSize,
    length,
  };
  if (pageSize >= length) { //pageSize大于等于总数据长度，说明只有1页数据或没有数据
    tableData.data = totalData;
    tableData.page = 1;//直接取第一页
  } else { //pageSize小于总数据长度，数据多余1页
    const num = pageSize * (page - 1);//计算当前页（不含）之前的所有数据总条数
    if (num < length) { //如果当前页之前所有数据总条数小于（不能等于）总的数据集长度，则说明当前页码没有超出最大页码
      const startIndex = num;//当前页第一条数据在总数据集中的索引
      const endIndex = num + pageSize - 1;//当前页最后一条数据索引
      tableData.data = totalData.filter((_, index) => index >= startIndex && index <= endIndex);//当前页数据条数小于每页最大条数时，也按最大条数范围筛取数据
    } else { //当前页码超出最大页码，则计算实际最后一页的page，自动返回最后一页数据
      const size = parseInt(String(length / pageSize)); //取商
      const rest = length % pageSize; //取余数
      if (rest > 0) { //余数大于0，说明实际最后一页数据不足pageSize，应该取size+1为最后一条的页码
        tableData.page = size + 1;//当前页码重置，取size+1
        tableData.data = totalData.filter((_, index) => index >= (pageSize * size) && index <= length);
      } else if (rest === 0) { //余数等于0，最后一页数据条数正好是pageSize
        tableData.page = size;//当前页码重置，取size
        tableData.data = totalData.filter((_, index) => index >= (pageSize * (size - 1)) && index <= length);
      } //注：余数不可能小于0
    }
  }
  return tableData;
};

// 数字转换为大写金额
export function digitUppercase(n: number) {
  var fraction = ['角', '分'];
  var digit = [
    '零', '壹', '贰', '叁', '肆',
    '伍', '陆', '柒', '捌', '玖'
  ];
  var unit = [
    ['元', '万', '亿'],
    ['', '拾', '佰', '仟']
  ];
  var head = n < 0 ? '欠' : '';
  n = Math.abs(n);
  var s = '';
  for (var i = 0; i < fraction.length; i++) {
    s += (digit[Math.floor(n * 10 * Math.pow(10, i)) % 10] + fraction[i]).replace(/零./, '');
  }
  s = s || '整';
  n = Math.floor(n);
  for (var i = 0; i < unit[0].length && n > 0; i++) {
    var p = '';
    for (var j = 0; j < unit[1].length && n > 0; j++) {
      p = digit[n % 10] + unit[1][j] + p;
      n = Math.floor(n / 10);
    }
    s = p.replace(/(零.)*零$/, '').replace(/^$/, '零') + unit[0][i] + s;
  }
  return head + s.replace(/(零.)*零元/, '元')
    .replace(/(零.)+/g, '零')
    .replace(/^整$/, '零元整');
}

// 数组去重
export function uniqueOne(arr: any[]) {
  for (var i = 0, len = arr.length; i < len; i++) {
    for (var j = i + 1, len = arr.length; j < len; j++) {
      if (arr[i] === arr[j]) {
        arr.splice(j, 1);
        j--;        // 每删除一个数j的值就减1
        len--;      // j值减小时len也要相应减1（减少循环次数，节省性能）   
        // console.log(j,len)
      }
    }
  }
  return arr;
}