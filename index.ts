#! usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

let condition = true;

while(condition)
  {

const currency: any = {
    USD: 1, // Base currency
    EUR: 0.91,
    GBP: 0.76,
    IND: 74.57,
    PKR: 278
};
console.log(chalk.red.italic("Welcome to currency convertor project"));


let userAnswer = await inquirer.prompt([{
    name: "from",
    message: "Enter From Currency",
    type: "list",
    choices: ["USD","EUR","GBP","IND","PKR"]

  },
  {
    name: "to",
    message: "Enter to Currency",
    type: "list",
    choices: ["USD","EUR","GBP","IND","PKR"]
  },
  {
    name: "amount",
    type: "input",
    message: "Enter your amount",
    
  },
  {
    name: "addMore",
    type: "confirm",
    message: "Do you want to add more ?",
    default: "false"
}
]
);

let fromAmount = currency[userAnswer.from];
let toAmount = currency[userAnswer.to];
let amount = userAnswer.amount
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(chalk.bgCyan.bold(`convertedAmount = ${convertedAmount}`));
condition = userAnswer.addMore
  
  }
