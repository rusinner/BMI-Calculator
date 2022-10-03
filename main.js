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
    

    const height = document.getElementsByClassName('height')[0].value / 100;
    const weight = document.getElementsByClassName('weight')[0].value;
    const option = document.getElementsByTagName('option');
   
    const dialogTitle =  document.getElementsByClassName('dialog-title')[0];
    const dialogResult =  document.getElementsByClassName('res')[0];
    const dialogResultIcon = document.getElementsByClassName('result-icon-wrap')[0];
    const result = weight / (height * height);
    if(isNaN(height) || isNaN(weight) ){
        dialogTitle.innerHTML = 'invalid values entered';
        dialogResult.innerHTML = '';
        dialogResultIcon.innerHTML = `<i class = "fas fa-times-circle danger"></i>`
    }else{

    if(result < 18.5){
        // dialogTitle.innerHTML = 'BMI Index : ${result} '
        dialogResult.innerHTML = 'Result: Under weight';
        dialogResultIcon.innerHTML = `<i class = "fas fa-exclamation-circle danger"></i>`
    }else if (result >=18.5 && result <=24.9){
        dialogTitle.innerHTML = 'BMI Index : ${result} '
        dialogResult.innerHTML = 'Result: Normal';
    }else if (result >=25 && result <=29.9){
        // dialogTitle.innerHTML = 'BMI Index : ${result} '
        dialogResult.innerHTML = 'Result: Over weight';
        dialogResultIcon.innerHTML = `<i class = "fas fa-exclamation-circle warn"></i>`
    }
    else if (result >=30 ){
        // dialogTitle.innerHTML = 'BMI Index : ${result} ';
        dialogResultIcon.innerHTML = `<i class = "fas fa-exclamation-circle danger"></i>`
        dialogResult.innerHTML = 'Result: Obesed';
    }
    dialogTitle.innerHTML = `BMI Index :${Math.round(result)}`;
}
    toggleDialog();
    
    
    
}


//event listeners
dialogButton.addEventListener('click',toggleDialog);
calculateButton.addEventListener('click',calculateBMI);

