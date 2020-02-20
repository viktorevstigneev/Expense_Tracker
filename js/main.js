document.addEventListener(`DOMContentLoaded`, () => {
  `use strict`;
  const balance = document.getElementById('balance');
  const minus = document.getElementById('minusik')
  const plus = document.getElementById('plusik');
  const history=document.getElementById('list');
  const text=document.getElementById('text');
  const number=document.getElementById('amount');
  const deleting= document.getElementsByClassName('delete-btn');
  const submit=document.getElementById('btn');
  let Value;
  let bal=0;
  let pl=0;
  let min=0;

  submit.addEventListener('click', () => {
     Value=Number(number.value);
    bal=bal + Value;
    console.log('bal: ', bal);
    console.log(typeof(Value));


     balance.innerHTML="$"+bal;
      
     if(Value>=0){
      pl=pl+Value;
    
      plus.innerHTML="$"+pl;
      Value=0;
    }
      else{
        min=min+Value;
        minus.innerHTML="$"+min;
        Value=0;
      }
    
    console.log("дело сделано");
   });
})