document.getElementById('withdraw-btn').addEventListener('click', function(){
    //----withdraw input field---
    const withdrawField=document.getElementById('width-field');
    const newWithdrawField= parseFloat(withdrawField.value);

    //---withdraw field---

    const withdraw=document.getElementById('withdraw')
    const newWithdraw=parseFloat(withdraw.innerText);

    //----withdraw----
    const addWithdraw=newWithdraw+newWithdrawField;
    withdraw.innerText=addWithdraw;
    withdrawField.value=''
    


    //-----balance---
    const balance=document.getElementById('balance')
    const addBalance=parseFloat(balance.innerText);

    const newBalance=addBalance-newWithdrawField;
    balance.innerText=newBalance;

    //----alert---
    if(isNaN(newWithdrawField)){
        withdrawField.value='';
        alert('String is a not allow')
    }
    else{
        alert('Succesful')
    }

    
})