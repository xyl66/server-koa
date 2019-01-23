const data = {
  multiDetails: {
    data: {
      arList: [{
        masterChainId: '1234561', // 唯一標識當前ar
        sourceChainId: '1234561', // 唯一標識當前ar
        parentChainId: '1234561', // 唯一標識當前ar
        companyName: '付款单位1', //付款单位
        billPayDate: 1528905600000, //预计回款日期
        billBookAmt: 125000, //票面金额
        loanAmt: 125000, //可用金额
        invoiceNo: 'v1', //发票号
        afterTaxAmt: 125000.7, //发票金额
        availableAfterTaxAmt: 125000, //可用发票金额
        transferAfterTaxAmt: 125000, //转让发票金额
        billBookCurr: 1, //AR币别
        billBookCurr: 1, //状态
        checkedStatusName: '可用', //状态
        currencyName: '人民币', //AR货币英文名稱
        currencyDesc: '人民币', //AR货币中文名稱
        currencyUnitName: '人民币', //AR货币单位名称
        arSourceDesc: '购入', //来源
        usedInvoiceList:[ // 发票列表
          {
          invoiceDate: 1528905600000,	//发票日期
          invoiceAfterTaxAmt: 2500,	//发票金额
          invoiceCurrency: 1,		//发票币别编号
          invoiceCurrencyDesc: '人民币'	,	//发票币别
          invoiceNo: '562366221'		//发票编号
          },
          {
            invoiceDate: 1528905600000,	//发票日期
            invoiceAfterTaxAmt: 2500,	//发票金额
            invoiceCurrency: 1,		//发票币别编号
            invoiceCurrencyDesc: '人民币'	,	//发票币别
            invoiceNo: '411552211'		//发票编号
          },
          {
            invoiceDate: 1528905600000,	//发票日期
            invoiceAfterTaxAmt: 2500,	//发票金额
            invoiceCurrency: 1,		//发票币别编号
            invoiceCurrencyDesc: '人民币'	,	//发票币别
            invoiceNo: '411552212'		//发票编号
          },
          {
            invoiceDate: 1528905600000,	//发票日期
            invoiceAfterTaxAmt: 2500,	//发票金额
            invoiceCurrency: 1,		//发票币别编号
            invoiceCurrencyDesc: '人民币'	,	//发票币别
            invoiceNo: '411552213'		//发票编号
          }
        ]
      },{
        masterChainId: '1234562', // 唯一標識當前ar
        sourceChainId: '1234561', // 唯一標識當前ar
        parentChainId: '1234561', // 唯一標識當前ar
        companyName: '付款单位2', //付款单位
        billPayDate: 1528905600000, //预计回款日期
        billBookAmt: 125000, //票面金额
        loanAmt: 125000, //可用金额
        invoiceNo: 'v2', //发票号
        afterTaxAmt: 125000.7, //发票金额
        availableAfterTaxAmt: 125000, //可用发票金额
        transferAfterTaxAmt: 125000, //转让发票金额
        billBookCurr: 1, //AR币别
        billBookCurr: 1, //状态
        checkedStatusName: '可用', //状态
        currencyName: '人民币', //AR货币英文名稱
        currencyDesc: '人民币', //AR货币中文名稱
        currencyUnitName: '人民币', //AR货币单位名称
        arSourceDesc: '购入', //来源
        usedInvoiceList:[ // 发票列表
          {
          invoiceDate: 1528905600000,	//发票日期
          invoiceAfterTaxAmt: 2500,	//发票金额
          invoiceCurrency: 1,		//发票币别编号
          invoiceCurrencyDesc: '人民币'	,	//发票币别
          invoiceNo: '01001'		//发票编号
          },
          {
            invoiceDate: 1528905600000,	//发票日期
            invoiceAfterTaxAmt: 2500,	//发票金额
            invoiceCurrency: 1,		//发票币别编号
            invoiceCurrencyDesc: '人民币'	,	//发票币别
            invoiceNo: '01002'		//发票编号
          }
        ]
      }],
      transAmt: 200000,
      custToId: '123',
      custFromId: '123',
      custFromName: '转让方公司1',
      custToName: '接收方公司1',
      paymentUnitName: '付款单位',
      interfaceTransSerial: '12356',
      transSerialNo: '112253366256485',
      remark: '备注',
      contractList:[]
    },
    status: 1
  }
}
module.exports = data