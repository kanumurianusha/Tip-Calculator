function calculateTip(event){
    
    const billAmount=parseFloat(document.getElementById("billAmount").value);
    const percentageTip=parseFloat(document.getElementById("percentageTip").value);
    const errorMessage = document.getElementById("errorMessage");
    const tip=document.getElementById("tip");
    const total=document.getElementById("total");
    console.log(billAmount);
    
         if (isNaN(billAmount) || isNaN(percentageTip) || billAmount < 0 || percentageTip < 0) {
          errorMessage.textContent = "Please enter valid numbers for bill and tip percentage.";
          tip.value = "";
          total.value = "";
          return;
        }

        const tip1 = (billAmount * percentageTip) / 100;
        const total1 = billAmount + tip1;
        tip.value = tip1.toFixed(2);
        total.value = total1.toFixed(2);
        errorMessage.textContent = "";
        event.preventDefault();
}