  /* =========================================
   ALKA JEWELLERS - MAIN JAVASCRIPT
========================================= */


/* =========================================
   SEARCH OPEN
========================================= */

function openSearch() {

    const searchOverlay =
        document.getElementById("searchOverlay");

    if (searchOverlay) {

        searchOverlay.classList.add("active");

        const searchInput =
            document.getElementById("searchInput");

        if (searchInput) {

            searchInput.focus();

        }

    }

}


/* =========================================
   SEARCH CLOSE
========================================= */

function closeSearch() {

    const searchOverlay =
        document.getElementById("searchOverlay");

    if (searchOverlay) {

        searchOverlay.classList.remove("active");

    }

}


/* =========================================
   SEARCH PRODUCTS
========================================= */

function searchProducts() {

    const input =
        document.getElementById("searchInput");

    const results =
        document.getElementById("searchResults");


    if (!input || !results) {

        return;

    }


    const searchText =
        input.value.toLowerCase().trim();


    if (searchText === "") {

        results.innerHTML = "";

        return;

    }


    const matchedProducts =
        products.filter(function(product) {

            return (

                product.name
                    .toLowerCase()
                    .includes(searchText)

                ||

                product.category
                    .toLowerCase()
                    .includes(searchText)

            );

        });


    if (matchedProducts.length === 0) {

        results.innerHTML = `
            <p>No jewellery found.</p>
        `;

        return;

    }


    results.innerHTML =
        matchedProducts.map(function(product) {

            return `

                <div class="search-item">

                    <strong>
                        ${product.name}
                    </strong>

                    <span>
                        ${product.price}
                    </span>

                </div>

            `;

        }).join("");

}


/* =========================================
   RASHI GEMSTONE
========================================= */

function selectRashi(rashiName) {


    const gemstones = {

        Aries: "Ruby",

        Taurus: "Emerald",

        Gemini: "Agate",

        Cancer: "Pearl",

        Leo: "Ruby",

        Virgo: "Blue Sapphire",

        Libra: "Opal",

        Scorpio: "Topaz",

        Sagittarius: "Turquoise",

        Capricorn: "Garnet",

        Aquarius: "Amethyst",

        Pisces: "Aquamarine"

    };


    const gemstone =
        gemstones[rashiName];


    if (gemstone) {

        alert(

            "✨ Your Rashi: " +
            rashiName +

            "\n\n💎 Recommended Gemstone: " +
            gemstone

        );

    }

}


/* =========================================
   CLOSE SEARCH WITH ESCAPE
========================================= */

document.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Escape") {

            closeSearch();

        }

    }
);


/* =========================================
   CLOSE SEARCH WHEN CLICKING OUTSIDE
========================================= */

document.addEventListener(
    "click",
    function(event) {

        const searchOverlay =
            document.getElementById("searchOverlay");


        const searchContainer =
            document.querySelector(
                ".search-container"
            );


        if (

            searchOverlay &&

            searchOverlay.classList.contains(
                "active"
            ) &&

            searchContainer &&

            !searchContainer.contains(
                event.target
            ) &&

            !event.target.closest(
                ".nav-icon"
            )

        ) {

            closeSearch();

        }

    }
);