import { styled } from "@mui/material/styles";
import MuiGrid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
const Grid5 = styled(MuiGrid)(({ theme }) => ({
  width: "20%",
  ...theme.typography.body2,
  '& [role="separator"]': {
    margin: theme.spacing(0, 0),
  },
}));
function funicon(){
  return (
    <Typography variant="h5" color="rgb(247, 207, 5)">₮</Typography>
  )
}
const Data = [
  {
    id: 1,
    name: "Cash Management Account",
    value: " 231.87 ",
    valueUDS: "$ 231",
    currency: " 21.87",
    currencyUSD: "$ 21",
    date: "01/01/2019",
    description: "This is a description for fund 1",
    stocks: [
      {
        name: "Schroder Uk",
        label: 35,
        price: 1330,
        quantity: " 400",
        quantityUSD: "$ 403.54",
        gl: ["809.9", "-64.81"],
        description: "Schroder UK invests in United Kingdom",
      },
      {
        name: "TM Stockage",
        label: 1371,
        price: 72.39,
        quantity: " 400",
        quantityUSD: "$ 403.54",
        gl: ["809.9", "-64.81"],
        description: "TM Stockage data",
      },
    ],
  },
  {
    id: 2,
    name: "Investment ISA",
    value: " 11,593.61",
    valueUDS: "$ 11,593",
    currency: " 1,093",
    currencyUSD: "$ 1,092",
    date: "01/01/2019",
    description: "This is a description for fund 2",
    stocks: [
      {
        name: "Schroder US",
        label: 35,
        price: 130,
        quantity: " 400",
        quantityUSD: "$403.54",
        gl: ["809.9", "-64.81"],
        description: "Schroder US",
      },
      {
        name: "PM Stockage",
        label: 1371,
        price: 722.39,
        quantity: " 400",
        quantityUSD: "$403.54",
        gl: ["809.9", "-64.81"],
        description: "PM Stockage data",
      },
    ],
  },
  {
    id: 3,
    name: "SIPP - Pension Saving Account",
    value: " 104,342.45",
    valueUDS: "$ 104,343.2",
    currency: " 9,842.45",
    currencyUSD: "$ 9,842",
    date: "01/01/2019",
    description: "This is a description for fund 3",
    stocks: [
      {
        name: "New age fund",
        label: 35,
        price: 730,
        quantity: " 400",
        quantityUSD: "$439",
        gl: ["809.9", "-64.81"],
        description: "New age fund",
      },
      {
        name: "Small Cap Fund Direct Growth",
        label: 1371,
        price: 12.39,
        quantity: " 400",
        quantityUSD: "$439/",
        gl: ["809.9", "-64.81"],
        description: "Small Cap Fund Direct Growth",
      },
    ],
  },
  {
    id: 4,
    name: "Junior ISA",
    value: " 3,478.00",
    valueUDS: "$ 3,478.10",
    currency: " 328.08",
    currencyUSD: "$ 328",
    date: "01/01/2019",
    description: "Junior ISA",
    stocks: [
      {
        name: "Junior ISA - 1",
        label: 35,
        price: 630,
        quantity: " 400",
        quantityUSD: "$439",
        gl: ["809.9", "-64.81"],
        description: "Junior ISA - 1",
      },
      {
        name: "Junior ISA - 2",
        label: 1371,
        price: 45.39,
        quantity: " 400",
        quantityUSD: "$439",
        gl: ["809.9", "-64.81"],
        description: "Junior ISA - 2",
      },
    ],
  },
];
export default Data;