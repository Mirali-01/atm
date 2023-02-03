const balance = {
    amount: Math.floor(Math.random() * 1000)
    // 5000
}

let transactions = [

]

let val = ''
let mainScreen = document.querySelector(".mainScreen") //remember to set this as global for all projects (Initialize)

const addToScreen = (num) => {
    // let display = document.querySelector(".mainScreen")
    val += num.toString()
    mainScreen.innerHTML = val
    // display.innerHTML = val
}

const clearScreen = () => {
    // let mainScreen = document.querySelector(".mainScreen")
    mainScreen.innerHTML = ""
    val = ''
}

const checkBalance = () => {
    // let mainScreen = document.querySelector(".mainScreen")
    mainScreen.innerHTML = "Your current balance is: $" +
        balance.amount
}

const depositAmount = () => {
    balance.amount += (val * 1) //*1 = kinda like parseInt; turns into a num if it is already a num?
    transactions.push(`deposited ${val}. Balance: ${balance.amount}`)
    val = ''
}


const withdrawAmount = () => {
    balance.amount -= (val * 1) //*1 = kinda like parseInt; turns into a num if it is already a num?
    val = ''
}

const viewTransactions = () => {
    // const list = Object.assign(document.createElement("ul"))
    transactions.map(transaction => {
        // const listItem = Object.assign(document.createElement("li"))
        // listItem.innerHTML = transaction
        // list.append(listItem)
        mainScreen.append(transaction)
    })
    mainScreen.append(list)
}

const cancel = () => {
    let mainScreen = document.querySelector(".mainScreen")
    mainScreen.innerHTML = "Enter Pin: "
}