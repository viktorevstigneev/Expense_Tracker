
  `use strict`;
  const balance = document.querySelector('.Expense__caption');
  const minus = document.querySelector('.Expense__minus');
  const plus = document.querySelector('.Expense__plus');
  const list=document.querySelector('.Expence__list');
  const text=document.querySelector('.Text');
  const number=document.querySelector('.Number');
 const submit=document.querySelector('.Expence__button');

 let score=0;
let transactions=[];
let item;
let i=0;

 
 function Remove(index) {
  transactions.forEach(function(item, i, transactions) {
    if(item.index!==index){
    score+=item.amount;}
  });
  balance.innerHTML="$"+score;
  score=0;
}
 const Add =()=>{
     item={
      index:i++,
      record: text.value,
      amount:Number(number.value)
    };
    transactions.push(item);
    transactions.forEach(function(item, i, transactions) {
      score+=item.amount;
    });
   balance.innerHTML="$"+score;
   score=0;
   console.log('transactions: ', transactions);
  let li=document.createElement('li');
  li.innerHTML=`
  
      <button class="delete-btn" onclick="Remove(${item.index})">
        x
      </button>
      ${item.record}
      <span>${item.amount}</span> 
  `;    
  list.appendChild(li);
 }

//add to Dom
  submit.addEventListener('click', () => {
   if(text.value==""||number.value==""){
     alert("value is empty");
   }
   else{
     Add();
   
   }

   });
