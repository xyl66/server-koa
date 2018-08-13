import Mock from 'mockjs'
import { Datas, dataDetails, contract, LoanedDatas, DataFee } from './Fund/loanDatas'
import {regCMPList} from './Admin/arDatas'
import commonDatas from './Common/common'
import userInfo from './Suplier/userInfo'
import subData from './Fund/index'
import {
  apiUrl
} from '@/config/env.js'
/* eslint-disable */
const monitorInit = ()=>{
  Mock.mock(apiUrl+'/loan2/getLoanManagerListTable.do', Datas)
  Mock.mock(apiUrl+'/loan2/queryLoanInfo.do', dataDetails)
  Mock.mock(apiUrl+'/loanQuery/queryLoanRepayInfo.do', dataDetails) // 还款详情
  Mock.mock(apiUrl+'/loan2/showGenerateContract.do', contract)
  Mock.mock(apiUrl+'/loanFee2/getCustLoanFeeListTable.do', DataFee)
  Mock.mock(apiUrl+'/loanQuery/loanQueryLOANEDManage.do', LoanedDatas)
  Mock.mock(apiUrl+'/loanQuery/loanQueryREJECTManage.do', LoanedDatas)
  Mock.mock(apiUrl+'/commonAr/queryCurr.do', commonDatas.moneyTypes)
  Mock.mock(apiUrl+'/commonAr/queryARStatusType.do', commonDatas.arStatus)
  Mock.mock(apiUrl+'/myAr/initiateDiscount.do', commonDatas.comdata)
  Mock.mock(apiUrl+'/myAr/getMyArListTable.do', commonDatas.arDatas)
  Mock.mock(apiUrl+'/myAr/queryAr', commonDatas.arDetails)
  Mock.mock(apiUrl+'/commonCust/factoringCustomerList.do', commonDatas.factories)
  Mock.mock(apiUrl+'/discountAudit/getDiscountAuditListTable.do', commonDatas.fenboList)
  Mock.mock(apiUrl+'/discountAudit/queryDiscountAuditInfo.do', commonDatas.fenboDetail)
  Mock.mock(apiUrl+'/cust/customerDetailInfo.do', userInfo)
  Mock.mock(apiUrl+'/loan2/confirmInitiateSigning.do', subData)
  Mock.mock(apiUrl+'/onReceivingAr/getOnReceivingArListTable', commonDatas.getArData)
  Mock.mock(apiUrl+'/transferedAr/getTransferedArListTable.do', commonDatas.getArData)
  Mock.mock(apiUrl+'/commonCust/arAuditStatusList.do', commonDatas.fenboStatus)
  Mock.mock(apiUrl+'/commonCust/queryCustomer.do',{
    "data":{companyName:'123'},
    "msg|1":[
      "失败",
      "成功"
    ],
    "status": true
  })
  Mock.mock(apiUrl+'/cust/check', {
    "data":'',
    "msg|1":[
      "失败",
      "成功"
    ],
    "status": true
  })
  // 注册
  Mock.mock(apiUrl+'/cust/userRegister.do', {
    "data":'',
    "msg|1":[
      "失败",
      "成功"
    ],
    "status": true
  })
   // 分拨
  Mock.mock(apiUrl+'/discountAudit/approveDiscountAudit.do',{
    "data":"成功",
    "msg|1":[
      "失败",
      "成功"
    ],
    "status": true
  })
  // 还款
  Mock.mock(apiUrl+'/loanQuery/repayLoan.do', {
    "data":'',
    "msg|1":[
      "失败",
      "成功"
    ],
    "status": true
  })
  // 企业管理列表
  Mock.mock(apiUrl+'/sysRegisteredCompanyManager/getRegisteredCompanyQueryListTable.do', regCMPList)
  // 首页数据
  Mock.mock(apiUrl+'/auxiliaryFunction/searchIndexList.do', {
    "data":{
      "unOperateSumAmout": function() {
        return  this.unOperateAvailableAmout+this.unOperateUnavailableAmout
      },
      "unOperateAvailableAmout|1-20": 5,
      "unOperateUnavailableAmout|1-20": 5,
      "transferingSumAmout": function() {
        return this.transferingAvailableAmout+this.transferingExpiredAmout
      },
      "transferingAvailableAmout|1-20": 5,
      "transferingExpiredAmout|1-20": 5,
      "discountingSumAmout": function() {
        return this.discountingAvailableAmout+this.discountingExpiredAmout
      },
      "discountingAvailableAmout|1-20": 5,
      "discountingExpiredAmout|1-20": 5,
      "transferedSumAmout|100-2000": function() {
        return this.transferedAvailableAmout+this.transferedExpiredAmout
      },
      "transferedAvailableAmout|100-2000": 500,
      "transferedExpiredAmout|100-2000": 500,
      "discountedSumAmout|100-2000": function() {
        return this.discountedAvailableAmout+this.discountedExpiredAmout
      },
      "discountedAvailableAmout|100-2000": 500,
      "discountedExpiredAmout|100-2000": 500,
      "receivedSumAmout|100-2000": function() {
        return (this.receivedAvailableAmout*100+this.receivedUnavailableAmout*100)/100
      },
      "receivedAvailableAmout": 5555.24,
      "receivedUnavailableAmout": 2500.00,
      "receivedExpiredAmout": 1500.00,
      "onReceiveAmout": 2500.00,
    },
    "msg|1":[
      "失败",
      "成功"
    ],
    "status": true
  })
  // 首页数据
  Mock.mock(apiUrl+'/factoringIndex/searchFactoringIndex.do', {
    "data":{
      "loanedNoFinishInterest|1-20": 5,
      "loanedNoFinishPrincipal": 125.88,
      "loanedFinishPrincipal|1-20": 5,
      "loanedFinishInterest|1-20": 5,
      "onLoaningSumAmout|1-20": 5,
      "rejectLoanSumAmout|1-20": 5
    },
    "msg|1":[
      "失败",
      "成功"
    ],
    "status": true
  })
// 已上传数据
Mock.mock(apiUrl+'/crcQuery/getUploadedAccountInformationList.do', {
  "data":[
    {
      index:1,
      uploadDate:1528905600000,
      billNO:'123',
      creditorsDistrict:'456',
      debtorDistrict:'789',
      amount:'111',
      currency:'111'
    }
  ],
  "recordsTotal":100,
  "msg|1":[
    "失败",
    "成功"
  ],
  "status": true
})
// 已上传数据
Mock.mock(apiUrl+'/crcQuery/getCorporateInformationList.do', {
  "data":[
    {
      index:1,
      enterprise:'1528905600000',
      OIBC:'123',
      district:'456'
    }
  ],
  "recordsTotal":100,
  "msg|1":[
    "失败",
    "成功"
  ],
  "status": true
})
// 资金提供数据
Mock.mock(apiUrl+'/crcQuery/getFundProviderInformationList.do', {
  "data":[
    {
      index:1,
      funding:'1234',
      OIBC:'123',
      district:'456'
    }
  ],
  "recordsTotal":100,
  "msg|1":[
    "失败",
    "成功"
  ],
  "status": true
})
// 融资详情数据
Mock.mock(apiUrl+'/creditLoan/queryCreditLoanInfo.do', {
  "data":
    {
      loanId: 123556, // 融资ID
      applyAmt:123, // 申请金额
      loanAmt:123, // 实放金额
      repayDate:1528905600000, // 还款日期
      currency:'人民币', // 币别
      interestRate:20, // 利率
      serviceFeeRate:20, // 手续费率
      overdueRate:20, // 罚息利率
      prepaymentDeductInterest:20, // 提前还款手续费
      fineGraceDays:20, // 宽容天数
      repaymentType:'分期', // 还款方式
      currencyName:'人民币', // 币别名称
      actualRepayDate:1528905600000, // 实际还款日期
      contractList:[
        {
        contractId:123, // 合同id
        contractNo:123, // 合同号
        contractName:123, // 合同名称
        status:123, // 合同状态
        contractUrl: 'http://www.baidu.com'
        },
        {
          contractId:1231, // 合同id
          contractNo:123, // 合同号
          contractName:123, // 合同名称
          status:123, // 合同状态
        contractUrl: 'http://www.baidu.com'
        }
      ], // 合同信息列表
      fileInfoList:[
        {
          fileUrl: 'url', //  文件url
          fileName: 'url' //  文件名稱
        }
      ], // 附件列表
      poLoanInfoList:[
        {
          corpCode: '123',
          corpName: '单位',
          poLoanDetailInfoList:[
            {poNumber: 'HB851265'},
            {poNumber: 'DID23423'}
          ]
        },
        {
          corpCode: '123',
          corpName: '单位2',
          poLoanDetailInfoList:[
            {poNumber: 'HDNI3324'},
            {poNumber: '1231'}
          ]
        },
        {
          corpCode: '123',
          corpName: '单位2',
          poLoanDetailInfoList:[
            {poNumber: '1231'},
            {poNumber: '1231'}
          ]
        },
        {
          corpCode: '123',
          corpName: '单位2',
          poLoanDetailInfoList:[
            {poNumber: '1231'},
            {poNumber: '1231'}
          ]
        }
      ]
    },
  "recordsTotal":100,
  "msg|1":[
    "失败",
    "成功"
  ],
  "status": true
})
// 融资情况列表
Mock.mock(apiUrl+'/creditLoan/creditLoanManageList.do', {
  "data":[
      {
        loanId: '123', // 融资编号
        applyAmt: 10000, // 融资申请金额
        currency: '123', // 币别
        status: 2, // 状态
        repaymentType: '123', // 还款方式
        loanAmt: 10000, // 实放金额
        payPrincipalAmt: 10000, // 还款本金
        payInterestAmt: 10000, // 还款利息
        payServiceAmt: 10000, // 还款服务费
        payFineAmt: 10000, // 罚息
        payFineDays: 10000, // 罚息天数
        prepaymentDeductInterest: 10000, // 提前还款手续费
        totalRepayAmt: 10000, // 还款合计
        contractSignedDate: 1528905600000, // 合同签署日期
        repayDate: 1528905600000, // 还款日期
        actualRepayDate: 1528905600000, // 实际还款日期
        currencyName: '人民币', // 币别名称
        custId: '123', // 供應商Id 
      },
      {
        loanId: '123', // 融资编号
        applyAmt: 10000, // 融资申请金额
        currency: '123', // 币别
        loanStatus: '01', // 状态
        repaymentType: '123', // 还款方式
        loanAmt: 10000, // 实放金额
        payPrincipalAmt: 10000, // 还款本金
        payInterestAmt: 10000, // 还款利息
        payServiceAmt: 10000, // 还款服务费
        payFineAmt: 10000, // 罚息
        payFineDays: 10000, // 罚息天数
        prepaymentDeductInterest: 10000, // 提前还款手续费
        totalRepayAmt: 10000, // 还款合计
        contractSignedDate: 1528905600000, // 合同签署日期
        repayDate: 1528905600000, // 还款日期
        currencyName: '人民币', // 币别名称
        custId: '123', // 供應商Id 
        "tableData":[ {
          loanId: '123', // 融资编号
          applyAmt: 10000, // 融资申请金额
          currency: '123', // 币别
          loanStatus: '05', // 状态
          repaymentType: '123', // 还款方式
          loanAmt: 10000, // 实放金额
          payPrincipalAmt: 10000, // 还款本金
          payInterestAmt: 10000, // 还款利息
          payServiceAmt: 10000, // 还款服务费
          payFineAmt: 10000, // 罚息
          payFineDays: 10000, // 罚息天数
          prepaymentDeductInterest: 10000, // 提前还款手续费
          totalRepayAmt: 10000, // 还款合计
          contractSignedDate: 1528905600000, // 合同签署日期
          repayDate: 1528905600000, // 还款日期
          currencyName: '人民币', // 币别名称
          actualRepayDate: 1528905600000, // 实际还款日期
          custId: '123', // 供應商Id 
        },
        {
          loanId: '123', // 融资编号
          applyAmt: 10000, // 融资申请金额
          currency: '123', // 币别
          loanStatus: '02', // 状态
          repaymentType: '123', // 还款方式
          loanAmt: 10000, // 实放金额
          payPrincipalAmt: 10000, // 还款本金
          payInterestAmt: 10000, // 还款利息
          payServiceAmt: 10000, // 还款服务费
          payFineAmt: 10000, // 罚息
          payFineDays: 10000, // 罚息天数
          prepaymentDeductInterest: 10000, // 提前还款手续费
          totalRepayAmt: 10000, // 还款合计
          contractSignedDate: 1528905600000, // 合同签署日期
          repayDate: 1528905600000, // 还款日期
          actualRepayDate: 1528905600000, // 实际还款日期
          currencyName: '人民币', // 币别名称
          custId: '123', // 供應商Id 
        },{
          loanId: '123', // 融资编号
          applyAmt: 10000, // 融资申请金额
          currency: '123', // 币别
          loanStatus: '03', // 状态
          repaymentType: '123', // 还款方式
          loanAmt: 10000, // 实放金额
          payPrincipalAmt: 10000, // 还款本金
          payInterestAmt: 10000, // 还款利息
          payServiceAmt: 10000, // 还款服务费
          payFineAmt: 10000, // 罚息
          payFineDays: 10000, // 罚息天数
          prepaymentDeductInterest: 10000, // 提前还款手续费
          totalRepayAmt: 10000, // 还款合计
          contractSignedDate: 1528905600000, // 合同签署日期
          repayDate: 1528905600000, // 还款日期
          actualRepayDate: 1528905600000, // 实际还款日期
          currencyName: '人民币', // 币别名称
          custId: '123', // 供應商Id 
        }]
      },
      {
        loanId: '123', // 融资编号
        applyAmt: 10000, // 融资申请金额
        currency: '123', // 币别
        status: '123', // 状态
        repaymentType: '123', // 还款方式
        loanAmt: 10000, // 实放金额
        payPrincipalAmt: 10000, // 还款本金
        payInterestAmt: 10000, // 还款利息
        payServiceAmt: 10000, // 还款服务费
        payFineAmt: 10000, // 罚息
        payFineDays: 10000, // 罚息天数
        prepaymentDeductInterest: 10000, // 提前还款手续费
        totalRepayAmt: 10000, // 还款合计
        contractSignedDate: 1528905600000, // 合同签署日期
        repayDate: 1528905600000, // 还款日期
        currencyName: '人民币', // 币别名称
        custId: '123', // 供應商Id 
      }
  ],
  "msg":"请求成功",
  "recordsTotal":416,
  "status":1
})
Mock.mock(apiUrl+'/auxiliaryFunction/availableSupplierOrderList.do', {
  "data":[
      {
        vendorCode: '123', // 供应商代码
        corpCode: '123', // 法人代碼
        corpName: '123', // 法人单位
        plantCode: '123', // 法人工厂代码
        poNumber: '123', // 订单号
        poItem: '123', // 項次
        poAmount:2000, // 金额
        currency: '123', // 币别
        currencyName: '123', // 币别名称
        confirmDate: 1528905600000, // 订单确认日期
        deliveryDate: 1528905600000, // 约定交货日期
        paymenttermName: '123', // 交易条件
        
      },
      {
        vendorCode: '123', // 供应商代码
        corpCode: '123', // 法人代碼
        corpName: '123', // 法人单位
        plantCode: '123', // 法人工厂代码
        poNumber: '124', // 订单号
        poItem: '123', // 項次
        poAmount:3000, // 金额
        currency: '123', // 币别
        currencyName: '123', // 币别名称
        confirmDate: 1528905600000, // 订单确认日期
        deliveryDate: 1528905600000, // 约定交货日期
        paymenttermName: '123', // 交易条件
        
      },
      {
        vendorCode: '123', // 供应商代码
        corpCode: '123', // 法人代碼
        corpName: '123', // 法人单位
        plantCode: '123', // 法人工厂代码
        poNumber: '125', // 订单号
        poItem: '123', // 項次
        poAmount:5000, // 金额
        currency: '123', // 币别
        currencyName: '123', // 币别名称
        confirmDate: 1528905600000, // 订单确认日期
        deliveryDate: 1528905600000, // 约定交货日期
        paymenttermName: '123', // 交易条件
        
      }
  ],
  "msg":"请求成功",
  "recordsTotal":416,
  "status":1
})
// 金额提供数据
Mock.mock(apiUrl+'/creditLoan/queryCreditAmount.do', {
  "data":{
    totalCreditAmount: 10000, // 总限额
    availableCreditAmount: 8000, // 可融资金额
    usedCreditAmount: 2000 // 已融资金额
  },
  "recordsTotal":100,
  "msg|1":[
    "失败",
    "成功"
  ],
  "status": true
})
// 验证码
}

export {monitorInit}