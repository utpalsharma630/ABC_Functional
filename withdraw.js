document.getElementById('withdraw-btn').addEventListener('click', function(){
    //----withdraw input field---
    const withdrawField=document.getElementById('width-field');
    const newAdd=withdrawField.value
    const newWithdrawField= parseFloat(newAdd)

    const withdraw=document.getElementById('withdraw')
    const newWithdraw=parseFloat(withdraw.innerText);

    const balance=document.getElementById('balance')
    const addBalance=parseFloat(balance.innerText);

    withdrawField.value=''

    if(!newWithdrawField){
        alert('Enter your valid number')
        return ;
    }
    

    if(!isNaN(newAdd)){
        //----withdraw----
        const addWithdraw=newWithdraw+newWithdrawField;
        withdraw.innerText=addWithdraw;
        withdrawField.value=''
        


        //-----balance---
        

        const newBalance=addBalance-newWithdrawField;
        balance.innerText=newBalance;
    }
    else{
       return alert('Enter your valid number')
    }

    
    
})