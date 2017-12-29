document.addEventListener("DOMContentLoaded", 
function () {
    
    var button = document.querySelector('#addBtn');
    console.log(button);
    var orders = document.querySelector('#orders').firstElementChild;
    console.log(orders);

    button.addEventListener("click", 
        function() {
            var orderId = document.querySelector('#orderId').value;
            var item = document.querySelector('#item').value;
            var quantity = document.querySelector('#quantity').value;
            
            var newOrder = document.createElement("tr");

            var tdNumber = document.createElement("td");
            tdNumber.innerText = orderId;

            var tdName = document.createElement("td");
            tdName.innerText = item;

            var tdCount = document.createElement("td");
            tdCount.innerText = quantity;

            newOrder.appendChild(tdNumber);
            newOrder.appendChild(tdName);
            newOrder.appendChild(tdCount);

            orders.appendChild(newOrder);
    });
});


