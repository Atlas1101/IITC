const BALANCE_STORAGE_KEY = "balance";

function getFromStorage(key) {
    return JSON.parse(localStorage.getItem(key));
}

function saveToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

let balance = getFromStorage(BALANCE_STORAGE_KEY) || 4000;

//saveToStorage(BALANCE_STORAGE_KEY, userBalance);

console.log(balance);





const TRANSACTION_STORAGE_KEY = "userTransactions";

let userTransactions = getFromStorage(TRANSACTION_STORAGE_KEY) || [
    {
        type: "No recent transactions",
        amount: "If you want to see somthing do somthing",
    },
];


const lastTransactionPara = document.querySelector("#lastTransactionP");



const renderTransactions = () => { 
  const lastTransaction = userTransactions[userTransactions.length - 1];
  lastTransactionPara.textContent = `Your last transaction is: ${lastTransaction.type} of ${lastTransaction.amount}`;
};
renderTransactions();








const formElement = document.querySelector("form");
const validationParagraph = document.querySelector("#validation");
const storedPIN = "1234";

// Select and hold all buttons

const withdrawButton = document.querySelector("#withdraw");
const depositButton = document.querySelector("#deposit");
const balanceButton = document.querySelector("#balance");
const lastTransactionButton = document.querySelector("#lastTransaction");

const navElement = document.querySelector("nav");

const btnNodeList = navElement.querySelectorAll("button");

const divContainer = document.querySelector(".container");


const userBalanceEl = document.querySelector("#userBalance");



const renderBalance = () => {
    userBalanceEl.textContent = `Your balance is: $${balance}`;
};
console.log(userTransactions);





const maininterface = document.querySelector("#interface");

maininterface.classList.add("hidden");


let attempts = 0

let userInput;
formElement.addEventListener("submit", (event) => {
    event.preventDefault();
    userInput = document.querySelector("input").value;
    console.log(userInput);

    // reset the validation text
    validationParagraph.textContent = "";
    validationParagraph.classList.remove("valid", "invalid");

    if (userInput === storedPIN && attempts <= 3) {
        console.log("PIN correct");

        validationParagraph.textContent = "PIN correct";

        // Add Class to the validation text
        validationParagraph.classList.add("valid");

        maininterface.classList.remove("hidden");
    } else {
        console.log("PIN incorrect and/or attempts exceeded");
        attempts += 1;

        if (attempts <= 3) {
         validationParagraph.textContent = "PIN incorrect";

        // Add Class to the validation text
        validationParagraph.classList.add("invalid");
        }
        else {
            validationParagraph.textContent = "Too many attempts";
            validationParagraph.classList.add("invalid");
        }
      
    }
});


const containers = divContainer.querySelectorAll("div");
// Add Event Listener to the btns
btnNodeList.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        containers.forEach((container) => {
            container.classList.add("hidden");
        });

        const currenEl = document.querySelector(`#${e.target.id}El`);

        currenEl.classList.toggle("hidden");
    });
});

renderBalance();

let inputDep = document.querySelector("#depoInput");
console.log(inputDep);


let depMssg = document.querySelector("#depoMssg");


const depositForm = document.querySelector('#depositEl form');
depositForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(depositForm);
  const depositAmount = formData.get('depositAmount');

  console.log(depositAmount);
  balance += Number(depositAmount);
  userTransactions.push({
    type: "Deposit",
    amount: depositAmount
  });
  inputDep.value = "";
  depMssg.textContent =  `Your balace is: $${balance}`;


  saveToStorage(TRANSACTION_STORAGE_KEY, userTransactions);
  renderTransactions();
  renderBalance();
});




let inputWith = document.querySelector("#withInput");
console.log(inputWith);



let withMssg = document.querySelector("#withMssgP");



const withdrawalForm = document.querySelector('#withdrawEl form');
withdrawalForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(withdrawalForm);
  const withdrawalAmount = formData.get('withAmount');

  console.log(withdrawalAmount);
  if(withdrawalAmount > balance){
    withMssg.textContent = `This aint a charity, fool. You only have: $${balance}`;
  }else{
      
  
  balance -= Number(withdrawalAmount);
  userTransactions.push({
    type: "Withdrawal",
    amount: withdrawalAmount
  });
  inputWith.value = "";
  withMssg.textContent = `Your balace is: $${balance}`;

  saveToStorage(TRANSACTION_STORAGE_KEY, userTransactions);
  renderTransactions();
  renderBalance();
}
});


