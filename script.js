const form = document.querySelector(`form`)
const check=document.querySelector(`.checkcondition`)
form.addEventListener(`submit`, function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector(`#height`).value);
    const weight = parseInt(document.querySelector(`#weight`).value);
    const results = document.querySelector(`#results`)
let bmi=0;
   if (height =='' || height<0 || height == NaN) {
    // results me value add karne ke liye innerHTML ka use karte hai
    results.innerHTML = `please give a valid height ${height}`;
    
   }
   if (weight == '' || weight<0 || weight == NaN) {
    // results me value add karne ke liye innerHTML ka use karte hai
    results.innerHTML = `please give a valid weight ${weight}`;
    
   }
   else{
     bmi = (weight/ ((height*height)/ 10000)).toFixed(2);
    //show the results
    results.innerHTML = `<span>${bmi}</span>`;
   }
   if(bmi< 18.6 ){
    check.innerHTML = `Under weight `;
   }
   else if(bmi >18.6 && bmi < 24.9){
    check.innerHTML = `Normal weight `;
   }
   
   else{
    check.innerHTML = `over weight `;
   }

})
