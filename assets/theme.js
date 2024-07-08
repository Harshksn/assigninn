const count = document.querySelectorAll('.add');

let add_count = 0;

count.forEach(function (button) {
    button.addEventListener("click",() => {

        add_count++;
        document.getElementById("cart-count").innerText = add_count;
        // cart_count.innerText = add_count;
    
        // console.log(add_count)
    
    }
    
);
});