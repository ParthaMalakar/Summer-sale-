document.getElementById('coupne-input').addEventListener('keyup', function (event) {
    const text = event.target.value;
    const deleteButton = document.getElementById('btn-apply');

    document.getElementById('btn-apply').addEventListener('click', function () {
        if (text === 'SELL200') {
            Discount();
            alert('Valid coupne Discount added');
        }
    })

})

function addToName(Name) {
    const Entry = document.getElementById('entry');

    const count = Entry.childElementCount;

    const li = document.createElement('li');
    li.classList.add('my-4');
    li.classList.add('font-bold');
    li.innerHTML = `${count + 1}.${Name}`;

    Entry.appendChild(li);
}
function TotalPrice(price) {
    const total = document.getElementById('total-all');
    const totalValue = total.innerText;
    const totalAll = parseFloat(totalValue);
    const All = totalAll + price;
    const fixedNumber = All.toFixed(2);
    total.innerText = fixedNumber;
    const deleteButtonTwo = document.getElementById('btn-make');
    if (fixedNumber > 0) {
        deleteButtonTwo.removeAttribute('disabled');
        deleteButtonTwo.classList.remove('bg-[#ed79ce]');
        deleteButtonTwo.classList.add('bg-[#E527B2]');
    }
    else {
        deleteButtonTwo.setAttribute('disabled', true);
        deleteButtonTwo.classList.remove('bg-[#E527B2]');
        deleteButtonTwo.classList.add('bg-[#ed79ce]');
    }
    const deleteButtonOne = document.getElementById('btn-apply');

    if (fixedNumber > 200) {
        deleteButtonOne.removeAttribute('disabled');
        deleteButtonOne.classList.remove('bg-[#ed79ce]');
        deleteButtonOne.classList.add('bg-[#E527B2]');
    }
    else {
        deleteButtonOne.setAttribute('disabled', true);
        deleteButtonOne.classList.remove('bg-[#E527B2]');
        deleteButtonOne.classList.add('bg-[#ed79ce]');
    }
}
function OverallPricetotal(value) {
    const overallPrice = document.getElementById('priceINTotal');
    const overallValue = overallPrice.innerText;
    const overallAll = parseFloat(overallValue);
    const overallAllPrice = overallAll + value;
    const fixedNumberPrice = overallAllPrice.toFixed(2);
    overallPrice.innerText = fixedNumberPrice;
}
function FindValue(id) {
    const value = document.getElementById(id);
    const ALLValue = value.innerText;
    const totalNumber = parseFloat(ALLValue);
    return totalNumber;
}
function Discount() {
    const discountTotal = document.getElementById('total-all');
    const discountTotalValue = discountTotal.innerText;
    const discountTotalAll = parseFloat(discountTotalValue);
    const afterDiscountPrice = discountTotalAll - (0.2 * discountTotalAll);
    const discountAll = (0.2 * discountTotalAll);
    const disFixedNumber = discountAll.toFixed(2);
    const disTotalAmount = document.getElementById('discount');
    disTotalAmount.innerText = disFixedNumber;
    const beforePrice = document.getElementById('priceINTotal');
    const beforeToFixed = afterDiscountPrice.toFixed(2);
    beforePrice.innerText = beforeToFixed;

}

// card-1
document.getElementById('card-one').addEventListener('click', function () {
    addToName('K. Accessories');
    const priceTotal = FindValue('price-one');
    TotalPrice(priceTotal);
    OverallPricetotal(priceTotal);

})
document.getElementById('card-two').addEventListener('click', function () {
    addToName('K. Accessories');
    const priceTotalOne = FindValue('price-two');
    TotalPrice(priceTotalOne);
    OverallPricetotal(priceTotalOne);

})
document.getElementById('card-three').addEventListener('click', function () {
    addToName('Home cooker');
    const priceTotalThree = FindValue('price-three');
    TotalPrice(priceTotalThree);
    OverallPricetotal(priceTotalThree);
})
document.getElementById('card-four').addEventListener('click', function () {
    addToName('Sports Back Cap');
    const priceTotalFour = FindValue('price-four');
    TotalPrice(priceTotalFour);
    OverallPricetotal(priceTotalFour);
})
document.getElementById('card-five').addEventListener('click', function () {
    addToName('Full Jersey Set');
    const priceTotalFive = FindValue('price-five');
    TotalPrice(priceTotalFive);
    OverallPricetotal(priceTotalFive);

})
document.getElementById('card-six').addEventListener('click', function () {
    addToName('Sports cates');
    const priceTotalSix = FindValue('price-six');
    TotalPrice(priceTotalSix);
    OverallPricetotal(priceTotalSix);

})
