#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000;

console.log();
let myPin = 1234;

let pinAnswer = await inquirer.prompt({
    name: "pin",
    message: "enter your pin",
    type: "number",
});
if (pinAnswer.pin === myPin) {
    console.log("Correct pin code");

    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "select one from the following",
            type: "list",
            choices: ["withdraw", "check balance", "fastcash"],
        },
    ]);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your amount",
                type: "number",
            },
        ]);
        if (amountAns.amount >= myBalance) {
            console.log("Insufficient balance")
        }
        else {
            myBalance -= amountAns.amount;
            console.log("Your remaining balance is:" + myBalance);
        }
    }
    else if (operationAns.operation === "check balance")
        console.log("Your balance is:" + myBalance);
    else if (operationAns.operation === "fastcash") {
        let cashAns = await inquirer.prompt([{
            name: "fastcash",
            message: "Select options from fastcash withdraw",
            type: "list",
            choices: [1000, 2000, 3000]
        }])
        if (cashAns.fastcash === 1000) {
            myBalance -= cashAns.fastcash;
            console.log("Your remaining balance is:" + myBalance);
        }
        else if (cashAns.fastcash === 2000) {
            myBalance -= cashAns.fastcash;
            console.log("Your remaining balance is:" + myBalance);
        }
        else if (cashAns.fastcash === 3000) {
            myBalance -= cashAns.fastcash;
            console.log("Your remaining balance is:" + myBalance);


        }

    }
}
else {
    console.log("Incorrect pin code");
}
