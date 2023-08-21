// console.log('js file added');

// function for added list item and get total prize items

let total = 0;

function clickCard(target){
    
    const selectedField = document.getElementById('selected-area');
    
    const addedToCartItem = target.childNodes[5].childNodes[1].innerText;
    
    const li = document.createElement('li');
    li.innerText = addedToCartItem;
    selectedField.appendChild (li);

    const itemPrize = target.childNodes[5].childNodes[3].childNodes[1].innerText;
    
    const previousTotalPrize = document.getElementById('total-prize').innerText;
    
    

    total = parseFloat(previousTotalPrize) + parseFloat(itemPrize);
    
    document.getElementById('total-prize').innerText = total; 
    
    const totalPaymentBalance = document.getElementById('total-payment');
    const previousTotalBalanceString = totalPaymentBalance.innerText;
    const previousTotalBalance = parseFloat(previousTotalBalanceString);

    const currentTotalPaymentBalance = total;
    totalPaymentBalance.innerText = currentTotalPaymentBalance;

    // disable or enable make purchase button function 
    
    const makePurchaseButton = document.getElementById('make-purchase-btn')

    if (total > 1){
        makePurchaseButton.removeAttribute('disabled');
    }
    else{
        makePurchaseButton.setAttribute('disabled', true);
    }
}


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
    
    const previousTotalPrize = document.getElementById('total-prize').innerText;
    
    const TotalPrize = parseFloat(previousTotalPrize)
    
    const discountPrize = document.getElementById('discount-area');
    
    const percentageDiscount = (TotalPrize/100)*20 ;

    
    discountPrize.innerText = percentageDiscount.toFixed(2);
    

    // calculation total prize and discount prize 
    let finalDiscountPrize = discountPrize.innerText;
        
    const totalPaymentBalance = document.getElementById('total-payment');
    const previousTotalBalanceString = totalPaymentBalance.innerText;
    const previousTotalBalance = parseFloat(previousTotalBalanceString);

    const currentTotalPaymentBalance = total - finalDiscountPrize;
    totalPaymentBalance.innerText = currentTotalPaymentBalance;


    
}) 

// make purchase button functions modal set


let goHomeBtn = document.getElementById('go-home-btn');
function reloadPage(){
    location.reload();
}
goHomeBtn.addEventListener('click', reloadPage);


