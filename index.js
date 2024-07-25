#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let myBalance = 8000; //Dollars
let myPin = 1234;
let pinAnswer = await inquirer.prompt([
    {
        message: chalk.yellow("\nEnter Your Pin :"),
        type: "number",
        name: "Pin"
    }
]);
if (pinAnswer.Pin === myPin) {
    console.log(chalk.greenBright("\nCorrect PIN Code !\n"));
    let operationAns = await inquirer.prompt([
        {
            message: (chalk.italic("Please select a option :\n ")),
            name: "operation",
            type: "list",
            choices: ["Withdraw", "Check Balance"]
        }
    ]);
    if (operationAns.operation === "Withdraw") {
        let amountAns = await inquirer.prompt([
            {
                message: chalk.italic("Enter Your Amount :\n"),
                name: "amount",
                type: "list",
                choices: ["1000", "2000", "5000", "8000", "10000"]
            }
        ]);
        if (amountAns.amount > myBalance) {
            console.log(chalk.redBright("Insufficient Balance!"));
        }
        else if (myBalance -= amountAns.amount) {
            console.log(chalk.italic(`$${amountAns.amount} : Withdrawal Successfully!`));
            console.log("\nYour Remaining Balance is : " + chalk.green("$" + myBalance));
        }
    }
    else if (operationAns.operation === "Check Balance") {
        console.log("Your Balance is : " + chalk.greenBright("$" + myBalance));
    }
}
else {
    console.log(chalk.redBright("\nIncorrect PIN Code! Please try again\n"));
    ``;
}
