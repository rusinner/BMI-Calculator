//declare variables
const dialogButton = document.getElementsByClassName('dialog-btn')[0];
const calculateButton = document.getElementsByClassName('calculate')[0];
const height = document.getElementsByClassName('height')[0];
const weight = document.getElementsByClassName('weight')[0];
const dialog = document.getElementsByClassName('dialog')[0];

let isOpened = false;
const toggleDialog = () => {
   if(isOpened){
    dialog.classList.remove('display');
    isOpened = false;
   }else{
    dialog.classList.add('display');
    isOpened = true;
   }
}

//calculate BMI function
const calculateBMI = () =>{
    const height = document.getElementsByClassName('height')[0].value;
    const weight = document.getElementsByClassName('weight')[0].value;
    const dialogTitle =  document.getElementsByClassName('dialog-title')[0];
    const dialogResult =  document.getElementsByClassName('res')[0];
    const dialogResultIcon = document.getElementsByClassName('result-icon-wrap')[0];
    const result = weight / (height * height);

    if(result < 18.5){
        dialogResult.innerHTML = 'Result: Under weight';
        dialogResultIcon.innerHTML = `<i class="fas fa-times-circle danger"></i>`
    }else if (result >=18.5 && result <=24.9){
        dialogResult.innerHTML = 'Result: Normal';
    }else if (result >=25 && result <=29.9){
        dialogResult.innerHTML = 'Result: Over weight';
    }
    else if (result >=30 ){
        dialogResult.innerHTML = 'Result: Obesed';
    }
    toggleDialog();
    
    
}


//event listeners
dialogButton.addEventListener('click',toggleDialog);
calculateButton.addEventListener('click',calculateBMI);

