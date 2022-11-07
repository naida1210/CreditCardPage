const { NoEncryption } = require("@mui/icons-material");
const { display } = require("@mui/system");







function changeName() {
   const valuename = document.getElementById('name');
    const error = document.getElementById('feedback');
   

    if (valuename.value.length<3) {
        error.innerHTML="cannot be less then  3 symbol"
     
        return false;
      }else {
        error.innerHTML=""
        document.getElementById('cardname').textContent=valuename.value;
        return true;
      }

      
   

}



function changeNumber() {
    const number = document.getElementById('number').value;
    const number1= number.replace(/\d{12}(\d{4})/, "************$1")
    document.getElementById('cardnumber').textContent=number1;
    const error1 = document.getElementById('feedbackNumber');

    if(number.value.length<16||number.value.length>16){
        error1.innerHTML="should be 16 digits"

    }else{
        error1.innerHTML=""
        document.getElementById('cardnumber').textContent=number.value;
        return true;
    }

}



function changeYYMM() {

    const  MM = document.getElementById('mm').value;
    const YY =document.getElementById('yy').value;
    const MMYY =(MM+"/"+YY);
    const msg=document.getElementById('feedbackMMYY');
    const cvc = document.getElementById('cvc').value;
    
    if (MM.length<=0 || YY.length<=0||cvc.length<=2) {
  
        msg.textContent="can't be blank"
        return false
        
     }
     else {
   
        msg.textContent=" "
        document.getElementById('MMYY').innerHTML=MMYY;
        console.log(MM.length, YY.length)
        console.log("not blank")
        return true
    
     } 
}


const btn  = document.getElementById('button');
btn.addEventListener('click',successPage );
 



function successPage( ) {
    var x = document.getElementById("success");
    var y = document.getElementById('y');
    if (x.style.display === "none") {
      x.style.display = "block", 
      y.style.display="none";

    } else {
      x.style.display = "none";
    }
  }
