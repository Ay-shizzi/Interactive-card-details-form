const cardNumberInput = document.getElementById('cardnumber');
const cardNumberOutput = document.getElementById('card-number');
const cardNameInput = document.getElementById('cardholder');
const cardNameOutput = document.getElementById('card-name');
const cardMonthInput = document.getElementById('mm-input');
const cardMonthOutput = document.getElementById('mm-output');
const cardYearInput = document.getElementById('yy-input');
const cardYearOutput = document.getElementById('yy-output');
const cvcInput = document.getElementById('cvc-input');
const cvcOutput = document.getElementById('cvc-output');

const cardNameError = document.getElementById('name-error');
const cardNumberError = document.getElementById('number-error');
const cardDateError = document.getElementById('date-error');
const cvcError = document.getElementById('cvc-error');

const formSection = document.getElementById('form'); 
const submitSection = document.getElementById('submission');

const button = document.getElementById('btn');
const continueButton = document.getElementById('continue');


function inputCardName(e){
  let inputName = cardNameInput.value
  let output = inputName.replace(/\b\w/g, x => x.toUpperCase())
  cardNameOutput.textContent= output;
}
cardNameInput.addEventListener('keyup', inputCardName);

function inputCardNum(e){
 let inputCardNumber = cardNumberInput.value;
 let cardNumberFormat = inputCardNumber.replace(/[^\d]/g, "");
 cardNumberFormat = cardNumberFormat.substring(0,16);
 let numberSpacing = cardNumberFormat.match(/\d{1,4}/g);

 if(numberSpacing !== null){
  cardNumberFormat = numberSpacing.join(" ");
 }
 if(inputCardNumber !== cardNumberFormat){
  cardNumberInput.value = cardNumberFormat
 }
 cardNumberOutput.innerHTML = e.target.value;
}
cardNumberInput.addEventListener('keyup', inputCardNum);

function inputMonth(e){
  cardMonthOutput.textContent = e.target.value.substring(0,2);
}
cardMonthInput.addEventListener('keyup', inputMonth);

function inputYear(e) {
  cardYearOutput.textContent = e.target.value.substring(0,2);
}
cardYearInput.addEventListener('keyup', inputYear);

function inputCvc(e) {
  cvcOutput.textContent = e.target.value.substring(0,3);
}
cvcInput.addEventListener('keyup', inputCvc);


function validateAll(){
  function validateName(){
    if(cardNameInput.value == ''){
      cardNameError.style.visibility = 'visible'
      cardNameInput.style.border = '1px solid red'
  }else{
      cardNameError.style.visibility = 'hidden'
      cardNameInput.style.border = '1px solid var(---Light-grayish-violet)'
  }
  }
  function validateNumber(){
    if(cardNumberInput.value == ''){
      cardNumberError.style.visibility = 'visible'
      cardNumberInput.style.border = '1px solid red'
  }else{
      cardNumberError.style.visibility = 'hidden'
      cardNumberInput.style.border = '1px solid var(---Light-grayish-violet)'
    }
}
  function validateMonth(){
    if(cardMonthInput.value == ''){
      cardDateError.style.visibility = 'visible'
      cardMonthInput.style.border = '1px solid red'
  }else{
      cardDateError.style.visibility = 'hidden'
      cardMonthInput.style.border = '1px solid var(---Light-grayish-violet)'
  }
}
  function validateYear(){
    if(cardYearInput.value == ''){
      cardDateError.style.visibility = 'visible'
      cardYearInput.style.border = '1px solid red'
  }else{
      cardDateError.style.visibility = 'hidden'
      cardYearInput.style.border = '1px solid var(---Light-grayish-violet)'
  }
  }
  function validateCvc(){
    if(cvcInput.value == ''){
      cvcError.style.visibility = 'visible'
      cvcInput.style.border = '1px solid red'
      return true
  }else{
      cvcError.style.visibility = 'hidden'
      cvcInput.style.border = '1px solid var(---Light-grayish-violet)'
      return false
  }
  }
  validateName()
  validateNumber()
  validateMonth()
  validateYear()
  validateCvc()

  if(cvcInput.value == '' || 
     cardYearInput.value == '' || 
     cardMonthInput.value == '' ||
     cardNumberInput.value == '' ||
     cardNameInput.value == ''){
  
  }else{
    submitSection.style.display = 'block'
    formSection.style.display = 'none'
  }

}

function returnForm(){
  formSection.style.display = 'block'
  submitSection.style.display = 'none'
  cardNameInput.value = ''
  cardNumberInput.value = ''
  cardMonthInput.value = ''
  cardYearInput.value = ''
  cvcInput.value = ''
  cardNumberOutput.innerHTML = '0000 0000 0000 0000'
  cardNameOutput.textContent = 'Jane Appleseed'
  cardMonthOutput.textContent = '00'
  cardYearOutput.textContent = '00'
  cvcOutput.textContent = '000'

}

button.addEventListener('click', validateAll);
continueButton.addEventListener('click', returnForm)