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
    document.getElementById("cash-out-parent").style.display = "none";
    document.getElementById("add-money-parent").style.display = "block";
})

document.getElementById("cash-out-button").addEventListener("click", function() {
    document.getElementById("add-money-parent").style.display = "none";
    document.getElementById("cash-out-parent").style.display = "block";
})
