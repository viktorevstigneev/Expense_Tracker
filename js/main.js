  'use strict';

  const currentBalanceElement = document.querySelector('.expense__caption');
  const currentExpenselement = document.querySelector('.expense__minus');
  const currentIncomeElement = document.querySelector('.expense__plus');
  const expenseListElement = document.querySelector('.expence__list');
  const textElement = document.querySelector('.text');
  const numberElement = document.querySelector('.number');
  const submitButton = document.querySelector('.expence__button');
  const deleteButton = document.querySelectorAll('.delete_btn');

  let transactions = [];
  let item = {};
  let income = 0;
  let expense = 0;

 
  const updateValues = () => {
    let balance = 0;
    transactions.forEach((item) => {
      balance += item.amount;
     });
     currentBalanceElement.textContent = "$" + balance;
    balance = 0;
  }
 
  const addTransaction = () => {
   item={
    index: Math.random(),
    record: textElement.value,
    amount: +numberElement.value
   };
    transactions.push(item);
  }

 const  addTransactionToDOM = () => {
    const liElement = document.createElement('li');
    liElement.className='lielement';
    var deleteButtonElement = document.createElement('button');
    deleteButtonElement.className ='delete_btn';
    deleteButtonElement.textContent ='x';
    deleteButtonElement.setAttribute('onclick',`removeTransaction(${item.index})`);
    const spanElement = document.createElement('span');
    spanElement.textContent = item.record + ' ' + item.amount;
    liElement.appendChild(deleteButtonElement);
    liElement.appendChild(spanElement);
    expenseListElement.appendChild(liElement);
   
  }

  const removeTransaction = (index) => {
    const selectedLi=document.querySelector('.lielement');
    transactions = transactions.filter( item => item.index !== index  ); 
    updateValues();
    selectedLi.remove();
  }
  
  deleteButton.forEach((button)=>{
    button.addEventListener('click',removeTransaction(item.index));
  });
 

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
