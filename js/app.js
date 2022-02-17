document.getElementById('Calculate-bttn').addEventListener('click', function (e) {
    e.preventDefault();
    
    let incomeInput = document.getElementById('income-input');
    let incomeInputText = incomeInput.value;
    var letters = /^[A-Za-z]+$/;
    if (incomeInputText.match(letters)) {
        alert('❌ Please give a Number.');
    }
    console.log(incomeInputText);
    incomeInputNumber = Number(incomeInputText);
    
    // income field end

    let foodInput = document.getElementById('food-input');
    let foodInputText = foodInput.value;
    var letters = /^[A-Za-z]+$/;
    if (foodInputText.match(letters)) {
        alert('❌ Please give a Number.');
    }
    foodInputNumber = Number(foodInputText);
    // food input end

    let rentInput = document.getElementById('rent-input');
    let rentInputText = rentInput.value;
    var letters = /^[A-Za-z]+$/;
    if (rentInputText.match(letters)) {
        alert('❌ Please give a Number.');
    }
    rentInputNumber = Number(rentInputText);
    //  rent input end

    let clothInput = document.getElementById('cloth-input');
    let clothInputText = clothInput.value;
    var letters = /^[A-Za-z]+$/;
    if (clothInputText.match(letters)) {
        alert('❌ Please give a Number.');
    }
    clothInputNumber = Number(clothInputText);
    // cloth input end

    var sum = foodInputNumber + rentInputNumber + clothInputNumber;
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

});

