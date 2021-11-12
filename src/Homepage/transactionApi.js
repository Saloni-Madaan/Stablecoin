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
        address : "0x63f32ab904f3DA35d9922Bf3763318bfC13EcA46"

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
        address : "0x63f32ab904f3DA35d7652Bf3763318bfC13EcA46"
    },

]

export default Transaction