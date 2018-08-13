let { Datas, dataDetails, contract, LoanedDatas,DataFee } = require('../monitorDatas/Fund/loanDatas')
let {regCMPList} = require('../monitorDatas/Admin/arDatas')
let commonDatas = require('../monitorDatas/Common/common')
let userInfo = require('../monitorDatas/Suplier/userInfo')
let subData = require('../monitorDatas/Fund/index')

var fn_back = function(data){
 return async (ctx, next) => {
    ctx.status = 200
      ctx.body = data
  };
}
/* eslint-disable */
module.exports = {
  'POST /loan2/getLoanManagerListTable.do': fn_back(Datas),
  'POST /loan2/queryLoanInfo.do': fn_back(dataDetails),
  'POST /loanQuery/queryLoanRepayInfo.do': fn_back(dataDetails), // 还款详情
  'POST /loan2/showGenerateContract.do': fn_back(contract),
  'POST /loanFee2/getCustLoanFeeListTable.do': fn_back(DataFee),
  'POST /loanQuery/loanQueryLOANEDManage.do': fn_back(LoanedDatas),
  'POST /loanQuery/loanQueryREJECTManage.do': fn_back(LoanedDatas),
  'POST /commonAr/queryCurr.do': fn_back(commonDatas.moneyTypes),
  'POST /commonAr/queryARStatusType.do': fn_back(commonDatas.arStatus),
  'POST /myAr/initiateDiscount.do': fn_back(commonDatas.comdata),
  'POST /myAr/getMyArListTable.do': fn_back(commonDatas.arDatas),
  'POST /myAr/queryAr': fn_back(commonDatas.arDetails),
  'POST /commonCust/factoringCustomerList.do': fn_back(commonDatas.factories),
  'POST /discountAudit/getDiscountAuditListTable.do': fn_back(commonDatas.fenboList),
  'POST /discountAudit/queryDiscountAuditInfo.do': fn_back(commonDatas.fenboDetail),
  'POST /cust/customerDetailInfo.do': fn_back(userInfo),
  'POST /loan2/confirmInitiateSigning.do': fn_back(subData),
  'POST /onReceivingAr/getOnReceivingArListTable': fn_back(commonDatas.getArData),
  'POST /transferedAr/getTransferedArListTable.do': fn_back(commonDatas.getArData),
  'POST /commonCust/arAuditStatusList.do': fn_back(commonDatas.fenboStatus),
  'POST /commonCust/queryCustomer.do': fn_back({
    "data":{companyName:'123'},
    "msg|1":[
      "失败",
      "成功"
    ],
    "status": true
  }),
  'POST /cust/check': fn_back({
    "data":'',
    "msg|1":[
      "失败",
      "成功"
    ],
    "status": true
  }),
  // 注册
  'POST /cust/userRegister.do': fn_back({
    "data":'',
    "msg|1":[
      "失败",
      "成功"
    ],
    "status": true
  }),
   // 分拨
  'POST /discountAudit/approveDiscountAudit.do': fn_back({
    "data":"成功",
    "msg|1":[
      "失败",
      "成功"
    ],
    "status": true
  }),
  // 还款
  'POST /loanQuery/repayLoan.do': fn_back({
    "data":'',
    "msg|1":[
      "失败",
      "成功"
    ],
    "status": true
  }),
  // 企业管理列表
  'POST /sysRegisteredCompanyManager/getRegisteredCompanyQueryListTable.do': fn_back(regCMPList),
  // 首页数据
  'POST /auxiliaryFunction/searchIndexList.do': fn_back({
    "data":{
      "unOperateSumAmout": function(){
        return  this.unOperateAvailableAmout+this.unOperateUnavailableAmout
      },
      "unOperateAvailableAmout|1-20": 5,
      "unOperateUnavailableAmout|1-20": 5,
      "transferingSumAmout": function(){
        return this.transferingAvailableAmout+this.transferingExpiredAmout
      },
      "transferingAvailableAmout|1-20": 5,
      "transferingExpiredAmout|1-20": 5,
      "discountingSumAmout": function(){
        return this.discountingAvailableAmout+this.discountingExpiredAmout
      },
      "discountingAvailableAmout|1-20": 5,
      "discountingExpiredAmout|1-20": 5,
      "transferedSumAmout|100-2000": function(){
        return this.transferedAvailableAmout+this.transferedExpiredAmout
      },
      "transferedAvailableAmout|100-2000": 500,
      "transferedExpiredAmout|100-2000": 500,
      "discountedSumAmout|100-2000": function(){
        return this.discountedAvailableAmout+this.discountedExpiredAmout
      },
      "discountedAvailableAmout|100-2000": 500,
      "discountedExpiredAmout|100-2000": 500,
      "receivedSumAmout|100-2000": function(){
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
  }),
  // 首页数据
  'POST /factoringIndex/searchFactoringIndex.do': fn_back({
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
  }),
// 已上传数据
'POST /crcQuery/getUploadedAccountInformationList.do': fn_back({
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
}),
// 已上传数据
'POST /crcQuery/getCorporateInformationList.do': fn_back({
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
}),
// 资金提供数据
'POST /crcQuery/getFundProviderInformationList.do': fn_back({
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
}),
// 融资详情数据
'POST /creditLoan/queryCreditLoanInfo.do': fn_back({
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
}),
// 融资情况列表
'POST /creditLoan/creditLoanManageList.do': fn_back({
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
}),
'POST /auxiliaryFunction/availableSupplierOrderList.do': fn_back({
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
}),
// 金额提供数据
'POST /creditLoan/queryCreditAmount.do': fn_back({
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
}