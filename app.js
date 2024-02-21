const allBtns = document.getElementsByClassName('add-btn');
for (const btn of allBtns) {
    btn.addEventListener('click', function(e) {
        const name = e.target.parentNode.childNodes[1].innerText;
        const rate = e.target.parentNode.childNodes[3].childNodes[1].innerText;
        const category = e.target.parentNode.childNodes[5].childNodes[1].innerText;

        const playerContainer = document.getElementById('player-list');
        const tr = document.createElement('tr');
        const td1 = document.createElement('td');
        td1.innerText = name;
        const td2 = document.createElement('td');
        td2.innerText = rate;
        const td3 = document.createElement('td');
        td3.innerText = category;

        const cartCountLimit = toInt('cart');
        if(cartCountLimit + 1 > 6 ) {
            alert("Limit crossed!");
            return;
        }

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        playerContainer.appendChild(tr);

        // Update budget
        // const budget = toInt('budget');
        const budget = document.getElementById('budget').innerText;
        document.getElementById.innerText = parseInt(budget) - parseInt(rate);

        const cartCount = toInt('cart');
        document.getElementById('cart').innerText = cartCount + 1;
        const leftCount = toInt('left');
        document.getElementById('left').innerText = leftCount -1;
        // Total cost 
      cost("total-cost", rate);
      grandCost();
        
    });
}

function grandCost(status){
    const totalCost = toInt("total-cost");
    if(status == undefined) {
        document.getElementById('grand-cost').innerText = totalCost; 
    } else {
        const cuoponInput = document.getElementById('coupon-input').value;

        if(cuoponInput == "feb24") {
            const discounts = totalCost * 0.2;
            document.getElementById('grand-cost').innerText = totalCost - discounts; 
        } else {
            alert("Please enter a valid cuopon!");
        }
    }
}

function cost(id, value){
    const totalCost = toInt(id);
    const sum = totalCost + parseInt(value);
    document.getElementById(id).innerText = sum;
}

function toInt(id) {
    const price = document.getElementById(id).innerText;
    const priceInt = parseInt(price);
    return priceInt;
}