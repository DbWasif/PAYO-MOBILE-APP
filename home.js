const validPin = 1234;

// function to get input values
function getInputValueNumber (id) {
    const inputfield = document.getElementById(id);
    const inputfieldValue = inputfield.value;
    const inputfieldValueNumber = parseInt(inputfieldValue);
    return inputfieldValueNumber;
}

function getInputValue (id) {
    const inputfield = document.getElementById(id);
    const inputfieldValue = inputfield.value;
    return inputfieldValue;
}

// function to get innertext
function getInnerText(id) {
    const element = document.getElementById(id).innerText;
    const elementValueNumber = parseInt(element);
    return elementValueNumber;
}

// function to set innertext
function setInnerText (value) {
    const availableBalanceElement = document.getElementById("available-balance");
    availableBalanceElement.innerText = value;
}

// function to toggle
function handleToggle (id) {
    const forms = document.getElementsByClassName("form")
    for(const form of forms) {
        form.style.display = "none";
    }
    document.getElementById(id).style.display = "block";
}

// function to toggle buttons
function handleButtonToggle (id) {
    const formBtns = document.getElementsByClassName("form-btn");
    for(const btn of formBtns) {
        btn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]")
        btn.classList.add("border-gray-300")
    }
    document.getElementById(id).classList.remove("border-gray-300");
    document.getElementById(id).classList.add("border-[#0874f2]", "bg-[#0874f20d]");
}


// add money features
document.getElementById("add-money-btn").addEventListener("click", function(e) {
    e.preventDefault();

    const bank = getInputValue("bank");
    const accountNumber = getInputValue("account-number");
    const amount = getInputValueNumber("add-amount");
    const pin = getInputValueNumber("add-pin");
    const availableBalance = getInnerText("available-balance");
    
    if(accountNumber.length < 11) {
        alert("Please provide valid account number")
        return;
    }
    if(pin !== validPin) {
        alert("Plaese provide valid pin number")
        return;
    }
    const totalNewAvailabelBalance = amount + availableBalance;
    setInnerText(totalNewAvailabelBalance);
})


// cash out features
document.getElementById("withdraw-btn").addEventListener("click", function(e) {
    e.preventDefault();
    
    const amount = getInputValueNumber("withdraw-amount");
    const availableBalance = getInnerText("available-balance");
    
    const totalNewAvailabelBalance = availableBalance - amount;
    setInnerText(totalNewAvailabelBalance);
})


// toggling feature
document.getElementById("add-button").addEventListener("click", function() {
    handleToggle("add-money-parent");
    handleButtonToggle("add-button");
})

document.getElementById("cash-out-button").addEventListener("click", function() {
    handleToggle("cash-out-parent");
    handleButtonToggle("cash-out-button");
})

document.getElementById("transfer-button").addEventListener("click", function() {
    handleToggle("transfer-money-parent");
    handleButtonToggle("transfer-button");
})

document.getElementById("bonus-button").addEventListener("click", function() {
    handleToggle("get-bonus-parent");
    handleButtonToggle("bonus-button");
})

document.getElementById("bill-button").addEventListener("click", function() {
    handleToggle("pay-bill-parent");
    handleButtonToggle("bill-button");
})

document.getElementById("trading-button").addEventListener("click", function() {
    handleToggle("trading-history-parent");
    handleButtonToggle("trading-button");
})
