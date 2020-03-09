'use strict ';
  const balance = document.querySelector('.Expense__caption');
  const minus = document.querySelector('.Expense__minus');
  const plus = document.querySelector('.Expense__plus');
  const list = document.querySelector('.Expence__list');
  const text = document.querySelector('.Text');
  const number = document.querySelector('.Number');
  const submit = document.querySelector('.Expence__button');

  let transactions = [];
  let score = 0;
  let item;
  let i = 0;
 

const UpdateValues = ()=> {
  transactions.forEach(function(item) {
    score += item.amount;
  });
  balance.innerHTML = "$" + score;
  score = 0;
}
 
 const AddTransaction =()=>{
  item={
    index: i++,
    record: text.value,
    amount: Number(number.value)
  };
  transactions.push(item);
 }

  const AddTransactionToDOM = () => {
    let li = document.createElement('li');
    li.innerHTML =`
      <button class="delete-btn" onclick="RemoveTransaction(${item.index})">
       x
      </button>
      ${item.record}
      <span>${item.amount}</span> 
    `;    
    list.appendChild(li);
    console.log('li: ', li);
  }

  function RemoveTransaction (index) {
    transactions = transactions.filter( item =>  item.index !== index  ); 
    UpdateValues();
  }
  
  submit.addEventListener('click', () => {
   if( text.value === "" || number.value === "" ){
     alert( "value is empty" );
   }
   else{
    AddTransaction();
    AddTransactionToDOM();
    UpdateValues();
    text.value = "";
    number.value = "";
   }

   });
