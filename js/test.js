document.getElementById('Calculate-bttn').addEventListener('click', function (e) {
    e.preventDefault();
    
    let incomeInput = document.getElementById('income-input');
    let incomeInputText = incomeInput.value;
    incomeInputNumber = Number(incomeInputText);
    // income field end

    let foodInput = document.getElementById('food-input');
    let foodInputText = foodInput.value;
    foodInputNumber = Number(foodInputText);
    // food input end

    let rentInput = document.getElementById('rent-input');
    let rentInputText = rentInput.value;
    rentInputNumber = Number(rentInputText);
    //  rent input end

    let clothInput = document.getElementById('cloth-input');
    let clothInputText = clothInput.value;
    clothInputNumber = Number(clothInputText);
    // cloth input end

    var sum = foodInputNumber + rentInputNumber + clothInputNumber;
    console.log(sum);
    // sum end

    let totalExpense = document.getElementById('total-expense');
    totalExpense.innerText = sum;
    let totalExpenseNumber = Number(totalExpense.innerText);
    // end total expense

    let balance = incomeInputNumber - totalExpenseNumber;
    // end balance

    let balanceText = document.getElementById('balance');
    balanceText.innerText = balance;
    let balanceNumber = Number(balanceText.innerText);
    // end total balance

    document.getElementById('Save-bttn').addEventListener('click', function (e) {
        e.preventDefault();
    
        let parcentInput = document.getElementById('parcent-input');
        let parcentInputText = parcentInput.value;
        parcentInputNumber = Number(parcentInputText);

    
    
        let saveNumber = balanceNumber * parcentInputNumber / 100;

        let savingAmount = document.getElementById('saving-amount');
        savingAmount.innerText = saveNumber;
        let savingAmountNumber = Number(savingAmount.innerText);


        let remainingBalance = balanceNumber - savingAmountNumber;

        let totalRemainingBalance = document.getElementById('remaining-balance');
        totalRemainingBalance.innerText = remainingBalance;
        let totalRemainingBalanceNumber = Number(totalRemainingBalance.innerText);
        console.log(totalRemainingBalanceNumber);
    });












    totalPrice()
});

// save button














function totalPrice() {
    incomeInputNumber;
    foodInputNumber ;
    rentInputNumber;
    clothInputNumber;
}