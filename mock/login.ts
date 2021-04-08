import { MockMethod } from 'vite-plugin-mock';

const user = {
  url: '/Login/DoLogin',
  method: 'post',
  response: ({body}) => {
    console.log("body", body)
    return {
      "code": 200,
      "msg": "获取成功",
      "data": {
        "IsSuccess": true,
        "msg": "成功"
      },
      "user": {
        "LoginUserInfo": {
          "ID": 14804,
          "MappingUserName": "mali",
          "UserName": "孔子",
          "NickName": "马丽",
          "Sex": -1,
          "MobilePhone": "18725836769",
          "QQ": null,
          "Email": "123456@qq.com",
          "IDCard": "412827196208192515",
          "Birthday": "/Date(0)/",
          "CompanyName": null,
          "HeadPortrait": "http://183.230.176.174:8989/group1/M00/01/0B/wKgKKV9e5ZaAOUWvAAC2rO7vbTU886.JPG",
          "OpenID": "oJL74jj-0-xWxrjTqYyC1FDTIeT0",
          "AndroidDeviceID": null,
          "IOSDeviceID": null,
          "Remark": null,
          "IsBussinessManager": 1000002,
          "IsBorker": 1000001,
          "ReceiveSysMessage": 1000001,
          "ReceiveLoanMessage": 1000001,
          "IsWXFollow": 1000001,
          "BusPhone": "18696530093",
          "ParentCode": "18696530093",
          "ParentName": "客服中心",
          "OAMappingID": 14808,
          "OAUserPhone": "18696530093",
          "OAMappingUserName": "zonghebu",
          "OAUserName": "客服中心",
          "LoginToken": "064e4e6a-e16b-4926-9865-3b074c4cf217",
          "WeiXinAccount": null,
          "WeiXinImgAttJson": null,
          "SexName": "",
          "Imid": "18725836769"
        },
        "DealerInfo": {
          "DealerID": 1009,
          "DealerName": "创联行",
          "DealerCode": "0002",
          "BusinessLicense": "00000022222",
          "CompanyName": "重庆创联行拍卖有限公司",
          "LegalPersonName": "张亮",
          "LegalPersonPhoneNumber": "15823022580",
          "LegalPersonCertificateType": 2067001,
          "LegalPersonCertificateNumber": "11010819611128005X",
          "RegisteredDate": "/Date(1614700800000)/",
          "CertificateStartDate": "/Date(1588262400000)/",
          "CertificateExpiryDate": "/Date(1805644800000)/",
          "RegisteredCapital": 500000,
          "RegisteredAddress": "重庆",
          "BusinessScope": "资产拍卖",
          "BusinessStartDate": "/Date(1616342400000)/",
          "BusinessExpiryDate": "/Date(1655827200000)/",
          "CompanyInChargeName": "张亮",
          "CompanyInChargePhone": "15823022580",
          "CompanyInChargeStandbyNumber": "15823022580",
          "StoreInChargeName": "王群",
          "StoreInChargePhone": "18108303523",
          "StoreInChargeStandbyNumber": "15823022580",
          "StoreInChargeEmail": "1024440824@qq.com",
          "AfterSaleName": "15823022580",
          "AfterSalePhone": "18108303523",
          "AfterSaleStandbyNumber": "15823022580",
          "DepositStatus": 2050001,
          "DepositMoney": 10000,
          "DepositPayDate": "/Date(1616342400000)/",
          "ContractStartDate": "/Date(1616342400000)/",
          "ContractEndDate": "/Date(1647878400000)/",
          "DealerStatus": 2051002,
          "IllegalPunishDay": null,
          "IllegalExpiredDate": null,
          "QualificationInstanceID": null,
          "CreateDate": "/Date(1616385613703)/",
          "CreateUser": "admin",
          "ModifyDate": "/Date(1616391864000)/",
          "ModifyUser": "admin",
          "DealerLoginPhone": "18725836769",
          "DealerAttache": 14781,
          "BankAccountName": "中国农业银行",
          "OpenSubBankName": "观音桥支行",
          "OpenSubBankAddress": "重庆",
          "BankAccountNo": "101111111111",
          "SubBankNo": "",
          "BankOpenLicence": "[]",
          "LegalPersonCertificateImg": "[]"
        }
      }
    }
  }
}

export default [
  user
] as MockMethod[];