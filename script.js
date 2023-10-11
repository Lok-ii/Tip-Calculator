let bill = document.querySelector("#bill");
let people = document.querySelector("#people");
let buttons = document.querySelectorAll(".tipButton");
let reset = document.querySelector(".reset");

let totalAmount = document.querySelector("#totalAmount");
let tipAmount = document.querySelector("#tipAmount");



buttons.forEach(val =>{
    val.addEventListener("click", ()=>{
        if(bill.value <= 0 && people.value <= 0){
            alert("Enter a valid Bill Amount and Number of People");
        }else if(people.value <= 0 || people.value - Math.floor(people.value) != 0){
            alert("Enter valid Number of People");
        }else if(bill.value <= 0){
            alert("Enter a valid Bill Amount");
        }else{
            val.style.transform = "Scale(0.95)";
            setTimeout(() => {
                val.style.transform = "Scale(1)";
            }, 150);
            let totalBill = Number(bill.value) / Number(people.value); 
            totalAmount.innerText = Math.floor(totalBill);
            tipAmount.innerText = Math.floor(totalBill * (val.value / 100));
        }
    }, true);
});

reset.addEventListener("click", ()=> {
    bill.value = "";
    people.value = 1;
    totalAmount.innerText = "0.00";
    tipAmount.innerText = "0.00";
})


