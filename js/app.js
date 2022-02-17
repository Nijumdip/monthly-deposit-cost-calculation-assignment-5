const foodInput = document.getElementById('food-input'); 
const foodInputText = foodInput.value;

document.getElementById('Calculate-bttn').addEventListener('click', function () {
    const totalExpense = document.getElementById('total-expense');
    const totalExpenseText = totalExpense.innerText;
    // const newTotalExpense = parseFloat(totalExpenseText);
    
    console.log(foodInputText);
    // const newFoodInput = parseFloat(foodInputText);
    /*  
    const rentInput = document.getElementById('income-input');
    const rentInputText = rentInput.value;
    const newRentInput = parseFloat(rentInputText);

    const clothInput = document.getElementById('income-input');
    const clothInputText = clothInput.value;
    const newClothInput = parseFloat(clothInputText);

    const totalCost = newFoodInput + newRentInput + newClothInput;
   
    totalExpense.innerText = totalCost;
     */

})