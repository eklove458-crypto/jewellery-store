const products = [

    {
        id: 1,
        name: "Eternal Gold Ring",
        category: "Rings",
        price: "₹18,999",
        image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=700&q=85"
    },

    {
        id: 2,
        name: "Royal Diamond Necklace",
        category: "Necklaces",
        price: "₹45,999",
        image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=700&q=85"
    },

    {
        id: 3,
        name: "Pearl Drop Earrings",
        category: "Earrings",
        price: "₹12,999",
        image: "https://images.unsplash.com/photo-1635767798638-3e25273a8236?auto=format&fit=crop&w=700&q=85"
    },

    {
        id: 4,
        name: "Golden Charm Bracelet",
        category: "Bracelets",
        price: "₹22,999",
        image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=700&q=85"
    },

    {
        id: 5,
        name: "Classic Solitaire Ring",
        category: "Rings",
        price: "₹35,999",
        image: "https://images.unsplash.com/photo-1589674781759-c21c37956a44?auto=format&fit=crop&w=700&q=85"
    },

    {
        id: 6,
        name: "Elegant Gold Necklace",
        category: "Necklaces",
        price: "₹52,999",
        image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=700&q=85"
    },

    {
        id: 7,
        name: "Luxury Gold Earrings",
        category: "Earrings",
        price: "₹16,999",
        image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=700&q=85"
    },

    {
        id: 8,
        name: "Diamond Tennis Bracelet",
        category: "Bracelets",
        price: "₹39,999",
        image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=700&q=85"
    }

];


/* =========================================
   DISPLAY PRODUCTS
========================================= */

function displayProducts(productList = products) {

    const productGrid =
        document.getElementById("productGrid");

    if (!productGrid) {
        return;
    }


    productGrid.innerHTML = "";


    productList.forEach(function(product) {

        const productCard = document.createElement("div");

        productCard.className = "product-card";


        productCard.innerHTML = `

            <div class="product-image">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                >

                <button
                    class="wishlist-btn"
                    onclick="addToWishlist(${product.id}, this)"
                >
                    ♡
                </button>

            </div>


            <div class="product-info">

                <span class="product-category">
                    ${product.category}
                </span>

                <h3>
                    ${product.name}
                </h3>

                <p class="product-price">
                    ${product.price}
                </p>

                <button
                    class="add-cart-btn"
                    onclick="addToCart(${product.id})"
                >
                    Add to Cart
                </button>

            </div>

        `;


        productGrid.appendChild(productCard);

    });

}


/* =========================================
   FILTER CATEGORY
========================================= */

function filterCategory(category) {

    const filteredProducts =
        products.filter(function(product) {

            return product.category === category;

        });


    displayProducts(filteredProducts);


    const productSection =
        document.getElementById("products");


    if (productSection) {

        productSection.scrollIntoView({
            behavior: "smooth"
        });

    }

}


/* =========================================
   LOAD PRODUCTS
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        displayProducts();

    }
);