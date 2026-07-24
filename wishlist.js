/* =========================================
   ALKA JEWELLERS - WISHLIST SYSTEM
========================================= */


let wishlist = [];


/* =========================================
   ADD PRODUCT TO WISHLIST
========================================= */

function addToWishlist(productId, button) {

    const product = products.find(function(item) {

        return item.id === productId;

    });


    if (!product) {
        return;
    }


    const alreadyAdded =
        wishlist.some(function(item) {

            return item.id === productId;

        });


    if (alreadyAdded) {

        wishlist =
            wishlist.filter(function(item) {

                return item.id !== productId;

            });


        button.classList.remove("active");

        alert(
            product.name +
            " removed from wishlist."
        );

    } else {

        wishlist.push(product);

        button.classList.add("active");

        alert(
            product.name +
            " added to wishlist ❤️"
        );

    }


    updateWishlistCount();

}


/* =========================================
   UPDATE WISHLIST COUNT
========================================= */

function updateWishlistCount() {

    const wishlistCount =
        document.getElementById("wishlistCount");


    if (wishlistCount) {

        wishlistCount.textContent =
            wishlist.length;

    }

}


/* =========================================
   OPEN WISHLIST
========================================= */

function openWishlist() {

    if (wishlist.length === 0) {

        alert(
            "Your wishlist is empty ❤️"
        );

        return;

    }


    let wishlistMessage =
        "Your Wishlist:\n\n";


    wishlist.forEach(function(product, index) {

        wishlistMessage +=

            (index + 1) +
            ". " +
            product.name +
            " - " +
            product.price +
            "\n";

    });


    alert(wishlistMessage);

}