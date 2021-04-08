//校验是否全由数字组成
export function isAllNumber(str: string) {

  var reg = /^[0-9]{1,20}$/;
  return reg.test(str);
}

//只能输入数字，可带小数点
export function isFloat(float: string) {
  var pattern = /^\d*\.{0,6}\d{0,6}$/;
  try {
    return pattern.test(float);
  }
  catch (ex) {
    return false;
  }
}

//校验输入值是否在两值之间
export function isBetween(val: number, lo: number, hi: number) {
  if ((val < lo) || (val > hi)) { return (false); }
  else { return (true); }
}

//匹配整数
export function isInteger(str: string) {
  //如果为空，则通过校验    
  //var reg=/^(\-?)(\d+)$/;
  var reg = /^((\+|-)\d)?\d*$/;
  return reg.test(str);
}

//匹配正整数 positive
export function isPosiInteger(str: string) {
  //如果为空，则通过校验  
  var reg = /^[1-9]\d*$/;
  return reg.test(str);
}

//匹配负整数 negative
export function isNegaInteger(str: string) {
  //如果为空，则通过校验  
  var reg = /^-[1-9]\d*$/;
  return reg.test(str);
}

//匹配非负整数 即正整数+0
export function isNotNegaInteger(str: string) {
  //如果为空，则通过校验  
  var reg = /^[1-9]\d*|0$/;
  return reg.test(str);
}

//匹配非正整数 即负整数+0
export function isNotPosiInteger(str: string) {
  //如果为空，则通过校验  
  var reg = /^-[1-9]\d*|0$/;
  return reg.test(str);
}




//是否为浮点型
export function isDouble(str: string) {
  //var reg = /^-?([1-9]\d*\.\d*|0\.\d*[1-9]\d*|0?\.0+|0)$/;
  var reg = /^(?:\+|-)?\d+(?:\.\d+)?$/;
  return reg.test(str);
}

//正浮点数
export function isPosiDouble(str: string) {
  //如果为空，则通过校验
  var reg = /^[1-9]\d*\.\d*|0\.\d*[1-9]\d*$/;
  return reg.test(str);
}

//负浮点数
export function isNegaDouble(str: string) {
  //如果为空，则通过校验
  var reg = /^^-([1-9]\d*\.\d*|0\.\d*[1-9]\d*)$/;
  return reg.test(str);
}

//全由数字(带小数点)组成
export function isDigitDot(str: string) {
  var reg = /^[0-9.]{1,20}$/;
  return reg.test(str);
}
//验证金额 包括小数点是否含有都可以验证
export function isMoney(str: string) {
  var reg = /^(\d+(?:[.]\d{1,2})|[1-9]\d*)$/;
  return reg.test(str);
}

//验证字符串是否含有非法字符
export function checkTextValid(strNewsTitle: string) {
  if (/^[^'<>]*$/gi.test(strNewsTitle))
    return true;
  else {
    alert("文本框中不能含有\n\n 1 单引号: ' \n 2 尖角号: < > \n\n请检查输入！");
    return false;
  }
}

//验证表单非法字符(当前页面所有文本框都验证)
export function checkAllTextValid(form: { elements: string | any[]; }) {
  //记录不含引号的文本框数量 
  var resultTag = 0;
  //记录所有text文本框数量 
  var flag = 0;
  for (var i = 0; i < form.elements.length; i++) {
    if (form.elements[i].type == "text" || form.elements[i].type == "textarea") {
      flag = flag + 1;
      //此处填写所要过滤的特殊符号 
      //注意：修改####处的字符，其它部分不许修改. 
      //if(/^[^####]*$/.test(form.elements[i].value)) 

      if (/^[^'<>]*$/.test(form.elements[i].value))
        resultTag = resultTag + 1;
      else
        form.elements[i].select();
    }
  }
  //如果含引号的文本框等于全部文本框的值，则校验通过
  if (resultTag == flag)
    return true;
  else {
    alert("文本框中不能含有\n\n 1 单引号: ' \n 2 尖角号: < > \n\n请检查输入！");
    return false;
  }
}


//匹配特殊字符 防止攻击
export function TeShuStr(str: string) {
  if (str != "") {
    var reg = /[%,&\\,'';=\?\$]+/;
    return reg.test(str);
  }
}

//只能输入中文字符
export function truename(str: string) {
  if (str != "") {
    var reg = /[^\u4E00-\u9FA5]+/;
    return reg.test(str);
  }
}


//验证URL
export function ValidatorURL(str: string) {
  if (str != "") {
    var reg = /(^http:\/\/([\w-]+\.)+[\w-]+(\/[\w-.\/?%&=]*)?$)|(^([\w-]+\.)+[\w-]+(\/[\w-.\/?%&=]*)?$)/;
    return reg.test(str);
  }
}


//校验IP地址
export function isIP(str: string) {
  var reg = /^((1??\d{1,2}|2[0-4]\d|25[0-5])\.){3}(1??\d{1,2}|2[0-4]\d|25[0-5])$/;
  return reg.test(str);
}

/**
*	手机号:目前全国有27种手机号段。&nbsp;
*	移动有16个号段：134、135、136、137、138、139、147、150、151、152、157、158、159、182、187、188。其中147、157、188是3G号段，其他都是2G号段。
*	联通有7种号段：130、131、132、155、156、185、186。其中186是3G（WCDMA）号段，其余为2G号段。
*	电信有4个号段：133、153、180、189。其中189是3G号段（CDMA2000），133号段主要用作无线网卡号。
*	150、151、152、153、155、156、157、158、159&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;九个&nbsp;
*	130、131、132、133、134、135、136、137、138、139&nbsp;&nbsp;&nbsp;&nbsp;十个&nbsp;
*	180、182、185、186、187、188、189&nbsp;&nbsp;&nbsp;七个&nbsp;
*	13、15、18三个号段共30个号段，154暂时没有，加上147共27个。&nbsp;&nbsp;
*/
//手机号码验证
export function isTelPhone(telphone: string) {
  //var pattern = /(^13\d{9}$)|(^15[0,1,2,3,5,6,7,8,9]\d{8}$)|(^18[0,1,2,3,4,5,6,7,8,9]\d{8}$)|(^17[0,1,2,3,5,6,7,8,9]\d{8}$)|(^147\d{8}$)|(^198\d{8}$)|(^199\d{8}$)/g;
  var pattern = /(^1\d{10}$)/g;
  return pattern.test(telphone);
}

//邮箱验证
export function isEmail(strEmail: string) {
  var pattern = new RegExp("^([a-zA-Z0-9]+[_|\_|.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|.]?)*[a-zA-Z0-9]+.[a-zA-Z]{2,3}$");
  return pattern.test(strEmail);
}

//固定电话验证
export function isFixedPhone(phone: string) {
  var pattern = /^(([0\+]\d{2,3}-)?(0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$/;
  return pattern.test(phone)
}
//电话验证（固定电话或手机号)
export function isTel(tel: any) {
  return (isTelPhone(tel) || isFixedPhone(tel));
}

//校验是否全由汉字组成
export function isChineseChar(str: string) {
  var reg = /^([\u4E00-\u9FA5]|[\uFE30-\uFFA0])*$/gi;
  return reg.test(str);
}

//校验是否为英文字符，包括大小写
export function isEngCharAll(str: string) {
  var reg = /^[a-zA-Z]{1,20}$/;
  return reg.test(str);
}

//校验是否为英文字符，只有大写
export function isEngCharUpper(str: string) {
  var reg = /^[A-Z]{1,20}$/;
  return reg.test(str);
}
//校验是否为英文字符，只有小写
export function isEngCharLower(str: string) {
  var reg = /^[a-z]{1,20}$/;
  return reg.test(str);
}
//校验登录名：只能输入5-20个以字母开头、可带数字、“_”、“.”的字串
export function isRegisterUserName(str: string) {
  var reg = /^[a-zA-Z]{1}([a-zA-Z0-9]|[._]){4,19}$/;
  return reg.test(str);
}
//校验用户姓名：只能输入1-30个以字母开头的字串
export function isTrueName(str: string) {
  var reg = /^[a-zA-Z]{1,30}$/;
  return reg.test(str);
}
//只能输入1-20个字母、数字、下划线
export function isRightChar(str: string) {
  var reg = /^(\w){1,20}$/;
  return reg.test(str);
}

//效验房产证格式
export function isHouseCard(str: string) {
  //var v1 = /^\d{3}房地证\d{4}字第\d{5,6}号$/;
  var v1 = /^([\u4e00-\u9fa5]{2,4}\d{3}|\d{3})房地证\d{4}字第\d{4,6}号$/;
  var v2 = /^渝[(|（]\d{4}[)|）][\u4e00-\u9fa5]{2,3}区不动产权第\d{9,10}号$/;
  console.info(str);
  try {
    if (v1.test(str) || v2.test(str)) {
      return true;
    }
    else {
      return false;
    }
  }
  catch (ex) {
    return false;
  }
}




//校验身份证号码;匹配形式如:15位或者18位身份证 
export function isIDCardChar(str: string) {
  //如果为空，则通过校验  
  var reg = /^(\d{18}|\d{15})$/;
  //或者 var reg=/^([0-9]{18}|[0-9]{15})$/;
  return reg.test(str);
}
/*
身份证验证
严格的身份证验证规则
*/
export function isIdCardNo(num: string) {
  num = num.toUpperCase(); //身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X。       
  if (!(/(^\d{15}$)|(^\d{17}([0-9]|X)$)/.test(num))) {
    //alert('输入的身份证号长度不对，或者号码不符合规定！\n15位号码应全为数字，18位号码末位可以为数字或X。');             
    //$("#<%=laberrmeg.ClientID %>").text('身份证号长度不正确或不符合规定！');
    return false;
  }
  //验证前2位，城市符合
  var aCity = { 11: "北京", 12: "天津", 13: "河北", 14: "山西", 15: "内蒙古", 21: "辽宁", 22: "吉林", 23: "黑龙江 ", 31: "上海", 32: "江苏", 33: "浙江", 34: "安徽", 35: "福建", 36: "江西", 37: "山东", 41: "河南", 42: "湖北", 43: "湖南", 44: "广东", 45: "广西", 46: "海南", 50: "重庆", 51: "四川", 52: "贵州", 53: "云南", 54: "西藏", 61: "陕西", 62: "甘肃", 63: "青海", 64: "宁夏", 65: "新疆", 71: "台湾", 81: "香港", 82: "澳门", 91: "国外" };
  // @ts-ignore
  if (aCity[parseInt(num.substr(0, 2))] == null) {
    //$("#<%=laberrmeg.ClientID %>").text('身份证号不正确或不符合规定！');
    return false;
  }
  //alert('城市:'+aCity[parseInt(num.substr(0,2))]);

  //下面分别分析出生日期和校验位
  var len, re; len = num.length;
  if (len == 15) {
    re = new RegExp(/^(\d{6})(\d{2})(\d{2})(\d{2})(\d{3})$/);
    var arrSplit = num.match(re);  //检查生日日期是否正确
    // @ts-ignore
    var dtmBirth = new Date('19' + arrSplit[2] + '/' + arrSplit[3] + '/' + arrSplit[4]);
    // @ts-ignore
    var bGoodDay; bGoodDay = (dtmBirth.getYear() == Number(arrSplit[2])) && ((dtmBirth.getMonth() + 1) == Number(arrSplit[3])) && (dtmBirth.getDate() == Number(arrSplit[4]));
    if (!bGoodDay) {
      //$("#<%=laberrmeg.ClientID %>").text('身份证号的出生日期不对！');
      return false;
    } else { //将15位身份证转成18位 //校验位按照ISO 7064:1983.MOD 11-2的规定生成，X可以认为是数字10。       
      var arrInt = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2);
      var arrCh = new Array('1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2');
      var nTemp = 0, i;
      num = num.substr(0, 6) + '19' + num.substr(6, num.length - 6);
      for (i = 0; i < 17; i++) {
        // @ts-ignore
        nTemp += num.substr(i, 1) * arrInt[i];
      }
      num += arrCh[nTemp % 11];
      return true;
    }
  }
  if (len == 18) {
    re = new RegExp(/^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$/);
    var arrSplit = num.match(re);  //检查生日日期是否正确
    // @ts-ignore
    var dtmBirth = new Date(arrSplit[2] + "/" + arrSplit[3] + "/" + arrSplit[4]);
    // @ts-ignore
    var bGoodDay; bGoodDay = (dtmBirth.getFullYear() == Number(arrSplit[2])) && ((dtmBirth.getMonth() + 1) == Number(arrSplit[3])) && (dtmBirth.getDate() == Number(arrSplit[4]));
    if (!bGoodDay) {
      //alert(dtmBirth.getYear());
      //alert(arrSplit[2]);
      //$("#<%=laberrmeg.ClientID %>").text('身份证号的出生日期不对！');
      return false;
    }
    else { //检验18位身份证的校验码是否正确。 //校验位按照ISO 7064:1983.MOD 11-2的规定生成，X可以认为是数字10。
      var valnum;
      var arrInt = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2);
      var arrCh = new Array('1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2');
      var nTemp = 0, i;
      for (i = 0; i < 17; i++) {
        // @ts-ignore
        nTemp += num.substr(i, 1) * arrInt[i];
      }
      valnum = arrCh[nTemp % 11];
      if (valnum != num.substr(17, 1)) {
        //alert('18位身份证的校验码不正确！应该为：' + valnum);
        //$("#<%=laberrmeg.ClientID %>").text('18位身份证号的校验码不正确！');
        return false;
      }
      return true;
    }
  } return false;
}



//密码验证
export function passwordcheck(str: string) {
  if (str != "") {
    var len = str.length;
    var reLen = 0;
    for (var i = 0; i < len; i++) {
      if (str.charCodeAt(i) < 27 || str.charCodeAt(i) > 126) {
        // 全角    
        reLen += 2;
      } else {
        reLen++;
      }
    }
    if (reLen < 6 || reLen > 15) {
      alert("密码长度大于6位，小于15位");
      return false
    }
  }
  else {
    alert("请输入密码");
    return false;
  }
  return true;
}

export function passwordcheck1(str: string, str1: string) {
  if (str != "") {
    var len1 = str1.length;
    var len = str.length;
    var reLen = 0;
    for (var i = 0; i < len; i++) {
      if (str.charCodeAt(i) < 27 || str.charCodeAt(i) > 126) {
        // 全角    
        reLen += 2;
      } else {
        reLen++;
      }
    }
    if (reLen < 6 || reLen > 20) {
      alert("密码长度大于6位，小于20位");
      str = "";
      return false;
    }
    else {
      if (str != str1) {
        alert("两次输入密码不一致，请重新输入!");
        return false;
      }
    }
  }
  else {
    alert("请输入新密码！");
    return false;
  }
  return true;
}

//Description: 银行卡号Luhm校验
//Luhm校验规则：16位银行卡号（19位通用）:
// 1.将未带校验位的 15（或18）位卡号从右依次编号 1 到 15（18），位于奇数位号上的数字乘以 2。
// 2.将奇位乘积的个十位全部相加，再加上所有偶数位上的数字。
// 3.将加法和加上校验位能被 10 整除。
export function luhnCheck(bankno: string) {
  var lastNum = bankno.substr(bankno.length - 1, 1); //取出最后一位（与luhn进行比较）
  var first15Num = bankno.substr(0, bankno.length - 1); //前15或18位
  var newArr = new Array();
  for (var i = first15Num.length - 1; i > -1; i--) { //前15或18位倒序存进数组
    newArr.push(first15Num.substr(i, 1));
  }
  var arrJiShu = new Array(); //奇数位*2的积 <9
  var arrJiShu2 = new Array(); //奇数位*2的积 >9
  var arrOuShu = new Array(); //偶数位数组
  for (var j = 0; j < newArr.length; j++) {
    if ((j + 1) % 2 == 1) { //奇数位
      if (parseInt(newArr[j]) * 2 < 9) arrJiShu.push(parseInt(newArr[j]) * 2);
      else arrJiShu2.push(parseInt(newArr[j]) * 2);
    } else //偶数位
      arrOuShu.push(newArr[j]);
  }

  var jishu_child1 = new Array(); //奇数位*2 >9 的分割之后的数组个位数
  var jishu_child2 = new Array(); //奇数位*2 >9 的分割之后的数组十位数
  for (var h = 0; h < arrJiShu2.length; h++) {
    jishu_child1.push(parseInt(arrJiShu2[h]) % 10);
    jishu_child2.push(parseInt(arrJiShu2[h]) / 10);
  }

  var sumJiShu = 0; //奇数位*2 < 9 的数组之和
  var sumOuShu = 0; //偶数位数组之和
  var sumJiShuChild1 = 0; //奇数位*2 >9 的分割之后的数组个位数之和
  var sumJiShuChild2 = 0; //奇数位*2 >9 的分割之后的数组十位数之和
  var sumTotal = 0;
  for (var m = 0; m < arrJiShu.length; m++) {
    sumJiShu = sumJiShu + parseInt(arrJiShu[m]);
  }

  for (var n = 0; n < arrOuShu.length; n++) {
    sumOuShu = sumOuShu + parseInt(arrOuShu[n]);
  }

  for (var p = 0; p < jishu_child1.length; p++) {
    sumJiShuChild1 = sumJiShuChild1 + parseInt(jishu_child1[p]);
    sumJiShuChild2 = sumJiShuChild2 + parseInt(jishu_child2[p]);
  }
  //计算总和
  // @ts-ignore
  sumTotal = parseInt(sumJiShu) + parseInt(sumOuShu) + parseInt(sumJiShuChild1) + parseInt(sumJiShuChild2);

  //计算luhn值
  // @ts-ignore
  var k = parseInt(sumTotal) % 10 == 0 ? 10 : parseInt(sumTotal) % 10;
  var luhn = 10 - k;
  // @ts-ignore
  if (lastNum == luhn) {
    return true;
  } else {
    return false;
  }
}

/**
 * 邮箱验证
 * @param {any} 邮箱
 */

export function VerifyEmail(email: string) {
  var isValid = true;
  var reg = /^[a-zA-Z0-9_-]+@([a-zA-Z0-9]+\.)+(com|cn|net|org)$/;; //正则表达式
  if (!reg.test(email)) {
    isValid = false;
  }
  return isValid;
}

