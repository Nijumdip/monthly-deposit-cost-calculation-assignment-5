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
    console.log(totalExpenseNumber);
    // end total expense

    let balance = incomeInputNumber - totalExpenseNumber;
    console.log(balance);
    // end balance

    let balanceText = document.getElementById('balance');
    balanceText.innerText = balance;
    let balanceNumber = Number(balanceText.innerText);
    console.log(balanceNumber);



    totalPrice()
})
function totalPrice() {
    incomeInputNumber;
    foodInputNumber ;
    rentInputNumber;
    clothInputNumber;
}