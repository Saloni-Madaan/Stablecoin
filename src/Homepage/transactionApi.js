const Transaction = [
    {
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
        currency : "USDT",
        paidAmount: 50,
        state: "success",
        date: "11-09-2021",
        address : "0x63f32ab904f3DA35d9922Bf3763318bfC13EcA46",
        blockHash: "3456g",
        userWalletAddress : "f376331",
        wallet:{
          _id: "06f153af-2367-4dd6-a6bf-ebe199616041",
          address: "0x47B39d95105BC7fe6d7A0172FF83c0Db4f792e4F",
          
        },
        // _id : ""

    },
    {
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
        currency : "USDT",
        paidAmount:150,
        state: "pending",
        date: "11-09-2021",
        address : "0x63f32ab904f3DA35d7652Bf3763318bfC13EcA46",
        userWalletAddress : "f376331",
        wallet:{
          _id: "06f153af-2367-4dd6-a6bf-ebe199616041",
          address: "0x47B39d95105BC7fe6d7A0172FF83c0Db4f792e4F",
          
        },
    },

]

export default Transaction