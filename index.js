// console.log('js file added');

let total = 0;

function clickCard(target){
    
    const selectedField = document.getElementById('selected-area');
    
    const addedToCartItem = target.childNodes[5].childNodes[1].innerText;
    
    const li = document.createElement('li');
    li.innerText = addedToCartItem;
    selectedField.appendChild (li);

    const itemPrize = target.childNodes[5].childNodes[3].childNodes[1].innerText;
    // console.log(itemPrize);
    const previousTotalPrize = document.getElementById('total-prize').innerText;
    // console.log(typeof previousTotalPrize)
    
    // total = parseFloat(total) + parseFloat(itemPrize);
    total = parseFloat(previousTotalPrize) + parseFloat(itemPrize);
    
    document.getElementById('total-prize').innerText = total; 
    // console.log(total)
    // const totalPrize = total;
    // const totalPaymentString = document.getElementById('total-payment').innerText;
    // console.log(totalPaymentString);
    // console.log(typeof totalPaymentString)
    // const totalPayment = parseFloat(totalPaymentString);
    // console.log(totalPayment);
    // console.log(typeof totalPayment);
    // const prize = total.appendChild(total)
    // return ;
    const totalPaymentBalance = document.getElementById('total-payment');
    const previousTotalBalanceString = totalPaymentBalance.innerText;
    const previousTotalBalance = parseFloat(previousTotalBalanceString);

    const currentTotalPaymentBalance = total;
    totalPaymentBalance.innerText = currentTotalPaymentBalance;
}
// console.log(total);

// validation of coupon and up to 200 tk sell
document.getElementById('coupon-field').addEventListener('keyup', function(event){

    
    const couponFieldText = event.target.value 
    const applyButton = document.getElementById('apply-btn')
    const coupon = document.getElementById('promo-code').innerText;
   
    const previousTotalPrize = document.getElementById('total-prize').innerText;
    
    if(couponFieldText === coupon && previousTotalPrize > 200){
        applyButton.removeAttribute('disabled');        

        

    }
    else{
        applyButton.setAttribute('disabled', true);
        
    }
})

// click apply button for discounted prize
document.getElementById('apply-btn').addEventListener('click', function(prize){
    // console.log('apply button clicked')
    const previousTotalPrize = document.getElementById('total-prize').innerText;
    
    const TotalPrize = parseFloat(previousTotalPrize)
    
    const discountPrize = document.getElementById('discount-area');
    
    const percentageDiscount = (TotalPrize/100)*20 ;

    
    discountPrize.innerText = percentageDiscount.toFixed(2);
    

    // calculation total prize and discount prize 
    let finalDiscountPrize = discountPrize.innerText;
    
    console.log(finalDiscountPrize);

    // const finalTotalPrize = TotalPrize - 
    // let totalPaymentString = document.getElementById('total-payment').innerText;
    // let totalPayment = parseFloat(totalPaymentString);
    // console.log(totalPayment);

    // console.log(typeof totalPayment);
    // let calculationTotalPayment = TotalPrize - finalDiscountPrize;
    // console.log(calculationTotalPayment);
    // console.log(typeof calculationTotalPayment);
    // totalPayment.innerText = calculationTotalPayment;
    // console.log(totalPayment);
    const totalPaymentBalance = document.getElementById('total-payment');
    const previousTotalBalanceString = totalPaymentBalance.innerText;
    const previousTotalBalance = parseFloat(previousTotalBalanceString);

    const currentTotalPaymentBalance = total - finalDiscountPrize;
    totalPaymentBalance.innerText = currentTotalPaymentBalance;


    
}) 

// // make purchase button functions modal set
// document.getElementById('make-purchase-btn').addEventListener('click', function(){
    
// <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
//   <form method="dialog" className="modal-box">
    
//     <h3 className="font-bold text-lg">Hello!</h3>
//     <p className="py-4">Press ESC key or click the button below to close</p>
//     <div className="modal-action">
//       <button className="btn">Close</button>
//     </div>
//   </form>
// </dialog>
// })


