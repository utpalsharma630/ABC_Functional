document.getElementById('deposit-btn').addEventListener('click', function(){
    
    //---input feild----
    const inputField=document.getElementById('input-field');

    const inputValue=inputField.value;   
    const newInput = parseFloat(inputValue);

    const balance=document.getElementById('balance')
    const addBalance=parseFloat(balance.innerText);

    const deposit=document.getElementById('deposit');
    const addDeposit=parseFloat(deposit.innerText);
    
    inputField.value=''

    if (!newInput) {
        alert('Enter your valid number')
        return ;
    }
    
    if(!isNaN(inputValue)){
        //--deposit feild---
        

        const newDeposit=addDeposit+newInput;
        deposit.innerText=newDeposit;
        inputField.value='';

        //--balance field---
        const newBalance=addBalance+newInput;
        balance.innerText=newBalance;
    }
    else{
        return alert('Enter your valid number')
    }

    

})