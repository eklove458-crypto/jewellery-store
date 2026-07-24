// ===============================
// SNUGG SHOPPING CART
// ===============================

let cart = [];
let total = 0;

const cartIcon = document.getElementById("cart-icon");
const cartSidebar = document.getElementById("cart");
const closeCart = document.getElementById("close-cart");

const cartItems = document.getElementById("cart-items");
const cartCount = document.getElementById("cart-count");
const totalPrice = document.getElementById("total-price");


// Open Cart

cartIcon.addEventListener("click", () => {

    cartSidebar.classList.add("active");

});


// Close Cart

closeCart.addEventListener("click", () => {

    cartSidebar.classList.remove("active");

});


// Add To Cart

const addButtons = document.querySelectorAll(".add-to-cart");


addButtons.forEach(button => {

    button.addEventListener("click", () => {

        const name = button.dataset.name;

        const price = Number(button.dataset.price);

        cart.push({
            name,
            price
        });

        updateCart();

    });

});


// Update Cart

function updateCart(){

    cartItems.innerHTML="";

    total=0;


    if(cart.length===0){

        cartItems.innerHTML="<p>Your cart is empty.</p>";

        cartCount.innerText=0;

        totalPrice.innerText=0;

        return;

    }


    cart.forEach(item=>{

        total += item.price;

        const div=document.createElement("div");

        div.classList.add("cart-item");

        div.innerHTML=`

        <h4>${item.name}</h4>

        <p>₹${item.price}</p>

        `;

        cartItems.appendChild(div);

    });

    cartCount.innerText=cart.length;

    totalPrice.innerText=total;

}
// ===============================
// WISHLIST SYSTEM
// ===============================

const wishlistButtons = document.querySelectorAll(".wishlist");

wishlistButtons.forEach(button => {

    button.addEventListener("click", () => {

        if(button.innerHTML === "♡"){

            button.innerHTML = "♥";
            button.style.color = "red";

        }

        else{

            button.innerHTML = "♡";
            button.style.color = "#000";

        }

    });

});


// ===============================
// SMOOTH SCROLL
// ===============================

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {

    link.addEventListener("click", function(e){

        const target = this.getAttribute("href");

        if(target.startsWith("#")){

            e.preventDefault();

            const section = document.querySelector(target);

            if(section){

                section.scrollIntoView({

                    behavior:"smooth"

                });

            }

        }

    });

});


// ===============================
// LOGIN BUTTON
// ===============================

const loginBtn = document.querySelector(".login-btn");

loginBtn.addEventListener("click", () => {

    alert("Welcome to SNUGG 💎\nLogin feature will be available soon.");

});
// ===============================
// PAGE LOADED MESSAGE
// ===============================

window.addEventListener("load", () => {

    console.log("SNUGG Website Loaded Successfully");

});


// ===============================
// CARD HOVER EFFECT
// ===============================

const cards = document.querySelectorAll(
".card, .seller-card, .product-card, .feature-box, .testimonial-card"
);

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transition = "0.3s";

        card.style.transform = "translateY(-10px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0)";

    });

});


// ===============================
// ACTIVE NAV LINK
// ===============================

const menuLinks = document.querySelectorAll(".nav-links a");

menuLinks.forEach(link => {

    link.addEventListener("click", () => {

        menuLinks.forEach(item => {

            item.classList.remove("active");

        });

        link.classList.add("active");

    });

});


// ===============================
// THANK YOU MESSAGE
// ===============================

const buttons = document.querySelectorAll(".add-to-cart");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        setTimeout(() => {

            alert("✅ Product added to cart successfully.");

        },200);

    });

});


// ===============================
// FOOTER YEAR
// ===============================

const footer = document.querySelector(".footer-bottom p");

if(footer){

    footer.innerHTML =
    "© " + new Date().getFullYear() + " SNUGG. All Rights Reserved.";

}
