//setp-1: add event listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click', function () {
    // console.log('deposit btn working')
    //setp-2: get the deposit amount from the depost input field
    //note: for input field use .value to the value inside the input field
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);//converting string to num

    //step-3: get the current deposit total
    //note: for non-input type(element other than input, text area) user innerText to get the text
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    
    //setp-4: add numbers to set the total deposit
    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    //set the deposit total
    depositTotalElement.innerText = currentDepositTotal;


    //setp-5: get th ebalance total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString  = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    //setp-6: calculate current total balance
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    //set the balance total
    balanceTotalElement.innerText= currentBalanceTotal;




    //setp-7: clear the deposit field
    depositField.value = '';



})