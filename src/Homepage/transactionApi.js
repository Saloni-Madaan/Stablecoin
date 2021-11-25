const Transaction = [
  {
    confirmBlock: 23456,
    transaction_id: 1,
    "items": [
      {
        "description": "Fund1",
        "amount": 1
      },
      {
        "description": "Fund2",
        "amount": 1
      }
    ],
    totalAmount: 100,
    currency: "USDT",
    paidAmount: 50,
    state: "success",
    date: "11-09-2021",
    address: "0x63f32ab904f3DA35d9922Bf3763318bfC13EcA46",
    blockHash: "3456g",
    wallet: {
      _id: '2937b584-695d-404c-b7d9-cd039dadd900',
      address: '0xfeb361f4b2a2F12f39f0497CC466F9963fB79dd6',
      key: '0xe052e72f046e21de76a2b458ee2d95c21863054855fbaf070df75c3896f334f1',
      created: 1637135201159
    },
    expires: 1637221601115,
    created: 1637135201116,
   
    state: "paid",
    confirmBlock: '1234',
    _id: '4f6f405d-e151-43f5-84f0-028fcc4c89f8',
    _rev: '4f6f405d-e151-43f5-84f0-028fcc4c89f8',
    userWalletAddress: '6194b3371a0cce961bff2d62',

  },
  {

    confirmBlock: 23457,
    transaction_id: 2,
    "items": [
      {
        "description": "Fund3",
        "amount": 1
      },
      {
        "description": "Fund2",
        "amount": 1
      }
    ],
    totalAmount: 200,
    currency: "USDT",
    paidAmount: 150,
    state: "pending",
    date: "11-09-2021",
    address: "0x63f32ab904f3DA35d7652Bf3763318bfC13EcA46",
    expires: 1637221601115,
    created: 1637135201116,
    wallet: {
      _id: '2937b584-695d-404c-b7d9-cd039dadd900',
      address: '0xfeb361f4b2a2F12f39f0497CC466F9963fB79dd6',
      key: '0xe052e72f046e21de76a2b458ee2d95c21863054855fbaf070df75c3896f334f1',
      created: 1637135201159
    },
    state: "paid",
    confirmBlock: '1234',
    _id: '4f6f405d-e151-43f5-84f0-028fcc4c89f8',
    _rev: '4f6f405d-e151-43f5-84f0-028fcc4c89f8',
    userWalletAddress: '6194b3371a0cce961bff2d62',

    }
  

]

export default Transaction
