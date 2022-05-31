// getting input value and converting
function inputData(amount){
    var inputAmount = document.getElementById(amount +'-amount');
    var inputExpense = parseFloat(inputAmount.value);
    return inputExpense;
}
// calling function of calculate button, get error, totall expenses and rest balance
function expenseCalculate(){
    var salaryAmount = inputData('salary')
    var getFoodAmount = inputData('food');
    var getRentAmount = inputData('rent');
    var getClothesAmount = inputData('clothes');
    // totall expenses of month
    var totalExpense = getFoodAmount + getRentAmount + getClothesAmount;
        var totalExpense = getFoodAmount + getRentAmount + getClothesAmount;
    // error cases 
    if (isNaN(salaryAmount) || salaryAmount < 0){
        var errorMassage = document.getElementById('error');
        errorMassage.style.display = 'block'; 
    }
    else if (isNaN(getFoodAmount) || getFoodAmount < 0){
        var errorMassageFood = document.getElementById('error-food');
        errorMassageFood.style.display = 'block';
    }
    else if (isNaN(getRentAmount) || getRentAmount < 0){
        var errorMassageRent = document.getElementById('error-rent');
        errorMassageRent.style.display = 'block';
    }
    else if (isNaN(getClothesAmount)  || getClothesAmount < 0){
        var errorMassageClothes = document.getElementById('error-clothes');
        errorMassageClothes.style.display = 'block';
    }
    else if(totalExpense > salaryAmount){
        var overExpense = document.getElementById('over-expense');
        overExpense.style.display = 'block';
    }
    else{
        var allTotalExpense = document.getElementById('total-expense');
        allTotalExpense.innerText = totalExpense;
        var totalBalance  = document.getElementById('balance');
        totalBalance.innerText = salaryAmount - totalExpense;
    } 
}
// call save button for getting save percentage and remain balance
function saveParchentage(){
    var parchentageAmount = inputData('save');
    var balance = document.getElementById('balance');
    var totalBalance = parseFloat(balance.innerText);
    var restBalance = (totalBalance / 100) * parchentageAmount;
    // ratio of balances
    if(totalBalance > restBalance ){
        document.getElementById('save-balance').innerText = restBalance;
        document.getElementById('rest-balance').innerText = totalBalance - restBalance;
    }
    // save error case
    else{
        var errorMassageClothes = document.getElementById('save-error');
        errorMassageClothes.style.display = 'block';
    }

}