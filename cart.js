/* =========================================
   ALKA JEWELLERS - CART SYSTEM
========================================= */


let cart = [];


/* =========================================
   ADD PRODUCT TO CART
========================================= */

function addToCart(productId) {

    const product = products.find(function(item) {

        return item.id === productId;

    });


    if (!product) {
        return;
    }


    cart.push(product);


    updateCartCount();


    alert(
        product.name +
        " has been added to your cart 🛒"
    );

}


/* =========================================
   UPDATE CART COUNT
========================================= */

function updateCartCount() {

    const cartCount =
        document.getElementById("cartCount");


    if (cartCount) {

        cartCount.textContent =
            cart.length;

    }

}


/* =========================================
   OPEN CART
========================================= */

function openCart() {

    if (cart.length === 0) {

        alert(
            "Your cart is empty 🛒"
        );

        return;

    }


    let cartMessage =
        "Your Cart:\n\n";


    cart.forEach(function(product, index) {

        cartMessage +=

            (index + 1) +
            ". " +
            product.name +
            " - " +
            product.price +
            "\n";

    });


    alert(cartMessage);

}