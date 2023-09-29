document.getElementById('deposit-btn').addEventListener('click', function(){
    
    //---input feild----
    const inputField=document.getElementById('input-field');

    const inputValue=inputField.value;
    const inputLength=inputValue.length;
    // console.log(inputLength);
    
    // console.log(inputLength);
    
    const newInput = parseFloat(inputValue);
    // const jdf = newInput.length ;
    // console.log(newInput);

    // if(inputLength == newInput){
    //     return -1;
    // }
    

    const inputString=newInput.length;
    // const valueLength=inputString.string;
    // console.log(inputString);

    if(isNaN(inputLength === inputString)){
        return 0;
    }

    


    //--deposit feild---
    const deposit=document.getElementById('deposit');
    const addDeposit=parseFloat(deposit.innerText);

    const newDeposit=addDeposit+newInput;
    deposit.innerText=newDeposit;
    inputField.value=''

    //--balance field---

    const balance=document.getElementById('balance')
    const addBalance=parseFloat(balance.innerText);

    const newBalance=addBalance+newInput;
    balance.innerText=newBalance;


    //---alert ----

    if(isNaN(newInput)){
        inputField.value='';
        alert('Please your valid number')
    }
    else{
        alert('Succesful')
    }
    
   
})