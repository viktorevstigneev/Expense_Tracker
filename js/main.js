'use strict ';
  const balanceElement = document.querySelector('.expense__caption');
  const minusElement = document.querySelector('.expense__minus');
  const plusElement = document.querySelector('.expense__plus');
  const listElement = document.querySelector('.expence__list');
  const textElement = document.querySelector('.text');
  const numberElement = document.querySelector('.number');
  const submitButton = document.querySelector('.expence__button');

  let transactions = [];
  let item = {};
  let balance = 0;
 
   updateValues = () => {
    transactions.forEach(function(item) {
      balance += item.amount;
     });
    balanceElement.textContent = "$" + balance;
    balance = 0;
  }
 
  addTransaction = () => {
   item={
    index: Math.random(),
    record: textElement.value,
    amount: +numberElement.value
   };
  transactions.push(item);
 }

   addTransactionToDOM = () => {
    const liElemnt = document.createElement('li');
    const deleteButtonElement = document.createElement('button');
    deleteButtonElement.className ='delete_btn';
    deleteButtonElement.textContent ='x';
    deleteButtonElement.setAttribute('onclick',`removeTransaction(${item.index})`);
    console.log('item.index: ', item.index);
    const spanElement = document.createElement('span');
    spanElement.textContent = item.record + ' ' + item.amount;
    liElemnt.appendChild(deleteButtonElement);
    liElemnt.appendChild(spanElement);
    listElement.appendChild(liElemnt);
   
  }

   removeTransaction = (index) => {
    transactions = transactions.filter( item =>  item.index !== index  ); 
    updateValues();
  }
  
  submitButton.addEventListener('click', () => {
   if( textElement.value === "" || numberElement.value === "" ){
     alert( "value is empty" );
   }
   else{
    addTransaction();
    addTransactionToDOM();
    updateValues();
    textElement.value = "";
    numberElement.value = "";
   }

   });
