// plus-minus buttons
const firstAdd = document.getElementById("firstAddBtn");
const firstMinus = document.getElementById("firstMinusBtn");
const econAdd = document.getElementById("econAddBtn");
const econMinus = document.getElementById("econMinusBtn");

// show & addBooking button
const showTotal = document.getElementById("showTotalBtn");
const bookNow = document.getElementById("bookNowBtn");

//show subTotal, vat , total & confirmation
const subTotal = document.getElementById("subTotal").innerText;
const vat = document.getElementById("vat").innerText;
const total = document.getElementById("total").innerText;
document.getElementById("confirmation").innerText;

// input fields value
let firstClassInput = Number(document.getElementById("firstClassInput").value);
let econClassInput = Number(document.getElementById("econClassInput").value);

// plus-minus button function ------------
firstAdd.addEventListener("click", ()=>{
    firstClassInput = firstClassInput + 1;
    document.getElementById("firstClassInput").value = firstClassInput;
    // console.log(firstClassInput);
});

firstMinus.addEventListener("click", ()=>{
    if(firstClassInput >= 1) {
        firstClassInput = firstClassInput - 1;
        document.getElementById("firstClassInput").value = firstClassInput;
        // console.log(firstClassInput);
    }
});

econAdd.addEventListener("click", ()=>{
    econClassInput = econClassInput + 1;
    document.getElementById("econClassInput").value = econClassInput;
    // console.log(econClassInput);
});

econMinus.addEventListener("click", ()=>{
    if(econClassInput >= 1) {
        econClassInput = econClassInput - 1;
        document.getElementById("econClassInput").value = econClassInput;
        // console.log(econClassInput);
    }
});

// show total button -----------
showTotal.addEventListener("click", ()=>{
    if(firstClassInput > 0 || econClassInput > 0) {
        // console.log(firstClassInput, econClassInput);
        const firstClassCost = firstClassInput * 150;
        const econClassCost = econClassInput * 100;
        const costExceptVat = firstClassCost + econClassCost;
        // console.log(costExceptVat);
        const vat = (costExceptVat * 10) / 100 ;
        // console.log(vat);
        const finalCost = costExceptVat + vat;
        // console.log(finalCost);

        // showing the cost 
        document.getElementById("subTotal").innerText = costExceptVat;
        document.getElementById("vat").innerText = vat;
        document.getElementById("total").innerText = finalCost;

        // clearing the input section after showing the cost
        document.getElementById("firstClassInput").value = 0;
        document.getElementById("econClassInput").value = 0;
    }else {
        console.log("Inputs can't be zero.");
    }
});
